from rest_framework.routers import DefaultRouter
from .views import CountryViewSet, CourseViewSet, UniversityViewSet

router = DefaultRouter()
router.register('countries', CountryViewSet, basename='country')
router.register('courses', CourseViewSet, basename='course')
router.register('universities', UniversityViewSet, basename='university')

urlpatterns = router.urls