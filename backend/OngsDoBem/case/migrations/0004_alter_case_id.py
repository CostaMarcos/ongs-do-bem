# Generated by Django 4.0.3 on 2022-03-06 16:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('case', '0003_auto_20220306_1226'),
    ]

    operations = [
        migrations.AlterField(
            model_name='case',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
