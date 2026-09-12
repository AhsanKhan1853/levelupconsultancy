from django.db import models


class SuccessStory(models.Model):
    student_name = models.CharField(max_length=150)
    country = models.CharField(max_length=100)
    university = models.CharField(max_length=150, blank=True)
    photo = models.ImageField(upload_to='stories/', blank=True, null=True)
    story = models.TextField()
    video_url = models.URLField(blank=True, help_text="Optional YouTube/testimonial video link")
    is_hot = models.BooleanField(default=False, help_text="Feature this on the landing page")
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.student_name} – {self.country}"