from django.db import models
from datetime import datetime
from test_suite.models import TestSuit
from django.contrib.auth import get_user_model

User = get_user_model()

class TestCase(models.Model):
    class CaseStatus(models.TextChoices):
        not_processed = 'not_processed'
        fail = 'fail'
        passes = 'passes'
        fixed = 'fixed'
        not_bug = 'not_bug'
    
    class CaseEnvironment(models.TextChoices):
        chrome = 'chrome'
        safari = 'safari'
        firefox = 'firefox'
        ios = 'ios'
        android = 'android'        
    
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    testcase_id = models.CharField(max_length=255, unique=True)
    title = models.CharField(max_length=255)
    photo = models.ImageField(upload_to='photos/%Y/%m/')
    description = models.TextField()
    reproduction_steps = models.TextField(max_length=1000)
    expected_results = models.TextField(max_length=1000)
    actual_results = models.TextField(max_length=1000)
    comments = models.CharField(max_length=255, blank=True)
    environment = models.CharField(max_length=255, choices=CaseEnvironment.choices, default=CaseEnvironment.chrome)
    test_suit = models.ForeignKey(TestSuit, on_delete=models.CASCADE)
    status = models.CharField(max_length=255, choices=CaseStatus.choices, default=CaseStatus.not_processed)

    date_created = models.DateTimeField(default=datetime.now)
    
    def get_thumbnail(self):
        if self.photo:
            return "127.0.0.1:8000" + self.photo.url
        return ''

    def __str__(self):
        return self.title



