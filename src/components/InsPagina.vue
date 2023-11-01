<template>
    <div style=" background-color: #333;" class="card">
        <div class="container">
      <!-- Tu barra de navegación y otros elementos aquí -->
  
      <!-- Contenedor del input y botón -->
      <div class="input-container">
        <!-- <button @click="loadURL" class="load-button">Mostrar URL</button> -->
        <input v-model="url" type="text" placeholder="Ingrese la URL" class="url-input">
      
      </div>
      <div>
        <button @click="vaciarUrl()" class="red-button">Borrar</button>
      </div>
  
      <!-- iframe para mostrar la página externa -->
      <iframe v-if="iframeSrc" :src="iframeSrc" width="100%" height="600"></iframe>
  
      <!-- Más contenido de tu página aquí -->
    </div>
    </div>
   
  </template>
  
  <script>
  export default {
    data() {
      return {
        url: '', // Almacenará la URL ingresada por el usuario
      };
    },
    computed: {
      iframeSrc() {
        // Concatenamos 'https://' a la URL ingresada para asegurarnos de que sea una URL válida
        return `${this.url}`;
      },
    },
    methods: {
      loadURL() {
        // Puedes realizar validaciones adicionales aquí si lo deseas antes de cargar la URL
      },
      vaciarUrl() {
        this.url = '';
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
   
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }
  
  .input-container {
    
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .url-input {
    width: 300px;
    padding: 10px;
    margin-bottom: 10px;
  }
  
  .load-button {
    background-color: #007BFF;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .load-button:hover {
    background-color: #0056b3;
  }
  
  .red-button {
    background-color: #ff0000;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .red-button:hover {
    background-color: #cc0000;
  }
  
  iframe {
    width: 100%;
    height: 600px;
  }
  </style>
  