from rest_framework import serializers
from .models import Opportunity
from catalog.serializers import CountrySerializer, CourseSerializer, UniversitySerializer
from catalog.models import Country, Course, University


class OpportunitySerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()
    logo_url = serializers.SerializerMethodField()
    country = CountrySerializer(read_only=True)
    discipline = CourseSerializer(read_only=True)
    university = UniversitySerializer(read_only=True)
    qualification_level_display = serializers.CharField(source='get_qualification_level_display', read_only=True)
    study_mode_display = serializers.CharField(source='get_study_mode_display', read_only=True)
    study_format_display = serializers.CharField(source='get_study_format_display', read_only=True)

    # write-only ids, used when creating/editing via API instead of the free text/relations above
    country_id = serializers.PrimaryKeyRelatedField(
        queryset=Country.objects.all(), source='country', write_only=True
    )
    discipline_id = serializers.PrimaryKeyRelatedField(
        queryset=Course.objects.all(), source='discipline', write_only=True, required=False, allow_null=True
    )
    university_id = serializers.PrimaryKeyRelatedField(
        queryset=University.objects.all(), source='university', write_only=True, required=False, allow_null=True
    )

    class Meta:
        model = Opportunity
        fields = [
            'id', 'title', 'country', 'country_id', 'visa_type',
            # Course Information
            'duration', 'qualification_level', 'qualification_level_display',
            'discipline', 'discipline_id', 'specialization', 'language',
            'admission_deadline', 'intakes', 'study_mode', 'study_mode_display',
            'study_format', 'study_format_display',
            # Tuition Fee
            'application_fee', 'tuition_fee',
            # About This University
            'university', 'university_id', 'location',
            # Misc
            'description', 'image_url', 'logo_url', 'is_hot', 'created_at',
        ]

    def get_image_url(self, obj):
        request = self.context.get('request')
        if obj.image and request:
            return request.build_absolute_uri(obj.image.url)
        return None

    def get_logo_url(self, obj):
        request = self.context.get('request')
        if obj.logo and request:
            return request.build_absolute_uri(obj.logo.url)
        return None