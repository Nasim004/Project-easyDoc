# Generated by Django 4.1.7 on 2023-02-19 13:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hospitalAccounts', '0003_alter_hospital_is_approved'),
    ]

    operations = [
        migrations.AlterField(
            model_name='hospital',
            name='is_approved',
            field=models.BooleanField(default=False),
        ),
    ]
