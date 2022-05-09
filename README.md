#README PARA EJECUTAR PRUEBAS KRAKEN

Activar ghost en una carpeta nueva
Ejecutar ghost localmente
Crear cuenta de administrador. 

Descargar el código del programa. 
Parado en la carpeta del proyecto ejecutar el comando npm install. Con versión de node 12.22.1
Utilizar el comando npm install kraken-node para instalar Kraken localmente en la carpeta del proyecto 

Definir las siguientes variables en properties.json

  "URL": "http://localhost:2369/ghost/", 
  "USERNAME1": "username@correo.com", 
  "PASSWORD1": "passwordcreado",
  "BeforeName": "Nombre Creado",
  "AfterName": "Nombre creado ESC-10",
  
Utilizar el comando npx kraken-node run para ejecutar las pruebas. 

Nota: Las pruebas puede que no corran todas en window, si encuentra este problema por favor crear una carpeta de ignore y colocar todas las pruebas allí. Pase a la carpeta feature cada una de las pruebas para su ejecución. 

# MISW-PRUEBAS-AUTOMATIZADAS-ISSUES-JN

REPORTE DE ISSUES PRUEBAS AUTOMATIZADAS (MISO - Uniandes)

Integrantes:

-Juan Carlos Pineda:
jc.pineda@uniandes.edu.co

-Nicolay Joya G:
y.joyag@uniandes.edu.co

-Lesly Campo: 
ls.campo10@uniandes.edu.co


-Luis Correa
l.correaz@uniandez.edu.co

## Plan de pruebas:
### Funcionlidades involucradas:

<img width="544" alt="funcionalidades" src="https://user-images.githubusercontent.com/26149887/167306645-402675de-e270-4589-bafd-29e2377767e9.png">


### Escenarios de pruebas:
### Escenario 1 Funcionalidades (Login, Cambiar contraseña)
- Hacer login en GHOST
- Cambiar contraseña
- Cerrar sesión
- Iniciar sesión con nueva contraseña"
### Escenario 2 Funcionalidades (Login, Crear un post)
- Hacer login en GHOST
- Crear un post
- Publicar el post creado
- Ir a la página principal de GHOST
- Verificar que esté el post creado"
### Escenario 3 Funcionalidades (Login, Crear un post, Eliminar un post)
- Hacer login en GHOST
- Crear un post
- Publicar el post creado
- Ir a la página principal de GHOST
- Verificar que esté el post creado
- Borrar el post creado
- Ir a la página principal de GHOST
- Verificar que el post ha sido eliminado"
### Escenario 4 Funcionalidades (Login, Crear un post, Editar un post)
- Hacer login en GHOST
- Crear un post
- Publicar el post creado
- Ir a la página principal de GHOST
- Verificar que esté el post creado
- Editar el post creado
- Ir a la página principal de GHOST
- Verificar que el post ha sido editado"
### Escenario 5 Funcionalidades (Login, Crear un TAG)
- Hacer login en GHOST
- Crear un TAG
- Verificar que el TAG esté creado
### Escenario 6 Funcionalidades (Login, Crear un TAG, Asignar TAG a un post)
- Hacer login en GHOST
- Crear un TAG
- Verificar que el TAG esté creado
- Crear un post
- Asignar el TAG creado al post creado
- Publicar el post
- Verificar que el post creado tenga el TAG"
### Escenario 7 Funcionalidades (Login, Crear un post, Configurar fecha de publicación de un post)
- Hacer login en GHOST
- Crear un post
- Configurar el post para ser publicado en el futuro 
- Ir a la página de gestión de posts
- Verificar que el post creado esté en estado ""SCHEDULED"""
### Escenario 8 Funcionalidades (Login, Crear un post)
- Hacer login en GHOST
- Crear un post
- Rellenar con datos el post 
- Devolverse a la vista de gestión de posts
- Verificar que el post se haya guardado y esté en estado ""DRAFT"""
### Escenario 9 Funcionalidades (Login, Crear un post, Agregar una imagen a un post)
- Hacer login en GHOST
- Crear una página
- Publicar la página
- Editar la página
- Visitar  página
- Verificar que la pagina este creado
### Escenario 10  Funcionalidades (Login, Cambiar el fullname)
- Hacer login en GHOST
- Ir al modulo de staff (Your Profile)
- Cambiar el fullname
- Cerrar la sesión
- Iniciar sesión nuevamente
- Verificar que el nombre ha sido cambiado"
### Escenario 11 Funcionalidades (Login, Agregar una bio al perfil)
- Hacer login en GHOST
- Ir al modulo de staff (Your Profile)
- Agregar una bio
- Cerrar la sesión
- Iniciar sesión nuevamente
- Verificar que la bio ha sido creada"
### Escenario 12 Funcionalidades (Login, Crear un nuevo post, Editar imagen agregada)
- Hacer login en GHOST
- Crear un nuevo post
- Agregar un titulo
- Agregar un texto de prueba
- Agregar una imagen de prueba
- Publicar el post
- Abrir la edición del post
- Cambiar la imagen del post
- Verificar el cambio de la imagen"
### Escenario 13 Funcionalidades (Login, Modificar el timezone)
- - Hacer login en GHOST
- Ir al modulo de Settings/General
- Modificar el timezone existente
- Guardar configuración
- Verificar el timezone configurado"
### Escenario 14 Funcionalidades (Login, Crear una nueva página, Publicar página)
- Hacer login en GHOST
- Crear una nueva Página
- Dar título y parrafo a la Página
- Publicar la Página
- Verificar que la página se visualice en el URL creado"
### Escenario 15 Funcionalidades (Login, Delete Tab, Logout, View Web)
-Hacer login en GHOST
- Dirigirse a la funcionalidad de diseño
- Eliminar un tab (Menu)
- Cerrar sesión
- Dirigirse a la vista web sin logearse
- Verificar que el menu se eliminó correctamente"
### Escenario 16 Funcionalidades (Login, Crear un post, Programar fecha publicación)
- Hacer login en GHOST
- Crear un post
- Esperar al momento configurado
- Validar que el post se publicó de forma correcta"
### Escenario 17 Funcionalidades (Login, Add Tab, Logout, View Web)
- Hacer login en GHOST
- Dirigirse a la funcionalidad de diseño
- Editar el tab de home por Lorem
- Dirigirse a la vista web 
- Verificar que el menu se modificó
### Escenario 18 Funcionalidades (Login, Crear post, Publicra un post, "Des-publicar" un post)
- Hacer login en GHOST
- Crear un post
- Publicar el post creado
- Ir a la página principal de GHOST
- Verificar que esté el post creado
- Editar el post para que no esté publicado
- Verificar que el estado del post sea UNPUBLISHED
- Ir a la página princiapl de GHOST
- Visulizar que el post no está publicado"
### Escenario 19 Funcionalidades (Login, Crear post, Add tags, Edit Post)
-Hacer login en GHOST
- Crear un post
- Agregar dos tags
- Publicar el post creado
- Editar el Post Publicado eliminar los tags
- Revisar que la información se actualizo en la publicación y en los filtros"
### Escenario 20 Funcionalidades (Login, Crear un post, Programar fecha publicación, Organizar Post)
-Hacer login en GHOST
- Crear varios post con diferentes fechas programadas de publicación
- Organizarlos por fecha de publicación 
- Verificar que el orden este correcto"
