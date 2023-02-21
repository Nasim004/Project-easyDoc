from rest_framework import serializers
from userAccounts.models import User


class User_Serializer(serializers.ModelSerializer):
    class meta:
        models = User
        fields = ['name', 'email', 'number', 'muncipality',
                  'district', 'password', 'is_active']
