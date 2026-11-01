from django.urls import path
from .views import *

urlpatterns = [
    path('',home, name='home'),
    path('air-ticketing/', air_ticketing, name='air_ticketing'),
    path('services/', services, name='services'),
]
