
from django.urls import path
from hospitalAccounts import views
from hospitalAccounts.views import *

urlpatterns = [

    path('signup',views.Sign_up.as_view(),name='signup'),
    path('login',views.Login.as_view(),name='login'),
    path('department_add',views.Department_add.as_view(),name='department_add'),
    path('department_details',Department_details,name='department_details'),
    

]
