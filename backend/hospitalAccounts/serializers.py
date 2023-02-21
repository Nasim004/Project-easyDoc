from rest_framework import serializers
from hospitalAccounts.models import Hospital


class Hospital_Serializer(serializers.ModelSerializer):
    class meta:
        models = Hospital
        fields = ['name', 'username', 'admin_name', 'admin_position',
                  'phone', 'email', 'muncipality', 'district', 'password']
