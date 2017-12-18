# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2017-12-13 05:20
from __future__ import unicode_literals

from django.db import migrations, models
import multiselectfield.db.fields


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='focus',
            field=multiselectfield.db.fields.MultiSelectField(blank=True, choices=[('VR', 'Videographer'), ('MN', 'Musician'), ('DR', 'Dancer')], max_length=30, null=True),
        ),
        migrations.AddField(
            model_name='profile',
            name='gender',
            field=models.CharField(blank=True, choices=[('M', 'Male'), ('F', 'Female')], max_length=1, null=True),
        ),
        migrations.AddField(
            model_name='profile',
            name='profilePic',
            field=models.ImageField(blank=True, null=True, upload_to='face/'),
        ),
    ]