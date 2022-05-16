# README PARA EJECUTAR PRUEBAS

- Activar ghost en una carpeta nueva
- Ejecutar ghost localmente
- Crear cuenta de administrador.

- Descargar el código del programa de este repositorio.
- Parado en la carpeta del proyecto ejecutar el comando npm install. Con versión de node 12.22.1
- Utilizar el comando npm install kraken-node para instalar Kraken localmente en la carpeta del proyecto

Definir las siguientes variables en properties.json

- "URL": "http://localhost:2369/ghost/"
- "USERNAME": "username@correo.com"
- "PASSWORD": "passwordcreado"
- "NAME": "Nombre Creado"
- "NAMENEW": "Nombre creado ESC-10"
- "URL-LECTOR": "http://localhost:2368/"
  
- Utilizar el comando npx kraken-node run para ejecutar las pruebas.

Nota: Las pruebas puede que no corran todas de una vez en window, si encuentra este problema por favor crear una carpeta de ignore y colocar todas las pruebas allí. Pase a la carpeta feature la prueba a ejecutar una por una para su ejecución.

## README PARA EJECUTAR RESEMBLE.JS CON KRAKEN

Instrucciones para ejecutar regresión visual

### Dependencias ejecución reporte kraken

Node v14.16.1
npm 6.14.12

1. Clonar el en repositorio
2. Ubicarse en la carpeta de ‘resemble’
3. Ejecutar:

``` [language]
npm i
```

4. Seguido de

``` [language]
node index_dev_kraken.js
```

5. Esperar la ejecución del script, al finalizar se creará un reporte en la carpeta correspondiente a la fecha y hora de ejecución ubicada en:

```[language]
‘/resemble/results/<Carpeta Creada>/report.html’
```

Ejemplo:

```[language]
'resemble/results/2022-05-15T22.13.17.227Z/report.html'
```

## README PARA EJECUTAR RESEMBLE.JS CON CYPRESS

Instrucciones para ejecutar regresión visual

### Dependencias ejecución reporte cypress

Node v14.16.1
npm 6.14.12

1. Clonar el en repositorio
2. Ubicarse en la carpeta de ‘resemble’
3. Ejecutar:

  ``` [language]
  npm i
  ```

4. Seguido de

``` [language]
node index_dev_cypress.js
```

5. Esperar la ejecución del script, al finalizar se creará un reporte en la carpeta correspondiente a la fecha y hora de ejecución ubicada en:

``` [language]
‘/resemble/results/<Carpeta Creada>/report.html’
```

Ejemplo:

``` [language]
'resemble/results/2022-05-15T22.13.17.227Z/report.html'
```

## MISW-PRUEBAS-AUTOMATIZADAS-ISSUES-JN

REPORTE DE ISSUES PRUEBAS AUTOMATIZADAS (MISO - Uniandes)

Integrantes:

-Juan Carlos Pineda:
jc.pineda@uniandes.edu.co

-Nicolay Joya G:
y.joyag@uniandes.edu.co

-Lesly Campo:
ls.campo10@uniandes.edu.co

-Luis Correa:
l.correaz@uniandez.edu.co

## Plan de pruebas

## Funcionlidades involucradas

<img width="544" alt="funcionalidades" src="https://user-images.githubusercontent.com/26149887/167306645-402675de-e270-4589-bafd-29e2377767e9.png">

### Escenarios de pruebas

### Escenario 1 - Cambiar contraseña - Funcionalidades: Login, Cambiar contraseña

- Hacer login en GHOST
- Cambiar contraseña
- Cerrar sesión
- Iniciar sesión con nueva contraseña
- Regresar a contraseña original

### Escenario 2 - Publicar post - Funcionalidades: Login, Crear un post y Publicar un post

- Hacer login en GHOST
- Crear un post
- Publicar el post creado
- Ir a la página principal de GHOST
- Verificar que esté el post creado

### Escenario 3 - Eliminar un post - Funcionalidades: Login, Crear un post, Publicar un post y Eliminar un post

- Hacer login en GHOST
- Crear un post
- Publicar el post creado
- Ir a la página principal de GHOST
- Verificar que esté el post creado
- Borrar el post creado
- Ir a la página principal de GHOST
- Verificar que el post ha sido eliminado

### Escenario 4 - Editar post - Funcionalidades: Login, Crear un post, Publicar un post y Editar un post

- Hacer login en GHOST
- Crear un post
- Publicar el post creado
- Ir a la página principal de GHOST
- Verificar que esté el post creado
- Editar el post creado
- Ir a la página principal de GHOST
- Verificar que el post ha sido editado

### Escenario 5 - Crear Tag - Funcionalidades: Login, Crear Tag

- Hacer login en GHOST
- Crear un TAG
- Verificar que el TAG esté creado

### Escenario 6 - Asociar Post Y Tag - Funcionalidades: Login, Crear un Tag, Crear un post, Asignar Tag a un post y Publicar post

- Hacer login en GHOST
- Crear un post
- Crear un Tag
- Verificar que el Tag esté creado
- Asignar el Tag creado al post creado
- Publicar el post
- Verificar que el post creado tenga el TAG

### Escenario 7 - Programar publicación de post - Funcionalidades: Login, Crear un post y Configurar fecha de publicación de un post

- Hacer login en GHOST
- Crear un post
- Configurar el post para ser publicado en el futuro
- Esperar a la hora de publicación
- Verificar que el post fue publicado

### Escenario 8 - Crear un post en borrador - Funcionalidades: Login y Crear un post

- Hacer login en GHOST
- Crear un post
- Rellenar con datos el post
- Devolverse a la vista de gestión de posts
- Verificar que el post se haya guardado y esté en estado "DRAFT"

### Escenario 9 - Editar una página - Funcionalidades: Login, Crear una página, Editar una página y Publicar una página

- Hacer login en GHOST
- Crear una página
- Publicar la página
- Editar la página
- Visitar  página
- Verificar que la página este creada y aditada

### Escenario 10 - Cambiar nombre del perfil - Funcionalidades: Login, Cambiar el fullname

- Hacer login en GHOST
- Ir al modulo de staff (Your Profile)
- Cambiar el fullname
- Cerrar la sesión
- Iniciar sesión nuevamente
- Verificar que el nombre ha sido cambiado
- Volver al nombre original

### Escenario 11 - Adicionar Bio al perfil - Funcionalidades: Login, Agregar una bio al perfil

- Hacer login en GHOST
- Ir al modulo de staff (Your Profile)
- Agregar una bio
- Cerrar la sesión
- Iniciar sesión nuevamente
- Verificar que la bio ha sido creada

### Escenario 12 - Crear un post con excerpt - Funcionalidades: Login, Crear un post, Agregar excerpt y Publicar Post

- Hacer login en GHOST
- Crear un nuevo post
- Agregar un titulo
- Agregar un texto de prueba
- Agregar excerpt.
- Publicar el post.
- Verificar que el post ha sido publicado con el excerpt

### Escenario 13 - Modificar zona horaria - Funcionalidades: Login, Modificar el timezone

- Hacer login en GHOST
- Ir al modulo de Settings/General
- Modificar el timezone existente
- Guardar configuración
- Verificar el timezone configurado
- Volver a la zona horaria original

### Escenario 14 - Crear página - Funcionalidades: Login, Crear una página y Publicar página

- Hacer login en GHOST
- Crear una nueva Página
- Dar título y parrafo a la Página
- Publicar la Página
- Verificar que la página se visualice en el URL creado

### Escenario 15 - Editar Tag - Funcionalidades: Login, Crear Tag y Editar TAG

- Hacer login en GHOST
- Crear un TAG
- Verificar que el TAG esté creado
- Editar TAG
- Verificar edición del TAG

### Escenario 16 - Agregar tarjeta de Twitter a un post - Funcionalidades: Login, Crear un post, Agregar Twitter Card y Publicar post

- Hacer login en GHOST
- Crear un nuevo post
- Agregar un titulo
- Agregar un texto de prueba
- Agregar Twitter Card Title
- Publicar el post
- Verificar que el post ha sido publicado

### Escenario 17 - Editar label - Funcionalidades: Login, Editar Label

- Hacer login en GHOST
- Dirigirse a la funcionalidad de diseño
- Editar el tab de Author por Lorem
- Dirigirse a la vista web
- Verificar que el menu se modificó

### Escenario 18 - Esconder post - Funcionalidades: Login, Crear post, Publicar un post y "Des-publicar" un post)

- Hacer login en GHOST
- Crear un post
- Publicar el post creado
- Ir a la página principal de GHOST
- Verificar que esté el post creado
- Editar el post para que no esté publicado
- Verificar que el estado del post sea UNPUBLISHED
- Ir a la página princiapl de GHOST
- Visulizar que el post no está publicado

### Escenario 19 - Eliminar Tag - Funcionalidades: Login, Crear Tag, Editar Tag y Eliminar Tag

- Hacer login en GHOST
- Crear un TAG
- Verificar que el TAG esté creado
- Editar TAG
- Verificar edición del TAG
- Eliminar TAG
- Verificar eliminación TAG

### Escenario 20 - Agregar tarjeta de Facebook a un post - Funcionalidades: Login, Crear un post, Agregar Facebook Card y Publicar post

- Hacer login en GHOST
- Crear un nuevo post
- Agregar un titulo
- Agregar un texto de prueba
- Agregar Facebook Card Title
- Publicar el post
- Verificar que el post ha sido publicado
