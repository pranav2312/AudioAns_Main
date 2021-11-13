from django.urls import path
from django.urls.conf import include
from rest_framework.documentation import include_docs_urls
from .api import RegisterApi
urlpatterns = [
    # for api docs
    path('docs/', include_docs_urls(title='VITA-API')),
    # for questions 
    path('question/', include('question.urls'), name='question'),
     path('register/', RegisterApi.as_view())
]
