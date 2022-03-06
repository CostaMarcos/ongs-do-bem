from rest_framework import serializers
from case import models

class CaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Case
        fields = ['id', 'title', 'description', 'value', 'ong_id']
        depth = 1