from rest_framework import viewsets, filters
from .models import Country, Course
from .serializers import CountrySerializer, CourseSerializer


class CountryViewSet(viewsets.ReadOnlyModelViewSet):
    """
    GET /api/countries/            -> all active countries, for dropdowns/cards
    GET /api/countries/?search=uk
    """
    queryset = Country.objects.filter(is_active=True)
    serializer_class = CountrySerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['name']
    lookup_field = 'slug'


class CourseViewSet(viewsets.ReadOnlyModelViewSet):
    """
    GET /api/courses/               -> all active courses, for dropdowns
    GET /api/courses/?search=business
    """
    queryset = Course.objects.filter(is_active=True)
    serializer_class = CourseSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['name']
    lookup_field = 'slug'