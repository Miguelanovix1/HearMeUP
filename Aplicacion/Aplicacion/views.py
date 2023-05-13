#request para realizar peticiones
#httpresponse para enviar la respuesta utilizando el protocolo http
from django.http import HttpResponse
from django.template import Template, Context, loader
from django.shortcuts import render

'''
def inicio(request): #definimos la vista de inicio
    
    #------------------Declaracion de variables#------------------
    
    NombreAPP = "HEAR ME UP"
    fecha = "2023"

    ##------------------Plantillas#------------------

    PlantillaInicio = open("./Aplicacion/Plantillas/Inicio.html")
    
    #Cargamos la plantilla
    template = Template(PlantillaInicio.read())
    
    #Cerramos la plantilla
    PlantillaInicio.close()
    
    #Creamos un contexto (el nombre entre comillas es el nombre con el que accedemos desde el html)
    contexto =  Context({"NombreAPP": NombreAPP, "Fecha": fecha})

    #Renderizamos el documento
    documento = template.render(contexto)

    return HttpResponse(documento)
'''

#Con esta plantilla vamos a poder heredar el hearder, el pie de pagina y tal para solo tenerlo en un sitio
def PlantillaPadre(request):

    #------------------Declaracion de variables#------------------
    
    NombreAPP = "Bienvenido a Hear me UP"
    fecha = "2023"

    #Enviamos la request, la plantilla html y el diccionario
    return render(request, "Inicio.html", {"NombreAPP": NombreAPP, "Fecha": fecha})


def inicio(request): #definimos la vista de inicio
    return render(request, "Inicio.html", {})


























