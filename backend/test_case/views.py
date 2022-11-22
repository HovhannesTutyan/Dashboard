from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions, status

from test_case.models import TestCase
from test_suite.models import TestSuit
from test_case.serializers import TestCaseSerializer

from django.db.models import Q

class TestcaseDetailView(APIView):
    def get(self, request, testcaseId, format=None):
        user = self.request.user
        try:
            if TestCase.objects.filter(user=user, testcase_id=testcaseId).exists():
                test_case = TestCase.objects.get(user=user, testcase_id=testcaseId)
                serializer = TestCaseSerializer(test_case)
                
                return Response(
                    {'test_case':serializer.data },
                    status=status.HTTP_200_OK
                )
            else:
                return Response(
                    {'error':'Test case with this ID does not exist'},
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR
                )
        except:
            return Response (
                {'error':'Order with this transaction ID does not exist'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

class ListTestcaseView(APIView):
    def get(self, request, format=None):
        user = self.request.user
        sortBy = request.query_params.get('sortBy', None)
        if not (sortBy=='date_created' or sortBy == 'title' or sortBy == 'status' or sortBy == 'test_suit'):
            sortBy = 'date_created'

        order = request.query_params.get('order', None)
        limit = request.query_params.get('limit', None)

        if not limit:
            limit = 6

        try:
            limit = int(limit)
        except:
            return Response (
                {'error':'Limit must be an integer'},
                status=status.HTTP_404_NOT_FOUND
            )

        if limit <= 0:
            limit = 6

        if order == 'desc':
            sortBy = '-' + sortBy
            test_cases = TestCase.objects.filter(user=user).order_by(sortBy).all()[:int(limit)]
        elif order == 'asc':
            test_cases = TestCase.objects.filter(user=user).order_by(sortBy).all()[:int(limit)]
        else:
            test_cases = TestCase.objects.filter(user=user).order_by(sortBy).all()
        
        test_cases = TestCaseSerializer(test_cases, many=True)

        if test_cases:
            return Response({'test_cases':test_cases.data}, status=status.HTTP_200_OK)
        else:
            return Response ({'error':'No products found'}, status=status.HTTP_404_NOT_FOUND)

class ListSearchView(APIView):
    def post(self, request, format=None):
        user = self.request.user
        data = self.request.data

        try:
            testsuit_id = int(data['testsuit_id'])
        except:
            return Response(
                {'error':'Test Suit ID must be an integer'},
                status=status.HTTP_404_NOT_FOUND
            )

        search = data["search"]

        if len(search) == 0:
            search_results = TestCase.objects.filter(user=user).order_by('-date_created').all()
        else:
            search_results = TestCase.objects.filter(user=user).filter(Q(title__icontains=search) | Q(description__icontains=search))

        if testsuit_id == 0:
            search_results = TestCaseSerializer(search_results, many=True)
            return Response (
                {'search_cases':search_results.data},
                status=status.HTTP_200_OK
            )
        
        if not TestCase.objects.filter(id=testsuit_id).exists():
            return Response(
                {'error':'Test Suit not found'},
                status=status.HTTP_404_NOT_FOUND
            )
        
        search_results = TestCaseSerializer(search_results, many=True)

        print('search', search_results)
        return Response (
            {'search_cases':search_results.data},
            status=status.HTTP_200_OK
        )
        
        


    
        


