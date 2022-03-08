from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status 
from django_filters.rest_framework import DjangoFilterBackend

from case.api import serializers
from case.models import Case
from ong.models import Ong
import cryptocode

class CaseViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.CaseSerializer
    queryset = Case.objects.all()
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['ong_id']
    ordering_fields = '__all__'
    ordering = ('-id')

    def create(self, request, *args, **kwargs):
        data = request.data
        cypher = "ongsdobem"
        code = cryptocode.decrypt(request.headers['Authorization'], cypher)
        query = Ong.objects.filter(code=code)

        if(query.count() != 0):
            new_case = Case.objects.create(
                title=data['title'],
                description=data['description'],
                value=data['value'],
                ong_id=query.first()
            )

            new_case.save()
            serializer = serializers.CaseSerializer(new_case)
            return Response(serializer.data)
        
        return Response(status=status.HTTP_401_UNAUTHORIZED)
    
    def destroy(self, request, *args, **kwargs):
        caseId = kwargs['pk']
        token = request.headers['Authorization']
        if(token != ""):
            cypher = "ongsdobem"
            code = cryptocode.decrypt(token, cypher)
            query = Ong.objects.filter(code=code)
            case = Case.objects.filter(id=caseId, ong_id=query.first())
            if(case.count() == 1):
                case.delete()
                return Response(status=status.HTTP_204_NO_CONTENT)
                
        return Response(status=status.HTTP_401_UNAUTHORIZED)
