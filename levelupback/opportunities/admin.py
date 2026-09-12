from django.contrib import admin
from .models import Opportunity


@admin.register(Opportunity)
class OpportunityAdmin(admin.ModelAdmin):
    list_display = ('title', 'country', 'visa_type', 'is_hot', 'is_active', 'created_at')
    list_filter = ('country', 'visa_type', 'is_hot', 'is_active')
    search_fields = ('title', 'country', 'university', 'course')
    list_editable = ('is_hot', 'is_active')  # toggle "hot" right from the list view
    fieldsets = (
        ('Basic Info', {
            'fields': ('title', 'country', 'visa_type', 'qualification_level', 'course', 'university')
        }),
        ('Details', {
            'fields': ('description', 'image', 'deadline')
        }),
        ('Visibility', {
            'fields': ('is_hot', 'is_active')
        }),
    )