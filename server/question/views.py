from django.db.models.query_utils import Q
from rest_framework.response import Response
from rest_framework import viewsets, status
from .models import Question
from .serializers import QuestionSerializer
from rest_framework.permissions import IsAuthenticated
class QuestionViewset(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer