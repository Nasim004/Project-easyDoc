
from django.urls import path
from hospitalAccounts import views

urlpatterns = [

    path('signup',views.Sign_up.as_view(),name='signup'),
    path('login',views.Login.as_view(),name='login'),
    

]
