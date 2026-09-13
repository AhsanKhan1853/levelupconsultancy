from django.db import models
from django.utils.text import slugify


class Country(models.Model):
    """A study destination that can be picked from a dropdown across the site."""
    name = models.CharField(max_length=100, unique=True)
    slug = models.SlugField(max_length=110, unique=True, blank=True)
    image = models.ImageField(upload_to='countries/', blank=True, null=True)
    description = models.TextField(blank=True)
    universities_count = models.CharField(
        max_length=50, blank=True,
        help_text="Shown on the Destinations card, e.g. '150+ Universities'"
    )
    starting_fee = models.CharField(
        max_length=50, blank=True,
        help_text="Shown on the Destinations card, e.g. '£12,000+ / year'"
    )
    is_active = models.BooleanField(default=True, help_text="Only active countries appear on the site")
    order = models.PositiveIntegerField(default=0, help_text="Lower numbers show first")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['order', 'name']
        verbose_name_plural = 'Countries'

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name


class Course(models.Model):
    """A field of study that can be picked from a dropdown across the site."""
    name = models.CharField(max_length=150, unique=True)
    slug = models.SlugField(max_length=160, unique=True, blank=True)
    image = models.ImageField(upload_to='courses/', blank=True, null=True)
    description = models.TextField(blank=True)
    is_active = models.BooleanField(default=True, help_text="Only active courses appear on the site")
    order = models.PositiveIntegerField(default=0, help_text="Lower numbers show first")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['order', 'name']

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name
