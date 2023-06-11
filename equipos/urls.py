
from . import views
from django.urls import path
from django.conf import settings
from django.contrib.staticfiles.urls import static

urlpatterns = [
    path('',views.inicio,name=''),
    path('home',views.home,name='home'),
    path('registrar', views.registrar,name='registrar'),
    path('eliminar/<id>',views.eliminar,name='eliminar'),
    path('editar/<id>',views.editar,name='editar'),
    
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)