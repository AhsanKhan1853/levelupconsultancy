import django.db.models.deletion
from django.db import migrations, models


def migrate_university_text_to_fk(apps, schema_editor):
    Opportunity = apps.get_model('opportunities', 'Opportunity')
    University = apps.get_model('catalog', 'University')

    for opp in Opportunity.objects.all():
        uni_name = (opp.university_text or '').strip()
        if uni_name:
            uni, _ = University.objects.get_or_create(
                name=uni_name,
                defaults={'slug': uni_name.lower().replace(' ', '-')},
            )
            opp.university_new = uni
            opp.save(update_fields=['university_new'])


def reverse_university_fk_to_text(apps, schema_editor):
    Opportunity = apps.get_model('opportunities', 'Opportunity')
    for opp in Opportunity.objects.all():
        opp.university_text = opp.university_new.name if opp.university_new else ''
        opp.save(update_fields=['university_text'])


class Migration(migrations.Migration):

    dependencies = [
        ('catalog', '0002_university'),
        ('opportunities', '0002_country_course_to_fk'),
    ]

    operations = [
        # --- rename course (FK) -> discipline, deadline -> admission_deadline ---
        migrations.RenameField(
            model_name='opportunity',
            old_name='course',
            new_name='discipline',
        ),
        migrations.RenameField(
            model_name='opportunity',
            old_name='deadline',
            new_name='admission_deadline',
        ),

        # --- new simple fields ---
        migrations.AddField(
            model_name='opportunity',
            name='duration',
            field=models.CharField(blank=True, help_text="e.g. '4 year'", max_length=50),
        ),
        migrations.AddField(
            model_name='opportunity',
            name='specialization',
            field=models.CharField(blank=True, help_text="Specific specialization, e.g. 'Accounting'", max_length=150),
        ),
        migrations.AddField(
            model_name='opportunity',
            name='language',
            field=models.CharField(blank=True, default='English', max_length=50),
        ),
        migrations.AddField(
            model_name='opportunity',
            name='intakes',
            field=models.CharField(blank=True, help_text="e.g. 'September, January'", max_length=150),
        ),
        migrations.AddField(
            model_name='opportunity',
            name='study_mode',
            field=models.CharField(
                blank=True, max_length=20,
                choices=[('on_campus', 'On Campus'), ('online', 'Online'), ('hybrid', 'Hybrid')],
            ),
        ),
        migrations.AddField(
            model_name='opportunity',
            name='study_format',
            field=models.CharField(
                blank=True, max_length=20,
                choices=[('full_time', 'Full-time'), ('part_time', 'Part-time')],
            ),
        ),
        migrations.AddField(
            model_name='opportunity',
            name='application_fee',
            field=models.CharField(blank=True, help_text="e.g. 'USD 100'", max_length=50),
        ),
        migrations.AddField(
            model_name='opportunity',
            name='tuition_fee',
            field=models.CharField(blank=True, help_text="e.g. 'USD 46,200 / Year'", max_length=50),
        ),

        # --- convert the free-text university field into a FK to catalog.University ---
        migrations.RenameField(
            model_name='opportunity',
            old_name='university',
            new_name='university_text',
        ),
        migrations.AddField(
            model_name='opportunity',
            name='university_new',
            field=models.ForeignKey(
                to='catalog.university', on_delete=django.db.models.deletion.SET_NULL,
                related_name='opportunities', null=True, blank=True,
            ),
        ),
        migrations.RunPython(migrate_university_text_to_fk, reverse_university_fk_to_text),
        migrations.RemoveField(model_name='opportunity', name='university_text'),
        migrations.RenameField(
            model_name='opportunity',
            old_name='university_new',
            new_name='university',
        ),
    ]