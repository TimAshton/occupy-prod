from django.contrib import admin
from .models import Player


# Register your models here.
@admin.register(Player)
class PersonAdmin(admin.ModelAdmin):
    list_display = ['handle', 'game_id']
