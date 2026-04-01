from django.shortcuts import render
from django.http import JsonResponse
from rest_framework import status

# Create your views here.
def index(req):
    return JsonResponse({"a":1}, status=status.HTTP_200_OK)
