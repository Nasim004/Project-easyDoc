from django.db import models

# Create your models here.


class Hospital(models.Model):

    name = models.CharField(max_length=150)
    username = models.CharField(max_length=15)
    password = models.CharField(max_length=30)
    admin_name = models.CharField(max_length=30)
    admin_position = models.CharField(max_length=30)
    phone = models.CharField(max_length=13)
    email = models.CharField(max_length=50)
    muncipality = models.CharField(max_length=30)
    district = models.CharField(max_length=30)
    is_approved = models.BooleanField(default=False)



