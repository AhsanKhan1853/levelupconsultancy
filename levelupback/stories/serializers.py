from rest_framework import serializers
from .models import SuccessStory


class SuccessStorySerializer(serializers.ModelSerializer):
    photo_url = serializers.SerializerMethodField()

    class Meta:
        model = SuccessStory
        fields = [
            'id', 'student_name', 'country', 'university',
            'photo_url', 'story', 'video_url', 'is_hot', 'created_at',
        ]

    def get_photo_url(self, obj):
        request = self.context.get('request')
        if obj.photo and request:
            return request.build_absolute_uri(obj.photo.url)
        return None