from rest_framework import serializers
from .models import *


class TodoSerializers(serializers.ModelSerializer):
    class Meta:
        model = todoModel
        fields = "__all__"
