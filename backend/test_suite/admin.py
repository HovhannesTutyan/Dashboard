from django.contrib import admin
from .models import TestSuit

class TestSuitAdmin(admin.ModelAdmin):
    def has_delete_permission(self, request, obj=None):
        return False
    list_display=('id', 'name', 'parent')
    list_display_link = ('id')
    list_filter = ('name', 'parent')
    list_per_page=25

admin.site.register(TestSuit, TestSuitAdmin)

