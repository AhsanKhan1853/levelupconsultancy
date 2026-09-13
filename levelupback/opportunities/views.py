from rest_framework import viewsets, filters
from django_filters.rest_framework import DjangoFilterBackend
from .models import Opportunity
from .serializers import OpportunitySerializer


class OpportunityViewSet(viewsets.ReadOnlyModelViewSet):
    """
    GET /api/opportunities/                          -> all active opportunities
    GET /api/opportunities/?is_hot=true               -> hot ones for the landing page
    GET /api/opportunities/?country__slug=uk
    GET /api/opportunities/?discipline__slug=business
    GET /api/opportunities/?qualification_level=undergrad
    GET /api/opportunities/?study_mode=on_campus
    GET /api/opportunities/?study_format=full_time
    GET /api/opportunities/?university__institute_type=private
    GET /api/opportunities/?search=engineering
    """
    queryset = Opportunity.objects.filter(is_active=True).select_related('country', 'discipline', 'university', 'university__country')
    serializer_class = OpportunitySerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = {
        'country__slug': ['exact'],
        'discipline__slug': ['exact'],
        'visa_type': ['exact'],
        'qualification_level': ['exact'],
        'study_mode': ['exact'],
        'study_format': ['exact'],
        'language': ['exact', 'icontains'],
        'specialization': ['icontains'],
        'intakes': ['icontains'],
        'duration': ['icontains'],
        'university__slug': ['exact'],
        'university__institute_type': ['exact'],
        'university__country__slug': ['exact'],
        'university__campus': ['icontains'],
        'is_hot': ['exact'],
    }
    search_fields = ['title', 'discipline__name', 'university__name', 'specialization', 'country__name']