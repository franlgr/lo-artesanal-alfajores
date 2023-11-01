<template>
    <div class="qr-img" style="margin-top: 20%">
      <!-- <div v-if="!token && !registroserv" class="registration-message">
        <p>Debes registrarte primero para usar el servicio gratuito de generación de QR.</p>
        <router-link to="/login" class="btn btn-success m-2">Regístrate</router-link>
      </div> -->
      <input style="width:100%" v-model="inputUrl" placeholder="Ingrese la URL">
      <div class="m-2"></div>
      <button style="" @click="generateQR" :disabled="inputUrl === ''" class="button-qr">Generar QR Code</button>
      <div v-if="showErrorMessage" class="error-message">¡Ingresa una URL válida!</div>
      <div></div>
      <img v-if="qrImageUrl" :src="qrImageUrl" alt="QR Code" class="m-2" style="width: 30%">
      <div></div>
      <a class="button-qr" v-if="qrImageUrl" :href="qrImageUrl" download="qr-code.png">Descargar QR Code</a>
    </div>
  </template>
  
  <script>
  import { generateQRCode } from '../services/qrService'; // Ajusta la ruta según tu estructura
//   import store from '../store';
//   import VueMeta from 'vue-meta';
  
  export default {
    // mixins: [VueMeta],
    // ... (el resto del código)
    data() {
      return {
        inputUrl: '',
        qrImageUrl: null,
        showErrorMessage: false,
        registroserv: false
      };
    },
    computed: {
    //   token() {
    //     return this.$store.getters.getToken;
    //   }
    },
    methods: {
      async generateQR() {
        if (this.inputUrl === '') {
          this.showErrorMessage = true;
          setTimeout(() => {
            this.showErrorMessage = false;
          }, 2000);
          return;
        }
  
       else{
            const qrImageUrl = await generateQRCode(this.inputUrl);
            this.qrImageUrl = qrImageUrl;
        }
  
        // const userId = store.getters.getUser._id;
      
      }
    }
  };
  </script>
<style>
  .qr-img {
    display: flex;
    flex-direction: column;
    align-items: center; /* Centrar horizontalmente en mobile */
  }
.button-qr {
  background-color:  #72721e76; /* Color azul para los botones de recarga */
  color: #000;
  padding: 10px;
  margin:8px;
  border-radius: 10px
}

.button-qr:hover {
  background-color: hsla(60, 33%, 53%, 0.463); /* Color azul más oscuro al pasar el mouse */
}
.registration-message {
  background-color: #c1e6c2;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
}
</style>  