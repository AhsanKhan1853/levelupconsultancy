from rest_framework.routers import DefaultRouter
from .views import SuccessStoryViewSet

router = DefaultRouter()
router.include_format_suffixes = False
router.register('stories', SuccessStoryViewSet, basename='story')

urlpatterns = router.urls