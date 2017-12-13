from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
from django import forms
from multiselectfield import MultiSelectField
from django.core.urlresolvers import reverse
# Create your models here.

class Profile(models.Model):
	GENDER_CHOICES = {
		('M', 'Male'),
		('F', 'Female')
	}

	MAIN_FOCUS = {
		('DR', 'Dancer'),
		('MN','Musician'),
		('VR', 'Videographer')
	}

	user = models.OneToOneField(User, null=True, on_delete=models.CASCADE, related_name="user")
	name = models.CharField(max_length=50)
	gender = models.CharField(max_length=1, choices=GENDER_CHOICES, null=True, blank=True)
	description = models.TextField(null=True, blank=True)
	focus = MultiSelectField(max_length=30, choices=MAIN_FOCUS, max_choices=3, null=True, blank=True)
	profilePic = models.ImageField(upload_to="face/", null=True, blank=True)

	def get_absolute_url(self):
		return reverse('profile-detail-view', args=[str(self.id)])

	def __str__(self):
		return self.name

@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)

@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()