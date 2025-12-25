from django.db import models

# Create your models here.

class Volunteer(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    birthday = models.DateField()
    contact = models.CharField(max_length=20)
    email = models.EmailField()
    address = models.CharField(max_length=255)
    organization = models.CharField(max_length=255, blank=True)
    strength = models.CharField(max_length=255, blank=True)
    contribution = models.TextField(blank=True)
    isMember = models.BigIntegerField(default=0)



    

    def __str__(self):
        return self.name
    

