# urls.py
from rest_framework.routers import DefaultRouter
from .views import FeedbackViewSet

router = DefaultRouter()
router.include_format_suffixes = False
router.register('feedback', FeedbackViewSet, basename='feedback')

urlpatterns = router.urls