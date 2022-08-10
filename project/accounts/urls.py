from django.contrib import admin
from django.urls import include, re_path

from . import views

urlpatterns = [
    re_path(r'^$', views.profile_list.as_view()),
    re_path(r'^(?P<pk>[0-9]+)$', views.profile_detail.as_view()),
    re_path(r'^', include('django.contrib.auth.urls')),
]
