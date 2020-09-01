from django.contrib import admin
from django.urls import path
from django.urls import include

from . import views
from . import models

urlpatterns = [
    path('api/test/', views.current_datetime),
    path('api/data/', views.MyView.as_view()),
]