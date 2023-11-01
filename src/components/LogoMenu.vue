<template>
    <div class="logo-menu">
      <!-- Logo con evento de clic -->
      <div class="logo" @click="toggleMenu">
        <img src="https://i.pinimg.com/originals/0d/11/d8/0d11d85b0ecca8fd2712e04aa51ac4f7.png" alt="Logo">
      </div>
  
      <!-- Menú emergente -->
      <transition name="slide-fade">
        <div class="popup-menu" v-if="showMenu">
          <div class="menu-content">
            <div class="message">SPIN  & WIN  $1.000.000 !!!</div>
      
          </div>
        </div>
      </transition>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showMenu: false, // Controla la visibilidad del menú emergente
      };
    },
    methods: {
      toggleMenu() {
        // Cambia el estado de showMenu para mostrar u ocultar el menú emergente
        this.showMenu = !this.showMenu;
        setTimeout(() => {
        this.showMenu = false;
      }, 6000);
      },
    },
  };
  </script>
  
  <style scoped>
  .logo-menu {
    display: flex;
    align-items: center;
    position: relative;
  }
  
  .logo img {
    width: 100px; /* Tamaño de la imagen del logo */
    cursor: pointer; /* Cambia el cursor al hacer clic en la imagen */
  }
  
  .popup-menu {
    position: absolute;
    top: 0;
    right: 100%; /* Despliega el menú hacia la derecha de la imagen */
    width: 307px; /* Ancho del menú */
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8); /* Fondo negro semitransparente */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transform: translateX(600%); /* Inicialmente, el menú está fuera de la vista */
    transition: transform 10s ease-in-out;
  }
  
  .menu-content {
    text-align: center;
    padding: 20px;
    background-color: hsl(87, 86%, 14%); /* Fondo blanco del contenido del menú */
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5); /* Sombreado */
  }
  
  .message {
    font-size: 16px;
    color: hsl(100, 81%, 52%); /* Color del mensaje */
  }
  
  .slide-fade-enter-active,
  .slide-fade-leave-active {
    transition: transform 0.3s ease-in-out;
  }
  
  .slide-fade-enter-to,
  .slide-fade-leave-from {
    transform: translateX(0);
  }
  </style>
  