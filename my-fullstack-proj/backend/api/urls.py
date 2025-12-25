from django.urls import path
from .views import VolunteerCreateView

urlpatterns = [
    path('join/', VolunteerCreateView.as_view(), name='volunteer-join'),
]
