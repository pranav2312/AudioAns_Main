from rest_framework import routers
from django.urls import path, include
from .views import QuestionViewset

router = routers.DefaultRouter()
router.register(r'', QuestionViewset)

urlpatterns = [
    path('', include(router.urls)),
]