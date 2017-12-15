from django.conf.urls import url
from django.contrib import admin
from django.conf.urls import include

from . import views

urlpatterns = [
    url(r'^$', views.profile_list.as_view()),
    url(r'^(?P<pk>[0-9]+)$', views.profile_detail.as_view()),
    url(r'^', include('django.contrib.auth.urls')),
]
