from django.contrib import admin
from .models import Opportunity


@admin.register(Opportunity)
class OpportunityAdmin(admin.ModelAdmin):
    list_display = ('title', 'university', 'country', 'discipline', 'qualification_level', 'is_hot', 'is_active', 'created_at')
    list_filter = ('country', 'visa_type', 'qualification_level', 'study_mode', 'study_format', 'is_hot', 'is_active')
    search_fields = ('title', 'country__name', 'university__name', 'discipline__name', 'specialization')
    autocomplete_fields = ('country', 'discipline', 'university')
    list_editable = ('is_hot', 'is_active')  # toggle "hot" right from the list view
    fieldsets = (
        ('Basic Info', {
            'fields': ('title', 'country', 'visa_type', 'university', 'location')
        }),
        ('Course Information', {
            'fields': (
                'duration', 'qualification_level', 'discipline', 'specialization',
                'language', 'admission_deadline', 'intakes', 'study_mode', 'study_format',
            )
        }),
        ('Tuition Fee', {
            'fields': ('application_fee', 'tuition_fee')
        }),
        ('Details', {
            'fields': ('description', 'image', 'logo')
        }),
        ('Visibility', {
            'fields': ('is_hot', 'is_active')
        }),
    )