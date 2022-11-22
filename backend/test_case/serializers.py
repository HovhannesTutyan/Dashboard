from rest_framework import serializers
from .models import TestCase

class TestCaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = TestCase
        fields = [
            'testcase_id', 
            'title',
            'description',
            'photo',
            'reproduction_steps',
            'expected_results',
            'actual_results',
            'comments',
            'environment',
            'test_suit',
            'status',
            'date_created',
        ]