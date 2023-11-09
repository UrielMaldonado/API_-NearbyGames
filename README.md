<div align="justify">

# API Nearby Games
API Rest para realizar operaciones CRUD en una base de datos relacional para el proyecto de videojuego de carreras 2D.

![Logo Utxj](https://i.postimg.cc/15q3LFXF/Banner-de-Twitch-Nubes-Gamer-Chica-Morado.png)

## Información General
- **Creado por:** Uriel Maldonado Cortez
- **Asignatura:** Desarrollo Movil Integral
- **Grado:** 10
- **Grupo:** A
- **Docente:** MTI. Marco Antonio Ramirez Hernandez

# Desarrollo Backend del Videojuego Api Rest"
El desarrollo de esta API comenzó instalando las dependencias esenciales para el proyecto mediante Node.js, utilizando las bibliotecas y herramientas como Express, Nodemon, Dotenv y Cors. Estas dependencias proporcionan un entorno robusto y eficiente para la creación de aplicaciones web en Node.js.
## Estructura del Proyecto

- **Api_Game:** Contiene el código fuente del backend, incluyendo la conexión a la base de datos, rutas, controladores y configuración de NodeJs.
- **Pruebas:** Incluye imágenes de pruebas de recorrido para las rutas de inserción, actualización, búsqueda y eliminación de datos.

## Api_Game Estructura

## Estructura del Proyecto

- **node_modules:** Contiene los paquetes y funcionalidades necesarios para el desarrollo en Node.js. Esta carpeta es generada automáticamente por npm al instalar las dependencias definidas en `package.json`.

- **src:** Esta carpeta contiene los archivos y carpetas esenciales para el funcionamiento del backend de la aplicación.

  - **controllers:** En esta carpeta se encuentran los archivos que manejan las solicitudes del usuario y devuelven las respuestas apropiadas. Cada controlador se encarga de una funcionalidad específica de la aplicación.

  - **models:** Aquí se encuentran los archivos que definen los modelos de datos utilizados en la aplicación. Estos modelos representan la estructura de los datos en la base de datos.

  - **routes:** Contiene archivos que definen las rutas de la aplicación. Cada archivo de ruta se encarga de gestionar las solicitudes HTTP para una entidad específica.

  - **config:** En esta carpeta se encuentran archivos de configuración que pueden incluir la configuración del servidor, la configuración de la base de datos, entre otros.

  - **lib:** Esta carpeta almacena librerías adicionales que pueden ser utilizadas en el proyecto.

  - **RestClient:** Contiene archivos HTTP que representan solicitudes y respuestas simuladas para probar las rutas del backend.

  - **server.js:** Este archivo es el punto de entrada principal del servidor. Se encarga de importar las dependencias necesarias, configurar middlewares, definir las rutas de solicitud y poner en marcha el servidor.

- **.env:** Archivo de configuración que almacena variables de entorno sensibles, como información de la base de datos, claves secretas, etc. Este archivo es importante para mantener la seguridad de la aplicación y no debe compartirse públicamente.

Espero que esta explicación sea útil para entender la estructura y función de cada elemento en tu proyecto. ¿Hay algo más en lo que pueda ayudarte?


## Configuración del Proyecto

Asegúrate de tener [Node.js](https://nodejs.org/) instalado.

1. Clona el repositorio.
2. Instala las dependencias usando `npm install`.

## Configuración de la Base de Datos

Asegúrate de tener una base de datos MySQL configurada. Puedes modificar la configuración en el archivo `.env`.

## Ejecutar el Servidor

Ejecuta el siguiente comando para iniciar el servidor en modo de desarrollo:

```bash
npm run dev

## Capturas de Pantalla Actividad 1

<p align="center">
  <img src="./pruebas/prueba1obtenermensajePrincipal.png" width="2000" alt="Get All Data">
  
  <img src="./pruebas/prueba2obtenerjugadores.png" width="2000" alt="Get One By ID">
  
  <img src="./pruebas/prueba3obtenerjugadorporId.png.png" width="2000" alt="Get One By Email">
  
  <img src="./pruebas/prueba4obtenerjugadorporEmail.png" width="2000" alt="Create Player">
  
  <img src="./pruebas/prueba5crearUsuario.png" width="2000" alt="Put Player">
  
  <img src="./pruebas/prueba6actualizrUsuario.png.png" width="2000" alt="Delete Player">
  
  <img src="./pruebas/prueba7eliminarUsuario.png.png" width="2000" alt="Patch Player">
 
</p>
</div>