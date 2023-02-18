from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from userAccounts.serializers import User_Serializer
from userAccounts.models import User
import jwt



class Sign_up(APIView):

    def post(self,request):


        try:
            name = request.data['name']
            email = request.data['email']
            phone = request.data['phone']
            muncipality = request.data['muncipality']
            district = request.data['district']
            password = request.data['password']
        except:
            return Response({'status':'Please Provide The Details(name,email,phone,muncipality,district,password)'})



        if len(name)<3:
            return Response({'status':'Name should be minimum of 3 letters'})
        if len(password)<5:
            return Response({'status':'Password should be minimum of 5'})


        check_user = User.objects.all()

        for i in check_user:
            if i.email == email:
                return Response({'status':'Email is already Exist'})
            elif i.phone == phone:
                return Response({'status':'Phone Number is already Exist'})


        user = User.objects.create(
            name = name,
            email = email,
            phone = phone,
            muncipality = muncipality,
            district = district,
            password = password,
        )
        user.save()

        return Response({'status':'Success'})





class Login(APIView):

    def post(self,request):

        try:
            email = request.data['email']
            password = str(request.data['password'])
        except:
            return Response({'status':'Please Provide details(email,password)'})

        user = User.objects.all()
        status = 'None'
       


        for i in user:
            if i.email == email:
                if i.password == password:
                    payload = {
                        'email':email,
                        'password':password
                    }
                    jwt_token = jwt.encode(payload,'secret',algorithm='HS256')
                    print(jwt_token)
                    response = Response({'status':'Success', 'payload': payload})
                    response.set_cookie('jwt',jwt_token)
                    return response
                else:
                    status = 'Wrong Password'
                    break
            else:
                status = 'Email is not found'
                
        return Response({'status':status})

                    
                        
class Logout(APIView):
    def get(self,request):
        response = Response({'status':'success'})
        response.delete_cookie('jwt')
        return response
