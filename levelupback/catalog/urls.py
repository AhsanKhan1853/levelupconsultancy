from rest_framework.routers import DefaultRouter
from .views import CountryViewSet, CourseViewSet

router = DefaultRouter()
router.register('countries', CountryViewSet, basename='country')
router.register('courses', CourseViewSet, basename='course')

urlpatterns = router.urls