from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions

from .models import TestSuit

class ListTestSuitsView(APIView):
    def get(self, request, format=None):
        user = self.request.user
        print(user)
        try:
            test_suit = TestSuit.objects.filter(user=user)
            result = []
            
            for suit in test_suit:
                if not suit.parent:
                    item = {}
                    item["parent"] = suit.parent
                    item['name'] = suit.name
                    item['photo'] = suit.photo.url
                    item['count'] = suit.count
                    item['date_issued'] = suit.date_issued
                    
                    item["sub_suit"] = []
                    
                    for cat in test_suit:
                        sub_item = {}
                        if cat.parent and cat.parent.id == suit.id:
                            sub_item["id"] = cat.id
                            sub_item["name"] = cat.name
                            item["sub_item"].append(sub_item)

                    result.append(item)

            return Response(
                {'test_suits':result},
                status=status.HTTP_200_OK
            )
        except:
            return Response(
                {'error':'Something went wrong when retriving orders'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
            
class ListTestSuitDetailView(APIView):
    def get(self, request, suitId, format=None):
        user = self.request.user
        
        try:
            if TestSuit.objects.filter(user=user).exists():
                test_suit = TestSuit.objects.get(user=user, id=suitId)
                result = {}
                result["parent"] = test_suit.parent
                result["name"] = test_suit.name
                result['photo'] = test_suit.photo.url
                result['count'] = test_suit.count
                result['date_issued'] = test_suit.date_issued
                
                return Response(
                    {'test_suit':result},
                    status=status.HTTP_200_OK
                )
            else:
                return Response(
                    {'error':'Test Suit with this id does not exist'},
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR
                )
        except:
            return Response(
                    {'error':'Test Suit with this id does not exist'},
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR
                )
        
        
