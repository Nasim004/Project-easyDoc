# Generated by Django 4.1.7 on 2023-02-16 12:06

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('userAccounts', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='number',
            new_name='phone',
        ),
    ]