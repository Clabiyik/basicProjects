# Generated by Django 4.2.1 on 2023-05-27 15:05

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Urun',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('isim', models.CharField(max_length=200)),
                ('aciklama', models.TextField(max_length=400)),
                ('fiyat', models.IntegerField()),
            ],
        ),
    ]
