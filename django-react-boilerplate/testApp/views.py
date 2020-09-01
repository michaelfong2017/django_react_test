from django.shortcuts import render

from django.http import HttpResponse, JsonResponse
from django.views import View
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
import datetime
import json
from testApp.models import TestData


# Create your views here.
def current_datetime(self, request):
    now = datetime.datetime.now()
    html = "<html><body>It is now %s.</body></html>" % now

    return HttpResponse(html)


@method_decorator(csrf_exempt, name='dispatch')
class MyView(View):
    def get(self, request):
        # <view logic>
        html = "<html><body>username is %s.</body></html>" % TestData.objects.all(
        )[0].username
        testData = TestData.objects.all()
        print(testData)
        return HttpResponse(html)

    def post(self, request):
        data = json.loads(request.body.decode("utf-8"))
        username = data.get('username')
        TestData.objects.all().delete()
        testData = TestData.objects.create(username=username)
        testData.save()
        print(data)
        print(testData)
        return JsonResponse(data)