from django.db import models


# Create your models here.
class TestData(models.Model):
    username = models.CharField(max_length=100)
    # email = models.EmailField()
    # message = models.CharField(max_length=300)
    # created_at = models.DateTimeField(auto_now_add=True)
