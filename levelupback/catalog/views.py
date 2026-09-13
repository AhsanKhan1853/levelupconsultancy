from rest_framework import viewsets, filters
from .models import Country, Course, University
from .serializers import CountrySerializer, CourseSerializer, UniversitySerializer


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


class UniversityViewSet(viewsets.ReadOnlyModelViewSet):
    """
    GET /api/universities/            -> all active universities, for dropdowns/cards
    GET /api/universities/?search=emmanuel
    """
    queryset = University.objects.filter(is_active=True).select_related('country')
    serializer_class = UniversitySerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['name', 'location']
    lookup_field = 'slug'