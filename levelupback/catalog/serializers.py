from rest_framework import serializers
from .models import Country, Course


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
