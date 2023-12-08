from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from Todo.views import *

router = routers.DefaultRouter()
router.register("todo", TodoViewSet, basename="todo")
urlpatterns = []
urlpatterns += router.urls
