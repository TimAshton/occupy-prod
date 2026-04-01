from django.db import models

# Create your models here.
class Player(models.Model):
    handle = models.CharField(max_length=50)
    game_id = models.PositiveIntegerField()