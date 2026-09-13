from rest_framework import serializers
from .models import Country, Course, University


class CountrySerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()

    class Meta:
        model = Country
        fields = [
            'id', 'name', 'slug', 'image_url', 'description',
            'universities_count', 'starting_fee', 'order',
        ]

    def get_image_url(self, obj):
        request = self.context.get('request')
        if obj.image and request:
            return request.build_absolute_uri(obj.image.url)
        return None


class CourseSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()

    class Meta:
        model = Course
        fields = ['id', 'name', 'slug', 'image_url', 'description', 'order']

    def get_image_url(self, obj):
        request = self.context.get('request')
        if obj.image and request:
            return request.build_absolute_uri(obj.image.url)
        return None


class UniversitySerializer(serializers.ModelSerializer):
    logo_url = serializers.SerializerMethodField()
    cover_image_url = serializers.SerializerMethodField()
    country = CountrySerializer(read_only=True)
    institute_type_display = serializers.CharField(source='get_institute_type_display', read_only=True)

    class Meta:
        model = University
        fields = [
            'id', 'name', 'slug', 'logo_url', 'cover_image_url', 'location', 'country',
            'institute_type', 'institute_type_display', 'institute_sector',
            'established_year', 'campus', 'address',
        ]

    def get_logo_url(self, obj):
        request = self.context.get('request')
        if obj.logo and request:
            return request.build_absolute_uri(obj.logo.url)
        return None

    def get_cover_image_url(self, obj):
        request = self.context.get('request')
        if obj.cover_image and request:
            return request.build_absolute_uri(obj.cover_image.url)
        return None