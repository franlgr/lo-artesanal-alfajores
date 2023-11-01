<template>
    <div class="fruit-image">
      <!-- Utiliza la URL de la imagen para mostrarla -->
      <img :src="imageOptions" alt="Fruit" />
    </div>
  </template>
  
  <script>
  export default {
    props: {
      imageOptions: Object, // La prop imageOptions debe ser un string con la URL de la imagen
    },
  };
  </script>
  
  <style scoped>
  /* Estilos para la imagen de la fruta */
  .fruit-image {
    width: 80px; /* Ancho deseado para la imagen */
    height: 80px; /* Altura deseada para la imagen */
  }
  </style>
  