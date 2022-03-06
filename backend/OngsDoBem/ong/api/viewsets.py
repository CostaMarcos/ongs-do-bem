from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status

from ong import models
from ong.api import serializers
import cryptocode
import random

class OngViewSet(viewsets.ModelViewSet):  
    queryset = models.Ong.objects.all()
    serializer_class = serializers.OngSerializer
    ordering_fields = '__all__'
    ordering = ('-id')

    def codegenerator(self, lenght):
        letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
        code = ''
        for i in range(0, lenght):
            code += letters[random.randint(0, 25)]
        return code

    def create(self, request, *args, **kwargs):
        code = self.codegenerator(8)
        
        while(models.Ong.objects.filter(code=code).count() != 0):
            code = self.codegenerator(8)

        data = request.data

        new_ong = models.Ong.objects.create(
            name=data['name'],
            email=data['email'],
            number=data['number'],
            city=data['city'],
            region=data['region'],
            code=code
        )

        new_ong.save()
        serializer = serializers.OngSerializer(new_ong)
        return Response(serializer.data)

    
    @action(methods=['post'], detail=False)
    def login(self, request, pk=None):
        cypher = "ongsdobem"
        data = request.data
        query = models.Ong.objects.filter(code=data['code'])

        if(query.count() == 0):
            return Response(status=status.HTTP_401_UNAUTHORIZED);
        else:
            myhash = cryptocode.encrypt(data['code'], cypher)
            return Response({'Authentication': myhash})
