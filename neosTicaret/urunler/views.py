from django.shortcuts import render
from .models import *

# Create your views here.
def index(request):
    urunler=Urun.objects.all()
    context= {
        'urunlerim':urunler
    }
    return render(request,'index.html',context)
def urun(request, urunId):
    urun=Urun.objects.filter(id=urunId)
    context={
        'urun':urun
    }
    return render(request, 'urun.html',context)