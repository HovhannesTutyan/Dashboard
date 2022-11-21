from django.shortcuts import render
from django.urls import path
from .views import TestcaseDetailView, ListTestcaseView, ListSearchView

urlpatterns = [
    path('case/<testcaseId>', TestcaseDetailView.as_view()),
    path('cases/', ListTestcaseView.as_view()),
    path('search', ListSearchView.as_view()),
]