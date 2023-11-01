<template>

  <!-- <div style="padding: 40px;">
    <button style="padding: 10px; background: green; width: auto;" @click="agregarAPantallaInicio">Descargar "Menú QR"</button>
  </div> -->
  <div class="container">
    <!-- Tu barra de navegación y otros elementos aquí -->
    
    <!-- iframe para mostrar la página externa -->
    <iframe src="https://my-menu-qr.netlify.app/" width="100%" height="600"></iframe>
    
    <!-- Más contenido de tu página aquí -->
  </div>
  </template>
  
  <script>
  export default {
    props: {
      url: "https://my-menu-qr.netlify.app/", // Propiedad para la URL que se mostrará en el iframe
    },
    data(){
      return{
        url: "https://my-menu-qr.netlify.app/"
      }
    },
    methods: {
    // agregarAPantallaInicio() {
    //   if (window.navigator.standalone) {
    //     // Si ya está en la pantalla de inicio, muestra un mensaje de confirmación.
    //     alert('La app ya está en tu pantalla de inicio.');
    //   } else if (window.confirm('¿Deseas agregar la app a tu pantalla de inicio?')) {
    //     // Agrega a la pantalla de inicio cuando se confirma.
    //     const nombreApp = 'Menú QR'; // Cambia esto al nombre deseado
    //     const urlApp = this.url; // Cambia esto a la URL deseada
    //     const iconoApp = 'https://res.cloudinary.com/djh3fajii/image/upload/v1694092538/uv3w3i4jesrxpoas3j7w.png'; // URL del ícono de tu app (opcional)
        
    //     // Usa la función `addToHomescreen` para agregar la app a la pantalla de inicio.
    //     addToHomescreen({ appID: nombreApp, startURL: urlApp, iconURL: iconoApp });
    //   }
    // }
  }
  };
  </script>
  
  <style scoped>
  .iframe-container {
    margin: 20px auto;
    max-width: 100%; /* Ancho máximo del componente */
    border: 1px solid #ccc; /* Borde para el componente */
    border-radius: 8px; /* Bordes redondeados */
    overflow: hidden; /* Ocultar contenido que pueda desbordar */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Sombra suave */
  }
  
  .iframe {
    width: 100%;
    height: 600px;
    border: none; /* Sin borde alrededor del iframe */
  }
  
  </style>
  