from rest_framework import serializers
from case import models

class CaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Case
        fields = '__all__'
        depth = 1