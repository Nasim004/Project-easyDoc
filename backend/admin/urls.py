from django.urls import path
from admin import views

urlpatterns = [
    path('login',views.Login.as_view(),name='login'),
    
]

