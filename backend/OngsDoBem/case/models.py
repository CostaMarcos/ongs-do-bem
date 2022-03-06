from django.db import models
from ong.models import Ong

class Case(models.Model):
    title = models.CharField(
        db_column='tx_title',
        max_length=64,
        blank=False,
        null=False
    )

    description = models.TextField(
        db_column='tx_description',
        max_length=256,
        blank=False,
        null=False
    )

    value = models.FloatField(
        db_column='fl_value',
        default=0.0,
        null=True,
        blank=True
    )

    ong_id = models.ForeignKey(
        Ong, 
        on_delete = models.CASCADE,
        db_column='ong_id',
        null=True
    )

    class Meta:
        managed = True
        db_table = 'case'

    def __str__(self):
        return self.title