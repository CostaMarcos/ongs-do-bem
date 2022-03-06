from rest_framework import serializers
from ong import models

class OngSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Ong
        fields = '__all__'