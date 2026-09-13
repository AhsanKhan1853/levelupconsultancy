import django.db.models.deletion
from django.db import migrations, models


def migrate_text_to_fk(apps, schema_editor):
    Opportunity = apps.get_model('opportunities', 'Opportunity')
    Country = apps.get_model('catalog', 'Country')
    Course = apps.get_model('catalog', 'Course')

    for opp in Opportunity.objects.all():
        country_name = (opp.country_text or '').strip()
        if country_name:
            country, _ = Country.objects.get_or_create(
                name=country_name,
                defaults={'slug': country_name.lower().replace(' ', '-')},
            )
            opp.country_new = country

        course_name = (opp.course_text or '').strip()
        if course_name:
            course, _ = Course.objects.get_or_create(
                name=course_name,
                defaults={'slug': course_name.lower().replace(' ', '-')},
            )
            opp.course_new = course

        opp.save(update_fields=['country_new', 'course_new'])


def reverse_migrate(apps, schema_editor):
    Opportunity = apps.get_model('opportunities', 'Opportunity')
    for opp in Opportunity.objects.all():
        opp.country_text = opp.country_new.name if opp.country_new else ''
        opp.course_text = opp.course_new.name if opp.course_new else ''
        opp.save(update_fields=['country_text', 'course_text'])


class Migration(migrations.Migration):

    dependencies = [
        ('catalog', '0001_initial'),
        ('opportunities', '0001_initial'),
    ]

    operations = [
        # 1. rename the old text columns out of the way
        migrations.RenameField(
            model_name='opportunity',
            old_name='country',
            new_name='country_text',
        ),
        migrations.RenameField(
            model_name='opportunity',
            old_name='course',
            new_name='course_text',
        ),
        # 2. add the new nullable FK columns
        migrations.AddField(
            model_name='opportunity',
            name='country_new',
            field=models.ForeignKey(
                to='catalog.country', on_delete=django.db.models.deletion.PROTECT,
                related_name='opportunities', null=True,
            ),
        ),
        migrations.AddField(
            model_name='opportunity',
            name='course_new',
            field=models.ForeignKey(
                to='catalog.course', on_delete=django.db.models.deletion.SET_NULL,
                related_name='opportunities', null=True, blank=True,
            ),
        ),
        # 3. backfill Country/Course rows and point existing opportunities at them
        migrations.RunPython(migrate_text_to_fk, reverse_migrate),
        # 4. drop the old text columns
        migrations.RemoveField(model_name='opportunity', name='country_text'),
        migrations.RemoveField(model_name='opportunity', name='course_text'),
        # 5. rename the new FK columns into their final names
        migrations.RenameField(
            model_name='opportunity',
            old_name='country_new',
            new_name='country',
        ),
        migrations.RenameField(
            model_name='opportunity',
            old_name='course_new',
            new_name='course',
        ),
        # 6. country is required going forward, matching the original text field
        migrations.AlterField(
            model_name='opportunity',
            name='country',
            field=models.ForeignKey(
                to='catalog.country', on_delete=django.db.models.deletion.PROTECT,
                related_name='opportunities',
            ),
        ),
    ]
