from django.db import models

# Create your models here.
class Ong(models.Model):
    name = models.CharField(
        db_column='tx_name',
        max_length=64,
        null=False,
        blank=False
    )

    email = models.EmailField(
        db_column='email',
        null=False,
        blank=False
    )

    number = models.CharField(
        db_column='tx_number',
        max_length=32,
        null=False,
        blank=False
    )

    city = models.CharField(
        db_column='tx_city',
        max_length=64,
        null=False,
        blank=False,
    )

    region = models.CharField(
        db_column='tx_region',
        max_length=2,
        null=False,
        blank=False
    )

    code = models.CharField(
        db_column='tx_code',
        max_length=8,
        null=True,
        blank=True
    )

    class Meta:
        managed = True
        db_table = 'ong'

    def __str__(self):
        return self.name