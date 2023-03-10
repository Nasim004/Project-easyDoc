from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view
import jwt
from .serializers import Department_serializer
from hospitalAccounts.models import Hospital, Departments
from hospitalAccounts.serializers import Hospital_Serializer



class Sign_up(APIView):

    def post(self, request):

        try:
            name = request.data['name']
            username = request.data['username']
            admin_name = request.data['admin_name']
            admin_position = request.data['admin_position']
            phone = request.data['phone']
            email = request.data['email']
            muncipality = request.data['muncipality']
            district = request.data['district']
            password = request.data['password']

        except:
            return Response({'status': 'Please give all details'})

        if len(name) < 5:
            return Response({'status': 'Name should be minimum 5 letters'})

        if len(password) < 5:
            return Response({'status': 'Password should be minimum 5 letters'})

        check_hospital = Hospital.objects.all()

        for i in check_hospital:
            if i.email == email:
                return Response({'status': 'Email is already Exist'})
            elif i.username == username:
                return Response({'status': 'Username is already Exist'})
            elif i.phone == phone:
                return Response({'status': 'Phone Number is already Exist'})

        hospital = Hospital.objects.create(
            name=name,
            username=username,
            admin_name=admin_name,
            admin_position=admin_position,
            phone=phone,
            email=email,
            muncipality=muncipality,
            district=district,
            password=password,
        )

        hospital.save()

        return Response({'status': 'Success'})


class Login(APIView):
    def post(self, request):
        try:
            username = request.data['username']
            password = request.data['password']
        except:
            return Response({'status': 'Please give all details'})
        user = Hospital.objects.all()
        status = 'None'

        for i in user:
            if i.is_approved == True:
                if i.username == username:
                    if i.password == password:
                        payload = {
                            'username': username,
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
                status = 'Account is not approved'

        return Response({'status': status})


class Department_add(APIView):
    def post(self, request):
        try:
            name = request.data['name']
            count = request.data['count']
            head = request.data['head']
        except:
            return Response({'status': 'Please give all details'})

        if len(name) < 3:
            return Response({'status': 'Name should be minimum 3 letter'})
        if len(count) < 1:
            return Response({'status': 'Count should be minimum 1'})
        if len(head) < 3:
            return Response({'status': 'Name should be minimum 3 letter'})

        check_department = Departments.objects.all()

        for i in check_department:
            if i.name == name:
                return Response({'status': 'Department already Exist'})

        department = Departments.objects.create(
            name=name,
            count=count,
            head=head
        )
        department.save()
        return Response({'status': 'Success'})



@api_view(['GET'])
def Department_details(request):
    department = Departments.objects.all()
    serializer = Department_serializer(department,many=True)
    return Response(serializer.data)
       