from django.db import models
from catalog.models import Country, Course

VISA_TYPES = [
    ('study', 'Study Visa'),
    ('visit', 'Visit Visa'),
    ('work', 'Work Visa'),
]

QUALIFICATION_LEVELS = [
    ('undergrad', 'Undergraduate'),
    ('postgrad', 'Postgraduate'),
    ('phd', 'PhD / Research'),
]

STUDY_MODES = [
    ('on_campus', 'On Campus'),
    ('online', 'Online'),
    ('hybrid', 'Hybrid'),
]

STUDY_FORMATS = [
    ('full_time', 'Full-time'),
    ('part_time', 'Part-time'),
]

INSTITUTE_TYPES = [
    ('public', 'Public'),
    ('private', 'Private'),
]


class Opportunity(models.Model):
    title = models.CharField(max_length=200)
    country = models.ForeignKey(
        Country, on_delete=models.PROTECT, related_name='opportunities'
    )
    visa_type = models.CharField(max_length=20, choices=VISA_TYPES, default='study')

    # --- Course Information ---
    duration = models.CharField(max_length=50, blank=True, help_text="e.g. '4 year'")
    qualification_level = models.CharField(
        max_length=20, choices=QUALIFICATION_LEVELS, blank=True,
        help_text="Shown as 'Level' on the course info panel"
    )
    discipline = models.ForeignKey(
        Course, on_delete=models.SET_NULL, related_name='opportunities', blank=True, null=True,
        help_text="Broad field of study, e.g. 'Business & Management'"
    )
    specialization = models.CharField(
        max_length=150, blank=True, help_text="Specific specialization, e.g. 'Accounting'"
    )
    language = models.CharField(max_length=50, blank=True, default='English')
    admission_deadline = models.DateField(blank=True, null=True)
    intakes = models.CharField(max_length=150, blank=True, help_text="e.g. 'September, January'")
    study_mode = models.CharField(max_length=20, choices=STUDY_MODES, blank=True)
    study_format = models.CharField(max_length=20, choices=STUDY_FORMATS, blank=True)

    # --- Tuition Fee ---
    application_fee = models.CharField(max_length=50, blank=True, help_text="e.g. 'USD 100'")
    tuition_fee = models.CharField(max_length=50, blank=True, help_text="e.g. 'USD 46,200 / Year'")

    # --- About This University ---
    university_name = models.CharField(
        max_length=200, blank=True, help_text="e.g. 'Harvard University'"
    )
    location = models.CharField(
        max_length=150, blank=True,
        help_text="Shown below the university name on the opportunity card, e.g. 'Boston, Massachusetts, USA'"
    )
    institute_type = models.CharField(max_length=10, choices=INSTITUTE_TYPES, blank=True)
    institute_sector = models.CharField(max_length=100, blank=True, help_text="e.g. 'Non-Profit'")
    established_year = models.PositiveIntegerField(blank=True, null=True)
    campus = models.CharField(max_length=150, blank=True, help_text="e.g. 'Main Campus'")
    address = models.TextField(blank=True)

    description = models.TextField()
    image = models.ImageField(
        upload_to='opportunities/', blank=True, null=True,
        help_text="Cover photo shown behind the logo on the opportunity card"
    )
    logo = models.ImageField(
        upload_to='opportunities/logos/', blank=True, null=True,
        help_text="University logo shown on the opportunity card"
    )
    is_hot = models.BooleanField(default=False, help_text="Show this on the landing page as a Hot Opportunity")
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.title} ({self.country})"