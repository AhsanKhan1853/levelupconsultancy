from rest_framework import viewsets, filters
from django_filters.rest_framework import DjangoFilterBackend
from .models import Opportunity
from .serializers import OpportunitySerializer


class OpportunityViewSet(viewsets.ReadOnlyModelViewSet):
    """
    GET /api/opportunities/                -> all active opportunities
    GET /api/opportunities/?is_hot=true    -> hot ones for the landing page
    GET /api/opportunities/?country=UK
    GET /api/opportunities/?search=engineering
    """
    queryset = Opportunity.objects.filter(is_active=True)
    serializer_class = OpportunitySerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ['country', 'visa_type', 'qualification_level', 'is_hot']
    search_fields = ['title', 'course', 'university', 'country']