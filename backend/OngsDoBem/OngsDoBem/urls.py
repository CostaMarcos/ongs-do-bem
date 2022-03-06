from django.contrib import admin
from django.urls import path
from rest_framework.routers import DefaultRouter
from django.shortcuts import redirect
from django.urls import reverse, include, path

from ong.api import viewsets as ong
from case.api import viewsets as case

routers = DefaultRouter()
routers.register(r'ong', ong.OngViewSet)
routers.register(r'case', case.CaseViewSet)

urlpatterns = [
    path('', lambda request: redirect(reverse('api-root'))),
    path('admin/', admin.site.urls),
    path('api/', include(routers.urls), name='api-root')
]
