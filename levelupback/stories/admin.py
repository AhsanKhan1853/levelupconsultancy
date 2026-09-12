from django.contrib import admin
from .models import SuccessStory


@admin.register(SuccessStory)
class SuccessStoryAdmin(admin.ModelAdmin):
    list_display = ('student_name', 'country', 'university', 'is_hot', 'is_active', 'created_at')
    list_filter = ('country', 'is_hot', 'is_active')
    search_fields = ('student_name', 'country', 'university')
    list_editable = ('is_hot', 'is_active')