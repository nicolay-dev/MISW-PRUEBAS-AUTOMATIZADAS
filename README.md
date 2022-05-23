# README PARA EJECUCIÓN DE PRUEBAS (Windows)
  # Preparación ambiente
    1. Tener instalado una versión actual de un navegador web
      - Sugerencias: Google Chrome - Micorsoft Edge
    2. Tener instalado un IDE
      - Sugerencia: Visual Studio code
    3. Instalar node.js
      - Vaya a la siguiente url: https://nodejs.org/es/
      - Seleccione la descarga de la versión recomendada de node
      - Al completar la descarga, ejecute el instalador e implemente todos los pasos predeterminados y agregue todos los paquetes necesarios junto a la instalación.
    4. Instalar nvm
      - Vaya a la siguiente url y siga los pasos descritos allí: https://content.breatheco.de/es/how-to/nvm-install-windows
    5. Instalar Ghost CLI
      - En un programa de línea de comando, escriba el siguiente comando: npm install -g ghost-cli@latest
    6. Instalar Ghost (3.41.1)
      - Cree una carpeta nueva donde va a guardar esta versión de Ghost
      - En un programa de línea de comando, escriba el siguiente comando: nvm install 14.17.0 
      - En un programa de línea de comando, escriba el siguiente comando: nvm use 14.17.0 
      - En un programa de línea de comando, escriba el siguiente comando: npm install sqlite3 
      - En línea de comando de su equipo, estando en la ruta de su nueva carpeta, debe escribir el siguiente comando: ghost install 3.41.1 --db=sqlite3 --force
        - Cualquier pregunta que muestre el instalador, escribir Yes o y
      - Cuando la instalación sea exitosa, ejecutar el siguiente comando: ghost start
      - Usando un navegador web, ir a la dirección url dada al final de la inicialización
      - Crear una cuenta (Guardar correo y contraseña creadas para futuros pasos)
    7. Instalar Cypress
      - En un programa de línea de comando, escriba el siguiente comando: npm install -g cypress    
  # Pruebas con las estrategias de validación de datos 
    --->NOTA: Si desea ver las instrucciones para ejecutar las pruebas de semanas anteriores, por favor dirijirse al último commit de la respectiva semana que desee ver.
    1. Descargue este reporsitorio como un .zip
    2. Descomprima todos los archivos
      - Notará una carpeta definida como PruebasAleatorias, dentro encontrará tres carpetas, correspondientes a cada una de las estrategias de pruebas solicitadas:
        A. GhostCypress Apriori = Pruebas en Cypress para la versión 3.41.1 de Ghost utilizando estrategia (i) pool de datos a-priori.
        B. GhostCypress SeudoDinamico = Pruebas en Cypress para la versión 3.41.1 de Ghost utilizando estrategia (ii) pool de datos (pseudo) aleatorio dinámico.
        C. GhostCypress Escenario Aleatorio = Pruebas en Cypress para la versión 3.41.1 de Ghost utilizando estrategia (iii) escenario aleatorio.
    3. Ubíquese en cada una de las tres carpetas mencionadas anteriormente (dentro de una línea de comando) e instale los paquetes necesarios utilizando el comando: npm install
  # Ejecución pruebas
    0. Recuerde tener el servidor de Ghost corriendo para las pruebas que desee ejecutar - aquí están los (Oráculos)[https://uniandes-my.sharepoint.com/:x:/g/personal/y_joyag_uniandes_edu_co/EdxOwiq_HCVAuQo72P9U4hQBNLp8wZ-urJWu3kVzpwGmFg?e=EgGqjz] de las pruebas
    1. Definir las siguientes variables en cypress.json (Cypress) de cada una de los respectivos grupos de pruebas
      - "baseUrl" y "ownURL": -url utilizada para Ghost-
      - "username" y "genericUsername": -correo de su cuenta ghost-
      - "password" y "genericPassword": -contraseña de su cuenta ghost-
      - "NAME": -nombre de su cuenta ghost-
      - "URL-LECTOR": -url de versión lector de ghost- (Es el localhost sin el /ghost/ al final)-
    2. Para correr pruebas en Cypress:
      - Ubicarse en la carpeta respectiva de cypress (en una línea de comando) y ejecutar el comando cypress run (forma rápida) o cypress open -> esperar a que la consola de cypress se abra y correr pruebas individualmente o grupales con el navegador en vista.

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

## Módulo de páginas

### Crear
Funcionalidad de agregar una nueva página a sitio 

### Publicar
Publicar página en un tiempo estipulado

### Editar Página
Funcionalidad de editar una página existente

## Módulo de post

### Crear un post. 
Funcionalidad de agregar un nuevo post dentro de una página

### Publicar
Publicar post en un tiempo estipulado (sea programado o set a live )

### Editar post 
Funcionalidad de editar un post existente

### Eliminar post. 
Funcionalidad de eliminar un post existente

### Agregar imagen a un post
Funcionalidad de edición del contenido de un post con multimedia

### Filtrar post 
Búsqueda de post por medio de una línea dada.

### Organizar post
Organizar el post ascendente o descendente


## Módulo Login 

### Login 
Permitir el inicio de sesión del usuario registrada con usuario y contraseña 

### Logout
Permitir cerrar sesión del usuario registrado actualmente en el sistema. 

## Módulo Settings

### Editar timezone
Permite editar la zona horaria en el que trabaja la página web de administración

## Módulo Tag

### Crear Tag
Crear un nuevo tag en la página que puede ser utilizado luego en un post  o página


## Módulo View Site 

### View Web
Permite ver el blog de la página web que está creciendo creada desde ghost. 

### Add Tab
Permite agregar un item nuevo al menú de navegación del sitio web que está siendo creado por ghost

### Delete Tab
Permite eliminar un item del menú de navegación del sitio web que está siendo creado por ghost

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

### Escenario 21 - Cambio de Nombre de usuario y slug - Funcionalidades: Login, Editar datos de perfil

- Hacer login en GHOST
- Ir al profile
- Cambiar el nombre de usuario, el slug 
- Guardar
- Ir a la página de Post
- Regresar al profile
- Verificar que si se haya hecho la edición.

### Escenario 22 - Cambio de email de usuario - Funcionalidades: Login, Editar datos de perfil

- Hacer login en GHOST
- Ir al profile
- Cambiar el email de usuario
- Guardar
- Ir a la página de Post
- Regresar al profile
- Verificar que si se haya hecho la edición.

### Escenario 23 - Crear un post con inyección de código - Funcionalidades: Login, Crear post y Adicionar código HTML al post

- Hacer login en GHOST
- Crear post
- Ir a Code Injection
- Agregar código HTML
- Publicar post

### Escenario 24 - Crear un post con meta data - Funcionalidades: Login, Crear post y Adicionar meta data al post

- Hacer login en GHOST
- Crear post
- Ir a Meta Data
- Agregar meta data
- Publicar post

### Escenario 25 - Hacer Login - Funcionalidades: Login

- Hacer login en GHOST

### Escenario 26 - Crear una página con meta data - Funcionalidades: Login, Crear página y Adicionar meta data a la página

- Hacer login en GHOST
- Crear página
- Ir a Meta Data
- Agregar meta data
- Publicar página

### Escenario 27 - Crear una página con Twitter card - Funcionalidades: Login, Crear página y Adicionar Twitter card a la página

- Hacer login en GHOST
- Crear página
- Ir a Twitter card
- Agregar Twitter card
- Publicar página

### Escenario 28 - Crear una página con Facebook card - Funcionalidades: Login, Crear página y Adicionar Facebook card a la página

- Hacer login en GHOST
- Crear página
- Ir a Facebook card
- Agregar Facebook card
- Publicar página

### Escenario 29 - Crear una página con excerpt - Funcionalidades: Login, Crear una página, Agregar excerpt y Publicar Página

- Hacer login en GHOST
- Crear una nueva página
- Agregar un titulo
- Agregar un texto de prueba
- Agregar excerpt.
- Publicar la página.
- Verificar que la página ha sido publicada con el excerpt

### Escenario 30 - Crear Página con código HTML - Funcionalidades: Login, Crear Post y Dar inyección de código al post

- Hacer login en GHOST
- Crear un Post
- Ir a Code Injection
- Agregar code injection
- Publicar post

### Escenario 31 - Crear Tag con color - Funcionalidades: Login, Crear Tag y Dar color al Tag

- Hacer login en GHOST
- Crear un TAG
- Dar color al TAG
- Verificar que el TAG esté creado

### Escenario 32 - Agregar code injection en la consola de administrador - Funcionalidades: Login, Crear header y Crear Footer

- Hacer login en GHOST
- Selecionar code_injection en la consola de administración 
- Agregar Header/Footer
