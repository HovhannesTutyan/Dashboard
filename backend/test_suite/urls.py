from django.shortcuts import render
from django.urls import path
from .views import ListTestSuitsView, ListTestSuitDetailView

urlpatterns = [
    path('get_suits', ListTestSuitsView.as_view()),
    path('get_suit/<suitId>', ListTestSuitDetailView.as_view()),
]