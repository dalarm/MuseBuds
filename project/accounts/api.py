from tastypie.resources import ModelResource
from accounts.models import Profile
from tastypie.authorization import Authorization
from tastypie.authentication import Authentication

class ProfileResource(ModelResource):

	class Meta:
		queryset = Profile.objects.all()
		resource_name = 'profile'
		allowed_methods = ['post', 'get', 'patch', 'delete']
		authentication = Authentication()
		authorization = Authorization()
		always_return_data = True

