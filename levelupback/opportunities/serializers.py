from rest_framework import serializers
from .models import Opportunity
from catalog.serializers import CountrySerializer, CourseSerializer
from catalog.models import Country, Course


class OpportunitySerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()
    country = CountrySerializer(read_only=True)
    course = CourseSerializer(read_only=True)
    country_id = serializers.PrimaryKeyRelatedField(
        queryset=Country.objects.all(), source='country', write_only=True
    )
    course_id = serializers.PrimaryKeyRelatedField(
        queryset=Course.objects.all(), source='course', write_only=True, required=False, allow_null=True
    )

    class Meta:
        model = Opportunity
        fields = [
            'id', 'title', 'country', 'country_id', 'visa_type', 'qualification_level',
            'course', 'course_id', 'university', 'description', 'image_url',
            'deadline', 'is_hot', 'created_at',
        ]

    def get_image_url(self, obj):
        request = self.context.get('request')
        if obj.image and request:
            return request.build_absolute_uri(obj.image.url)
        return None
