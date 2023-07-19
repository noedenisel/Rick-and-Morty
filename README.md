# Rick and Morty App

Esta aplicación es parte del proyecto de integración del módulo 2: React del bootcamp Soy Henry. La app de Rick and Morty fue elegida como una de las mejores del grupo, lo que me permitió elegir el tema de mi proyecto individual.

##Deploy:
https://rick-and-morty-noedenisel.vercel.app/

## Descripción de la App

La aplicación de Rick and Morty es una SPA (Single Page Application) que nos permite explorar información sobre los personajes de la serie. La app consta de las siguientes funcionalidades:

- Visualización de personajes en forma de tarjetas.
- Búsqueda de personajes por nombre.
- Agregar personajes a la lista de favoritos.
- Eliminar personajes de la lista de favoritos.
- Vista de personajes favoritos.

## Estructura del Proyecto

El proyecto se encuentra estructurado de la siguiente manera:

```
- carpeta img
- carpeta public
- carpeta src
  - carpeta components
    - Card.js
    - Cards.js
    - SearchBar.js
    - Nav.js
    - About.js
    - Detail.js
    - Form.js
    - Favorites.js
  - App.css
  - App.js
  - data.js
  - index.css
  - index.js
- package.json
- README.md
```

## Componentes

A continuación se describe cada uno de los componentes creados para la aplicación:

### Card

El componente `Card` muestra la información de un personaje en forma de tarjeta. Recibe las siguientes props:

- `name`: Nombre del personaje.
- `species`: Especie del personaje.
- `gender`: Género del personaje.
- `image`: URL de la imagen del personaje.
- `onClose`: Función que se ejecuta al hacer clic en el botón de cerrar.

### Cards

El componente `Cards` renderiza un conjunto de tarjetas de personajes. Recibe el arreglo de personajes como prop y utiliza el componente `Card` para renderizar cada uno de ellos.

### SearchBar

El componente `SearchBar` muestra una barra de búsqueda que permite buscar personajes por nombre. Recibe la función `onSearch` como prop, la cual se ejecuta al hacer clic en el botón de búsqueda.

### Nav

El componente `Nav` es una barra de navegación superior que contiene el componente `SearchBar` y enlaces a las diferentes secciones de la aplicación. Se muestra en todas las rutas excepto en la página de inicio de sesión.

### About

El componente `About` muestra información sobre el creador de la aplicación y una descripción de la misma. Es accesible a través del enlace de navegación correspondiente.

### Detail

El componente `Detail` muestra información detallada sobre un personaje específico. Recibe el ID del personaje como parámetro de la ruta.

### Form

El componente `Form` muestra un formulario de inicio de sesión donde se solicita un nombre de usuario y una contraseña. Realiza validaciones en tiempo real para verificar que se ingresen datos válidos.

### Favorites

El componente `Favorites` muestra la lista de personajes favoritos del usuario. Permite agregar y eliminar personajes de la lista de favoritos.

## Instrucciones de Ejecución

1. Clona el repositorio en tu máquina local.
2. Abre una terminal en la carpeta raíz del proyecto.
3. Ejecuta el comando `npm install` para instalar las dependencias.
4. Ejecuta el comando `npm start` para iniciar la aplicación.
5. Abre tu navegador web y ve a `http://localhost:3000` para acceder a la aplicación.

¡Disfruta explorando los personajes de Rick and Morty en esta divertida aplicación!
