# Instruccones para la ejecución de pruebas E2E


#### Dependencias y configuración del ambiente:
```
** 1. Navegador web **
    - Sugerencia: [Google Chrome](https://www.google.com/intl/es/chrome/?brand=YTUH&gclid=CjwKCAjws8yUBhA1EiwAi_tpET38LbCE56VimdmM8O5p0ATL-09fTOYS8kimDgtbmznuBGRwvF420xoCmrYQAvD_BwE&gclsrc=aw.**ds)
** 2. IDE **
    - Sugerencia: [Visual Studio code](https://code.visualstudio.com/download)
** 3. Node.js **
    - Descargar la versión recomendad de node en: https://nodejs.org/es/
    - Ejecutar el instalador y seguir las instrucciones de wizard, al finalizar, agregar todos los paquetes necesarios junto a la instalación.
** 4. nvm **
    - Vaya a la siguiente url y siga los pasos descritos allí: https://content.breatheco.de/es/how-to/nvm-install-windows
** 5. Instalar Ghost CLI **
    - En un programa de línea de comando, escriba el siguiente comando: npm install -g ghost-cli@latest
** 6. Instalar Ghost (3.41.1) **
    - Cree una carpeta nueva donde va a guardar esta versión de Ghost
    - En un programa de línea de comando, escriba el siguiente comando: nvm install 14.17.0 
    - En un programa de línea de comando, escriba el siguiente comando: nvm use 14.17.0 
    - En un programa de línea de comando, escriba el siguiente comando: npm install sqlite3 
    - En línea de comando de su equipo, estando en la ruta de su nueva carpeta, debe escribir el siguiente comando: ghost install 3.41.1 --db=sqlite3 --force
    - Cualquier pregunta que muestre el instalador, escribir Yes o y
    - Cuando la instalación sea exitosa, ejecutar el siguiente comando: ghost start
    - Usando un navegador web, ir a la dirección url dada al final de la inicialización
    - Crear una cuenta (Guardar correo y contraseña creadas para futuros pasos)
** 7. Instalar Cypress **
    - En un programa de línea de comando, escriba el siguiente comando: npm install -g cypress
```

#### Ejecución pruebas

Recuerde tener el servidor de Ghost corriendo para las pruebas que desee ejecutar

1. Definir las siguientes variables en el archivo [cypress.json](./cypress.json)
    - "**baseUrl**" y "**ownURL**": url local utilizada para Ghost
    - "**username**" y "**genericUsername**": correo de su cuenta ghost
    - "**password**" y "**genericPassword**": contraseña de su cuenta ghost
    - "**NAME**": nombre de su cuenta ghost
    - "**URL-LECTOR**": url de versión lector de ghost (Es el localhost sin el /ghost/ al final)


2. Para ejecutar las pruebas en Cypress existen dos comandos, uno para la ejecución a traves de la terminal y el otro para hacerlo a traves de una interfaz gráfica, en ambos escenarios es necesario ubicarse en la carpeta respectiva de cypress (en línea de comando) y ejecutar el comando respectivo:

    ```cypress run``` -> (ejecución global de las pruebas en linea de comando)

    ó

    ```cypress open``` -> ejecución individual o global a través de GUI (Permite ver la ejecución en tiempo real en el navegador).
