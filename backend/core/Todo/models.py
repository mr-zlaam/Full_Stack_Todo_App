from django.db import models


# Create your models here.
class todoModel(models.Model):
    body = models.CharField(max_length=550)
    iscompleted = models.BooleanField(default=False)
    updated = models.DateTimeField(auto_now=True)
    createdAt = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.body
