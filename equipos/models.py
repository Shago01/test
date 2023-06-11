from django.db import models
# Create your models here.


class Equipo(models.Model):
    id = models.AutoField(primary_key=True)
    img = models.ImageField(upload_to="img/",verbose_name="imagen")
    nombre = models.CharField(max_length=50)
    marca = models.CharField(max_length=20)
    estado = models.CharField(max_length=30)
    cantidad = models.IntegerField()
    description = models.TextField(null=True, verbose_name="descripción")
        

    def __str__(self):
        texto = "[{0}][{1}][{2}][{3}][{4}][{5}][{6}]"
        return texto.format(self.id,self.img,self.nombre,self.marca,self.estado,self.description)

    def delete(self, using = None, keep_parents = False):
        self.img.storage.delete(self.img.name)
        return super().delete()