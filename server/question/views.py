from django.db.models.query_utils import Q
from rest_framework.response import Response
from rest_framework import viewsets, status
from .models import Question
from .serializers import QuestionSerializer

class QuestionViewset(viewsets.ModelViewSet):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer