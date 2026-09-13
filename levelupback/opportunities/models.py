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


class Opportunity(models.Model):
    title = models.CharField(max_length=200)
    country = models.ForeignKey(
        Country, on_delete=models.PROTECT, related_name='opportunities'
    )
    visa_type = models.CharField(max_length=20, choices=VISA_TYPES, default='study')
    qualification_level = models.CharField(max_length=20, choices=QUALIFICATION_LEVELS, blank=True)
    course = models.ForeignKey(
        Course, on_delete=models.SET_NULL, related_name='opportunities', blank=True, null=True
    )
    university = models.CharField(max_length=150, blank=True)
    description = models.TextField()
    image = models.ImageField(upload_to='opportunities/', blank=True, null=True)
    deadline = models.DateField(blank=True, null=True)
    is_hot = models.BooleanField(default=False, help_text="Show this on the landing page as a Hot Opportunity")
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.title} ({self.country})"
