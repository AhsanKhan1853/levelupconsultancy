from django.contrib import admin
from django.utils.html import format_html
from .models import Country, Course


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
