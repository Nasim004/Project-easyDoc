from django.shortcuts import render
from rest_framework.response import Response
from userAccounts.models import User
from rest_framework.views import APIView
import jwt


class Login(APIView):

    def post(self, request):
        try:
            email = request.data['email']
            password = request.data['password']

        except:
            return Response({'status': 'Please Give All Details'})

        admin = User.objects.all()
        status = 'None'

        for i in admin:
            if i.is_superuser == True:
                if i.email == email:
                    if i.password == password:
                        payload = {
                            'email': email,
                            'password': password
                        }
                        jwt_token = jwt.encode(
                            payload, 'secret', algorithm='HS256')
                        response = Response(
                            {'status': 'Success', 'payload': payload})
                        response.set_cookie('jwt', jwt_token)
                        return response

                    else:
                        status = 'Wrong Password'
                        break
                else:
                    status = 'Wrong Username'
            else:
                status = 'Not A Admin Account'
        return Response({'status': status})
