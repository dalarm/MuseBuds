# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2017-12-15 04:45
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import multiselectfield.db.fields


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0005_auto_20171213_0554'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='focus',
            field=multiselectfield.db.fields.MultiSelectField(blank=True, choices=[('MN', 'Musician'), ('DR', 'Dancer'), ('VR', 'Videographer')], max_length=30, null=True),
        ),
        migrations.AlterField(
            model_name='profile',
            name='gender',
            field=models.CharField(blank=True, choices=[('M', 'Male'), ('F', 'Female')], max_length=1, null=True),
        ),
        migrations.AlterField(
            model_name='profile',
            name='user',
            field=models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
