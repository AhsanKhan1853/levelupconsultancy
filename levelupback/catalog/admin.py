from django.contrib import admin
from django.utils.html import format_html
from .models import Country, Course, University


@admin.register(Country)
class CountryAdmin(admin.ModelAdmin):
    list_display = ('name', 'thumb', 'universities_count', 'starting_fee', 'order', 'is_active')
    list_filter = ('is_active',)
    search_fields = ('name',)
    list_editable = ('order', 'is_active')
    prepopulated_fields = {'slug': ('name',)}
    fieldsets = (
        ('Basic Info', {'fields': ('name', 'slug', 'image')}),
        ('Details', {'fields': ('description', 'universities_count', 'starting_fee')}),
        ('Visibility', {'fields': ('order', 'is_active')}),
    )

    def thumb(self, obj):
        if obj.image:
            return format_html('<img src="{}" style="height:32px;border-radius:4px;" />', obj.image.url)
        return '—'
    thumb.short_description = 'Image'


@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = ('name', 'thumb', 'order', 'is_active')
    list_filter = ('is_active',)
    search_fields = ('name',)
    list_editable = ('order', 'is_active')
    prepopulated_fields = {'slug': ('name',)}
    fieldsets = (
        ('Basic Info', {'fields': ('name', 'slug', 'image')}),
        ('Details', {'fields': ('description',)}),
        ('Visibility', {'fields': ('order', 'is_active')}),
    )

    def thumb(self, obj):
        if obj.image:
            return format_html('<img src="{}" style="height:32px;border-radius:4px;" />', obj.image.url)
        return '—'
    thumb.short_description = 'Image'


@admin.register(University)
class UniversityAdmin(admin.ModelAdmin):
    list_display = ('name', 'thumb', 'location', 'institute_type', 'established_year', 'order', 'is_active')
    list_filter = ('institute_type', 'is_active', 'country')
    search_fields = ('name', 'location')
    list_editable = ('order', 'is_active')
    prepopulated_fields = {'slug': ('name',)}
    autocomplete_fields = ('country',)
    fieldsets = (
        ('Basic Info', {'fields': ('name', 'slug', 'logo', 'cover_image')}),
        ('Location', {'fields': ('location', 'country', 'campus', 'address')}),
        ('Details', {'fields': ('institute_type', 'institute_sector', 'established_year')}),
        ('Visibility', {'fields': ('order', 'is_active')}),
    )

    def thumb(self, obj):
        if obj.logo:
            return format_html('<img src="{}" style="height:32px;border-radius:4px;" />', obj.logo.url)
        return '—'
    thumb.short_description = 'Logo'