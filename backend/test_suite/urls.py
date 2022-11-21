from django.shortcuts import render
from django.urls import path
from .views import ListTestSuitsView, ListTestSuitDetailView

urlpatterns = [
    path('suits', ListTestSuitsView.as_view()),
    path('suit/<suitId>', ListTestSuitDetailView.as_view()),
]