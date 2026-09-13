from rest_framework import viewsets, filters
from django_filters.rest_framework import DjangoFilterBackend
from .models import Opportunity
from .serializers import OpportunitySerializer


class OpportunityViewSet(viewsets.ReadOnlyModelViewSet):
    """
    GET /api/opportunities/                        -> all active opportunities
    GET /api/opportunities/?is_hot=true             -> hot ones for the landing page
    GET /api/opportunities/?country__slug=uk
    GET /api/opportunities/?course__slug=engineering
    GET /api/opportunities/?search=engineering
    """
    queryset = Opportunity.objects.filter(is_active=True).select_related('country', 'course')
    serializer_class = OpportunitySerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = {
        'country__slug': ['exact'],
        'course__slug': ['exact'],
        'visa_type': ['exact'],
        'qualification_level': ['exact'],
        'is_hot': ['exact'],
    }
    search_fields = ['title', 'course__name', 'university', 'country__name']
