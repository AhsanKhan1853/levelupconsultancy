# views.py
from rest_framework import viewsets
from .models import SuccessStory
from .serializers import SuccessStorySerializer


class SuccessStoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = SuccessStory.objects.filter(is_active=True)
    serializer_class = SuccessStorySerializer
    filterset_fields = ['country', 'is_hot']