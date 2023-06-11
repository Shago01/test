from django.shortcuts import render,redirect
from .models import Equipo
from .forms import EquipoForm

# Create your views here.

def inicio(request):
    return render(request,"inicio.html")

def registrar(request):
    formulario = EquipoForm(request.POST or None, request.FILES or None)
    if formulario.is_valid():
        formulario.save()
        return redirect('home')
    return render(request,"registro.html",{"formulario":formulario})

def home(request): 
    listaEquipos = Equipo.objects.all()
    return render(request,"home.html",{"equipos":listaEquipos})

def editar(request,id):
    equipo = Equipo.objects.get(id=id)
    formulario = EquipoForm(request.POST or None, request.FILES or None, instance=equipo)
    if formulario.is_valid() and request.POST: 
       formulario.save()
       return redirect('home')
    return render(request, 'editar.html',{"formulario":formulario})

def eliminar(request,id):
    equipo = Equipo.objects.get(id=id)
    equipo.delete();
    return redirect('home')
