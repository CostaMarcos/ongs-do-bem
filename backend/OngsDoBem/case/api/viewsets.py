from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status 

from case.api import serializers
from case.models import Case
from ong.models import Ong
import cryptocode

class CaseViewSet(viewsets.ModelViewSet):
    queryset = Case.objects.all()
    serializer_class = serializers.CaseSerializer
    ordering_fields = '__all__'
    ordering = ('-id')

    def create(self, request, *args, **kwargs):
        data = request.data
        cypher = "ongsdobem"
        code = cryptocode.decrypt(data['authentication'], cypher)
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
        print()
        data = request.data
        cypher = "ongsdobem"
        code = cryptocode.decrypt(data['authentication'], cypher)
        query = Ong.objects.filter(code=code)

        if(Case.objects.filter(id=kwargs['pk'], ong_id=query.first()).count() != 0):
            return super().destroy(request, *args, **kwargs)
        
        return Response(status=status.HTTP_401_UNAUTHORIZED)
    
    # def update(self, request, *args, **kwargs):
    #     data = request.data
    #     cypher = "ongsdobem"
    #     code = cryptocode.decrypt(data['authentication'], cypher)
    #     query = Ong.objects.filter(code=code)
    #     if(query.count() != 0):
    #         return super().destroy(request, *args, **kwargs)
        
    #     return Response(status=status.HTTP_401_UNAUTHORIZED)