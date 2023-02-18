from django.contrib import admin
from django.urls import path
from userAccounts import views

urlpatterns = [

    path('signup',views.Sign_up.as_view(),name='signup'),
    path('login',views.Login.as_view(),name='login'),
    path('logout',views.Logout.as_view(),name='logout'),
    
    
]