from rest_framework.routers import DefaultRouter
from .views import OpportunityViewSet

router = DefaultRouter()
router.include_format_suffixes = False
router.register('opportunities', OpportunityViewSet, basename='opportunity')

urlpatterns = router.urls