# views.py
from rest_framework import viewsets, mixins
from .models import Feedback
from .serializers import FeedbackSerializer


class FeedbackViewSet(mixins.CreateModelMixin, viewsets.GenericViewSet):
    """
    POST /api/feedback/  -> anyone on the site can submit feedback.
    Nothing is exposed publicly for GET — client approves via admin first.
    """
    queryset = Feedback.objects.all()
    serializer_class = FeedbackSerializer