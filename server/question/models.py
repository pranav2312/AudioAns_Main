from django.db import models

# Create your models here.

class Question(models.Model):
    ques_text = models.CharField(max_length=200)
    ques_image = models.ImageField(upload_to='ques_images/', null=True)
    ans_text = models.CharField(max_length=500, default='No Answer Yet!')
    ans_audio = models.FileField(upload_to='ans_audios/', null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.ques_text