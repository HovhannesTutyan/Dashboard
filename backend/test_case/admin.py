from django.contrib import admin
from .models import TestCase

class TestcaseAdmin(admin.ModelAdmin):
    list_display=('id', 'user', 'test_suit', 'title','status')
    list_display_link=('id', 'testcase_id', 'test_suit')
    list_filter=('status', 'test_suit')
    list_editable=('status', 'test_suit')

admin.site.register(TestCase, TestcaseAdmin)

