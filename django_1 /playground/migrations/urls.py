from django.urls import path 
from . import veiws 

#URLConf
urlspattern = [
    path ('playground/hello', views.say_hello)
]