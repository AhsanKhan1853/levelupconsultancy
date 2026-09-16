from rest_framework.routers import DefaultRouter
from .views import CountryViewSet, CourseViewSet

router = DefaultRouter()
router.include_format_suffixes = False  # only one router process-wide may register the suffix converter
router.register('countries', CountryViewSet, basename='country')
router.register('courses', CourseViewSet, basename='course')

urlpatterns = router.urls