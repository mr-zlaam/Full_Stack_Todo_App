from django.shortcuts import render
from rest_framework import viewsets
from .models import todoModel
from .serializers import *


# Create your views here.
class TodoViewSet(viewsets.ModelViewSet):
    # queryset = models.todoModel.objects.all()
    queryset = todoModel.objects.all()
    serializer_class = TodoSerializers
