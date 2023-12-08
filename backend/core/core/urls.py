from django.contrib import admin
from django.urls import path, include
from Todo.urls import *

urlpatterns = [path("admin/", admin.site.urls), path("v1/api/", include("Todo.urls"))]
