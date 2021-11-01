from rest_framework import serializers
from .models import Question

class QuestionSerializer(serializers.ModelSerializer):
    
    created_at = serializers.DateTimeField(format="%d-%b-%Y %H:%M", read_only=True)
    updated_at = serializers.DateTimeField(format="%d-%b-%Y %H:%M", read_only=True)

    class Meta:
        model = Question
        fields = ('id', 'ques_text', 'ques_image', 'ans_text', 'ans_audio', 'created_at', 'updated_at')
