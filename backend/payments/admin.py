from django.contrib import admin
from .models import Payment

class PaymentAdmin(admin.ModelAdmin):
    list_display = ('id', 'order', 'amount', 'status', 'created_at')
    list_filter = ('status',)

admin.site.register(Payment, PaymentAdmin)
