# Generated by Django 4.1.3 on 2022-11-20 16:49

import datetime
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('test_suite', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='TestCase',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('testcase_id', models.CharField(max_length=255, unique=True)),
                ('title', models.CharField(max_length=255)),
                ('photo', models.ImageField(upload_to='photos/%Y/%m/')),
                ('description', models.TextField()),
                ('reproduction_steps', models.TextField(max_length=1000)),
                ('expected_results', models.TextField(max_length=1000)),
                ('actual_results', models.TextField(max_length=1000)),
                ('comments', models.CharField(blank=True, max_length=255)),
                ('environment', models.CharField(choices=[('chrome', 'Chrome'), ('safari', 'Safari'), ('firefox', 'Firefox'), ('ios', 'Ios'), ('android', 'Android')], default='chrome', max_length=255)),
                ('status', models.CharField(choices=[('not_processed', 'Not Processed'), ('fail', 'Fail'), ('passes', 'Passes'), ('fixed', 'Fixed'), ('not_bug', 'Not Bug')], default='not_processed', max_length=255)),
                ('date_created', models.DateTimeField(default=datetime.datetime.now)),
                ('test_suit', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='test_suite.testsuit')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]