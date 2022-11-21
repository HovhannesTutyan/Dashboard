from django.db import models
from django.contrib.auth import get_user_model
from datetime import datetime

User = get_user_model();

class TestSuit(models.Model):
    class Meta:
        verbose_name=('Test Suit')
        verbose_name_plural=('Test Suits')
    
    user = models.ForeignKey(User, on_delete=models.CASCADE) 
    parent = models.ForeignKey('self', related_name="children", on_delete=models.CASCADE, null=True, blank=True)
    name = models.CharField(max_length=255, unique=True)
    photo = models.ImageField(upload_to='photos/%Y/%m/')
    count = models.IntegerField(default=0)
    date_issued = models.DateTimeField(default=datetime.now)

    def get_thumbnail(self):
        if self.photo:
            return "127.0.0.1:8000" + self.photo.url
        return ''

    def __str__(self):
        return self.name