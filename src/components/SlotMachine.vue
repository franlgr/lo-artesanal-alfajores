<template>
  <div class="casino-fruit-machine">
    <svg @click="sonido=!sonido, soundOn =false, soundOff=true" v-if="soundOn" style="width: 10%; background: #72721e76;  margin-bottom: 20px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--! Font Awesome Free 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M533.6 32.5C598.5 85.3 640 165.8 640 256s-41.5 170.8-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z"/></svg>
      <svg @click="sonido=true, soundOff=false, soundOn=true" v-if="soundOff" style="width: 10%; background: #72721e76;margin-bottom: 20px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM425 167l55 55 55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55 55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55-55 55c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55-55-55-55c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"/></svg>
    
    <h1 class="app-title">Spin & Win Money</h1>
    <div class="casino-recargar-fichas">
      <div>
        <!-- <button @click="recargarFichas(2500)" class="casino-button casino-button-blue">
          Comprar $2.500
        </button>
        <button @click="recargarFichas(5000)" class="casino-button casino-button-blue">
          Comprar $5.000
        </button> -->
        <button @click="recargarFichas(10000)" class="casino-button casino-button-blue">
          Comprar $10.000
        </button>
    
      </div>
    </div>

    <div   class="casino-saldo">
      Saldo: ${{ saldo.toFixed(2) }}
    </div>
    <div class="casino-notification" v-if="saldoNoty">

      {{ ifSaldo }}
      <div v-if="segundosRestantes > 0" class="cuenta-regresiva">
    <!-- <p>Debes esperar 24 horas para realizar otra compra.</p> -->
    <p> {{ tiempoRestante }}</p>
  </div>
    </div>
    <div class="casino-costo-girada">
      <label for="costoGiradaSelect">Monto de apuesta:</label>
      <select  style="color:black;background: #72721e76"  id="costoGiradaSelect" v-model="costoGirada" class="casino-select">
        <option  v-for="costo in costosGirada" :key="costo" :value="costo">{{ costo }}</option>
      </select>
    </div>

    <button @click="spin()" :disabled="spinning" class="casino-button casino-button-red">
      {{ spinning ? "Spinning..." : "Spin!" }}
    </button>

 
    <div class="casino-game-container">
      <div class="casino-max-w-md casino-mx-auto">
        <div class="casino-grid casino-grid-cols-1 casino-md:casino-grid-cols-3 casino-gap-4">
          <div v-for="(fruit, index) in selectedFruits" :key="index" class="casino-bg-white casino-p-4 casino-rounded-lg casino-shadow-md">
            <div  class="casino-text-center">
              <transition  name="fruit-animation" mode="out-in">
                <div :key="showFruit[index] ? 'show' : 'hide'" class="casino-fruit-container" v-if="showFruit[index]">
                <img
                  :src="fruitImages[fruit]"
                  alt="Fruit"
                  style="width: 55px; display: inline-block; margin-right: 10px;margin-top:12px; padding: 8px;;margin-bottom:10px;"
                  class="casino-rounded-full"
                />
              </div>
              </transition>
            </div>
          </div>
        </div>

        <div style="margin-top: 30px" class="casino-result" v-if="showResult">
          <p  style="font-weight: 800;" class="casino-text-xxl" :class="resultClass">{{ resultMessage }}</p>
          <p  style="font-weight: 800;" class="casino-text-xxl" :class="resultClass">{{ premioCantidad }}</p>
          <p style="font-weight: 800;" class="casino-text-xxl" :class="resultClass">{{ premioMonto }} !!!</p>
        </div>
      </div>
    </div>
 <!-- Tabla History -->
<div class="table-container">
  <table style="border-radius: solid 1px;" class="table">
    <!-- Encabezados de la tabla -->
    <thead>
      <tr>
        <th>Giro</th>
        <th>Resultado</th>
        <th>Premio</th>
        <th>Imágenes</th>
      </tr>
    </thead>
    <tbody>
      <!-- Itera sobre el historial y muestra las entradas -->
      <tr v-for="(entry, index) in $store.state.history" :key="index">
        <td>{{ entry.giros }}</td>
        <td>{{ entry.resultado }}</td>
        <td>{{ entry.x }}</td>
        <td>
          <div class="fruit-images">
            <img
              v-for="(image, imgIndex) in entry.imagenes"
              :key="imgIndex"
              :src="image"
              alt="Fruit"
            />
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>

  </div>
</template>

<script>
import FruitImage from "./FruitImage.vue";
import soundFile from '../../public/sounds/sonidoGirar.mp3';
import { haPasadoUnDia } from '../../utils.js';
import { mapActions } from 'vuex';
import store from 'vuex'

export default {
  components: {
    FruitImage,
  },
  data() {
    return {
      fruitImages: {
        escudo:
        "https://res.cloudinary.com/djh3fajii/image/upload/v1694137715/nowobsjpyctjalhxbxbs.png",
        pera:
          "https://res.cloudinary.com/djh3fajii/image/upload/v1694137692/cuhpsnq516usunucqdrk.png",
        manzana:
          "https://res.cloudinary.com/djh3fajii/image/upload/v1694137662/hu6mlj7mtomztu7hpm7s.png",
        frutilla:
          "https://res.cloudinary.com/djh3fajii/image/upload/v1694137630/f0jjn7wageehradhyopq.png",
          banana:
          "https://res.cloudinary.com/djh3fajii/image/upload/v1694137597/a9sstwlsxdqdgm25vtky.png",
          moneda: 
          "https://res.cloudinary.com/djh3fajii/image/upload/v1694137566/qukwmqge8y71lcmdex9f.png"
      },
      spinning: false,
      selectedFruits: [], // frutas seleccionadas
      showFruit: [true, true, true, true, true],
      showResult: false,
      resultMessage: "",
      premioCantidad:"",
      premioMonto:"",
      resultClass: "",
      soundOff:false,
      soundOn: true,
      sonido: true,
      audio:new Audio(soundFile),
      ifSaldo: "",
      saldoNoty:false,
      saldo: 0, 
      history: [],
      historialGiradas: [],
    maxGiradasHistorial: 10,
    // costoGirada: 100, 
    costosGirada: [10, 20, 50, 100, 200, 500, 1000, 2500, 5000, 10000],
    costoGirada: 10,
    // segundosRestantes: 0,
   segundosRestantes:null,
   tiempoRestante: '', 
   ultimaCompraGuardada: null, 

      allFruits: [
      "escudo","escudo","escudo",
      "moneda","moneda","moneda","moneda","moneda","moneda","moneda","moneda","moneda","moneda","moneda","moneda",
      "pera","pera","pera","pera","pera","pera","pera","pera","pera","pera","pera","pera","pera","pera","pera","pera","pera","pera","pera","pera",
      "manzana","manzana","manzana","manzana","manzana","manzana","manzana","manzana","manzana","manzana","manzana","manzana","manzana","manzana","manzana","manzana","manzana","manzana","manzana","manzana",
      "banana","banana","banana","banana","banana","banana","banana","banana","banana","banana","banana","banana","banana","banana","banana","banana","banana","banana","banana","banana",
      "frutilla","frutilla","frutilla","frutilla","frutilla","frutilla","frutilla","frutilla","frutilla","frutilla","frutilla","frutilla","frutilla","frutilla","frutilla","frutilla","frutilla","frutilla","frutilla","frutilla",
    ],
    };
  },computed: {
    tiempoRestante() {
      // Calcula horas, minutos y segundos a partir de segundosRestantes
      const horas = Math.floor(this.segundosRestantes / 3600);
      const minutos = Math.floor((this.segundosRestantes % 3600) / 60);
      const segundos = this.segundosRestantes % 60;

      return `${horas}h ${minutos}m ${segundos}s`;
    },
  },
  watch: {
    segundosRestantes: {
      handler() {
        this.tiempoRestante = this.calcularTiempoRestante();
        this.guardarTiempoRestante(); // Guardar el tiempo restante en localStorage
      },
      immediate: true,
    },
},
created() {
  // Recuperar la fecha de última compra desde Vuex
  const ultimaCompraVuex = this.$store.state.ultimaCompra;

  // Recuperar la fecha de última compra desde localStorage
  const ultimaCompraGuardada = localStorage.getItem('ultimaCompra');

  // Utiliza la fecha más reciente entre Vuex y localStorage
  const ultimaCompra = ultimaCompraVuex || (ultimaCompraGuardada ? new Date(ultimaCompraGuardada) : null);

  if (ultimaCompra) {
    this.$store.commit('user/setUltimaCompra', ultimaCompra);
  }

  this.actualizarSegundosRestantes();
  this.cargarSaldoFromLocalStorage();

},

  mounted(){
    this.updateSaldo();
    this.actualizarSegundosRestantes();

    // Llama a actualizarSegundosRestantes cada segundo
    this.intervaloCuentaRegresiva = setInterval(() => {
      this.actualizarSegundosRestantes();
    }, 1000);
    
    
  },
  beforeUnmount() {
    // Limpia el intervalo cuando el componente se destruye
    clearInterval(this.intervaloCuentaRegresiva);
  },
  methods: {

    guardarTiempoRestante() {
      localStorage.setItem('tiempoRestante', this.segundosRestantes);
    },

    recuperarTiempoRestante() {
      const tiempoRestanteGuardado = localStorage.getItem('tiempoRestante');
      if (tiempoRestanteGuardado) {
        this.segundosRestantes = parseInt(tiempoRestanteGuardado);
      }
    },

    calcularTiempoRestante() {
      // this.$store.commit('actualizarTiempoRestante', tiempoRestanteCalculado);
      // Calcula horas, minutos y segundos a partir de segundosRestantes
      const horas = Math.floor(this.segundosRestantes / 3600);
      const minutos = Math.floor((this.segundosRestantes % 3600) / 60);
      const segundos = this.segundosRestantes % 60;

      return `${horas}h ${minutos}m ${segundos}s`;
    },
    actualizarSegundosRestantes() {
      const ahora = new Date();
      const ultimaCompra = this.$store.state.ultimaCompra;

      if (ultimaCompra) {
        // Calcula el tiempo restante en segundos
        const tiempoRestanteMs = 24 * 60 * 60 * 1000 - (ahora - ultimaCompra);
        this.segundosRestantes = Math.max(0, Math.floor(tiempoRestanteMs / 1000));

        // Recalcula el tiempo restante en formato legible
        this.tiempoRestante = this.calcularTiempoRestante();

        // Actualiza el tiempo restante en el store y en localStorage
        this.$store.commit('actualizarTiempoRestante', this.tiempoRestante);
        localStorage.setItem('tiempoRestante', this.tiempoRestante);
      }
    },


    cargarSaldoFromLocalStorage() {
  const saldoGuardado = localStorage.getItem('saldo');
  if (saldoGuardado) {
    this.saldo = parseFloat(saldoGuardado);

    // Actualiza el saldo en Vuex utilizando una mutación
    this.$store.commit('user/actualizarSaldo', this.saldo);
    this.$store.commit('actualizarUltimaCompra', new Date());
  }
  const ultimaCompraGuardada = localStorage.getItem('ultimaCompra');
      if (ultimaCompraGuardada) {
        this.ultimaCompraGuardada = new Date(ultimaCompraGuardada);
      }
},
    updateSaldo(){
      localStorage.setItem('saldo', this.saldo.toString());
    },
    ...mapActions(['cargarSaldo']),
    // recargarFichas() {
    //   // Llamar a la acción 'realizarCompra' en el store Vuex
    //   this.$store.dispatch('realizarCompra');
    // },
    async recargarFichas(valorRecarga) {
  const ultimaCompra = new Date(this.$store.state.ultimaCompra); // Convierte la fecha de Vuex a un objeto Date

  if (haPasadoUnDia(ultimaCompra)) {
    this.saldo += valorRecarga;

    // Actualiza la fecha de la última compra en Vuex y en localStorage
    this.$store.commit('setUltimaCompra', new Date());
    localStorage.setItem('ultimaCompra', this.$store.state.ultimaCompra.toISOString());

    // Actualiza el saldo en Vuex y en localStorage
    this.$store.commit('user/actualizarSaldo', this.saldo);
    localStorage.setItem('saldo', this.saldo.toString());

    // Realiza la compra (si es necesario)
    await this.$store.dispatch('realizarCompra');
  } else {
    // Aún no ha pasado un día, muestra el mensaje de tiempo restante
    this.saldoNoty = true;
    this.ifSaldo = "Recarga gratis en: ";
  }
},



  
//     recargarFichas(valorRecarga) {
//       this.saldo += valorRecarga;

// // Guardar el saldo en localStorage
// localStorage.setItem('saldo', this.saldo.toString());

// // Actualiza el saldo en Vuex utilizando una mutación
// this.$store.commit('user/actualizarSaldo', this.saldo);
//   },
    playSound() {
      if(this.sonido){
        this.audio.currentTime = 0;
       this.audio.play();
      }
     
    },
  //   recargarFichas(valorRecarga) {
  //   this.saldo += valorRecarga;
  // },

  async spin() {
    // this.updateSaldo()
  if (!this.spinning) {
    if (this.saldo >= this.costoGirada) {
      this.playSound();
      this.spinning = true;
      this.saldoNoty = false;
      this.ifSaldo = "";
      this.saldo -= this.costoGirada;
      this.shuffleFruits();
      // this.updateSaldo()
      // this.$store.state.saldo -= this.costoGirada;
      localStorage.setItem('saldo', this.saldo.toString());


      for (let i = 0; i < 20; i++) {
        await this.spinWheel(100);
      }

      //CHECKERS PREMIOS $$$$$$$$$$$$$$$$$$$$$$$
      if (this.checkCombinationFourMonedas()) {
        // Ganar x50 x4 monedas
        this.saldo += this.costoGirada * 100;
        this.resultMessage = "¡Fila completa de monedas!";
        this.premioCantidad = "¡Apuesta x100!";
        this.premioMonto = "Premio: $" + this.costoGirada * 100;
        this.resultClass = "text-green-500";
        this.updateSaldo()
      } else if (this.checkCombinationMonedasDown()) {
        // Ganar x20 x3 monedas abajo
        this.saldo += this.costoGirada * 50;
        this.resultMessage = "¡Sacaste Monedas!";
        this.premioCantidad = "¡Apuesta x50!";
        this.premioMonto = "Premio: $" + this.costoGirada * 50;
        this.resultClass = "text-green-500";
        this.updateSaldo()
      } else if (this.checkCombinationMonedas()) {
        // Ganar x20 x3 monedas arriba
        this.saldo += this.costoGirada * 50;
        this.resultMessage = "¡Sacaste Monedas!";
        this.premioCantidad = "¡Apuesta x50!";
        this.premioMonto = "Premio: $" + this.costoGirada * 50;
        this.resultClass = "text-green-500";
        this.updateSaldo()
      } else if (this.checkCombinationFour()) {
        // Ganar x10 x4 juntos
        this.saldo += this.costoGirada * 25;
        this.resultMessage = "¡Ganaste fila completa!";
        this.premioCantidad = "¡Apuesta x25!";
        this.premioMonto = "Premio: $" + this.costoGirada * 25;
        this.resultClass = "text-green-500";
        this.updateSaldo()
      } else if (this.checkCombinationDown()) {
        // Ganar x10 x3 abajo
        this.saldo += this.costoGirada * 10;
        this.resultMessage = "¡Ganaste!";
        this.premioCantidad = "¡Apuesta x10!";
        this.premioMonto = "Premio: $" + this.costoGirada * 10;
        this.resultClass = "text-green-500";
        this.updateSaldo()
      } else if (this.checkCombination()) {
        // Ganar x10 x3 arriba
        this.saldo += this.costoGirada * 10;
        this.resultMessage = "¡Ganaste!";
        this.premioCantidad = "¡Apuesta x10!";
        this.premioMonto = "Premio: $" + this.costoGirada * 10;
        this.resultClass = "text-green-500";
        this.updateSaldo()
      } else if (this.checkEscudoDoble()) {
        this.saldo += this.costoGirada * 0.5;
        this.resultMessage = "¡ Dos Escudos !";
        this.premioCantidad = "Recuperas 50%";
        this.premioMonto = "Obtienes: $" + this.costoGirada * 0.5;
        this.resultClass = "text-green-500";
        this.updateSaldo()
      } else if (this.checkEscudo()) {
        this.saldo += this.costoGirada * 0.25;
        this.resultMessage = "¡ Un Escudo !";
        this.premioCantidad = "Recuperas 25%";
        this.premioMonto = "Obtienes: $" + this.costoGirada * 0.25;
        this.resultClass = "text-green-500";
        this.updateSaldo()
      } else {
        this.$store.state.saldo - this.costoGirada
        this.resultMessage = "Gira de nuevo!";
        this.resultClass = "text-red-500";
        this.premioMonto = "-";
        this.premioCantidad = "-";
        this.audio.pause();
        this.audio.currentTime = 0;
      }

      // Agregar información al historial
      let resultadoGirada = "";
      let premio = "";

      if (this.checkCombinationFourMonedas()) {
        resultadoGirada = "4 Monedas";
        premio = "x100 $" + this.costoGirada * 100;
      } else if (this.checkCombinationMonedasDown() || this.checkCombinationMonedas()) {
        resultadoGirada = "3 Monedas";
        premio = "x50 $" + this.costoGirada * 50;
      } else if (this.checkCombinationFour()) {
        resultadoGirada = "4 Runas";
        premio = "x25 $" + this.costoGirada * 25;
      } else if (this.checkCombinationDown() || this.checkCombination()) {
        resultadoGirada = "3 Runas";
        premio = "x10 $" + this.costoGirada * 10;
      } else if (this.checkEscudoDoble()) {
        resultadoGirada = "2 Escudos";
        premio = "Recuperas 50% $" + this.costoGirada * 0.5;
      } else if (this.checkEscudo()) {
        resultadoGirada = "Escudo";
        premio = "Recuperas 25% $" + this.costoGirada * 0.25;
      } else {
        resultadoGirada = "Perdiste";
        premio = "-";
        this.audio.pause();
        this.audio.currentTime = 0;
      }

      const imagenesGirada = this.selectedFruits.map((fruit) => this.fruitImages[fruit]);

      const newEntry = {
        giros: this.$store.state.history.length + 1,
        resultado: resultadoGirada,
        x: premio,
        imagenes: imagenesGirada,
      };

// Agregar la nueva entrada al historial
this.$store.commit('ADD_TO_HISTORY', newEntry);

// Guardar el historial en localStorage
localStorage.setItem('historial', JSON.stringify(this.$store.state.history));
 

      if (this.historialGiradas.length > this.maxGiradasHistorial) {
        this.historialGiradas.pop();
      }

      this.showResult = true;
      this.spinning = false;
    } else {
      this.saldoNoty = true;
      this.ifSaldo = "Saldo insuficiente, recarga más fichas!";
    }
  }
},



spinWheel(duration) {
  return new Promise((resolve) => {
    // Animación cambio imágenes
    const interval = setInterval(() => {
      // Selecciona 3 aleatorios 
      const selectedIndexes = [];
      while (selectedIndexes.length < 4) {
        const randomIndex = Math.floor(Math.random() * this.allFruits.length);
        if (!selectedIndexes.includes(randomIndex)) {
          selectedIndexes.push(randomIndex);
        }
      }
      // Mover frutas
      this.selectedFruits = selectedIndexes.map((index) => this.allFruits[index]);
    }, 100); 
    setTimeout(() => {
      clearInterval(interval);
      // Mostrar frutas
      this.showFruit = [true, true, true, true, true];
      resolve();
    }, duration);
  });
},



shuffleFruits() {
  // Mezclar y seleccionar
  const shuffledFruits = this.allFruits.slice().sort(() => Math.random() - 0.5);
  this.selectedFruits = shuffledFruits.slice(0, 3);
},

    checkCombination() {
      // Verificar coincidencias
      return this.selectedFruits[0] === this.selectedFruits[1] && 
      this.selectedFruits[1] === this.selectedFruits[2];
    },
    checkCombinationDown(){
      return  this.selectedFruits[1] === this.selectedFruits[2] && 
      this.selectedFruits[2] === this.selectedFruits[3];
    },
    checkCombinationFour() {
      return this.selectedFruits[0] === this.selectedFruits[1] && 
      this.selectedFruits[1] === this.selectedFruits[2] && 
      this.selectedFruits[2] === this.selectedFruits[3];
  },
  checkCombinationMonedas() {
  return (
    this.selectedFruits[0] === "moneda" &&
    this.selectedFruits[1] === "moneda" &&
    this.selectedFruits[2] === "moneda"
  );
},
checkCombinationMonedasDown() {
  return (
    this.selectedFruits[1] === "moneda" &&
    this.selectedFruits[2] === "moneda" &&
    this.selectedFruits[3] === "moneda"
  );
},
checkCombinationFourMonedas() {
  return (
    this.selectedFruits[0] === "moneda" &&
    this.selectedFruits[1] === "moneda" &&
    this.selectedFruits[2] === "moneda" &&
    this.selectedFruits[3] === "moneda"
  );
},
checkEscudo() {
    return (
    this.selectedFruits[0] === "escudo" ||
    this.selectedFruits[1] === "escudo" ||
    this.selectedFruits[2] === "escudo" ||
    this.selectedFruits[3] === "escudo"
  );
  
},
checkEscudoDoble() {
      return (
  this.selectedFruits[0] === "escudo" && this.selectedFruits[0] ===  this.selectedFruits[1] ||
  this.selectedFruits[1] === "escudo" && this.selectedFruits[1] ===  this.selectedFruits[2] ||
  this.selectedFruits[2] === "escudo" && this.selectedFruits[2] ===  this.selectedFruits[3]
  );
     
},

}
}
</script>

<style scoped>
.table-container {
  max-width: 600px;
  margin: 0 auto;
 
  max-height: 200px; /* Altura máxima de 500px */
  overflow-y: auto; /* Agrega una barra de desplazamiento vertical cuando el contenido excede la altura máxima */

}

.table {
  width: 100%;
  border-collapse: collapse;
  background-color: #1a1a1a; /* Color de fondo oscuro */
}

.table th, .table td {
  padding: 10px;
  text-align: center;
  color: #fff; /* Color de texto blanco */
  border-bottom: 1px solid #333; /* Línea divisoria entre filas */
}

.table th {
  background-color: #333; /* Color de fondo para encabezados */
}

.fruit-images {
  display: flex;
  justify-content: center;
  gap: 5px; /* Espacio entre imágenes de frutas */
}

.fruit-images img {
  width: 20px; /* Tamaño de las imágenes de frutas */
  height: 20px;
  border: 1px solid #666; /* Borde alrededor de las imágenes */
}
.casino-fruit-row {
  display: flex;
  justify-content: center;
  margin-top: 20px; 
}

.casino-fruit-container {
  margin: 0 10px; 
}
.btn-spin {

  margin-top: 20px; 
}
.casino-fruit-machine {
  background-color: hsla(0, 0%, 0%, 0.541);
  color: #ffff1e75; 
  padding: 20px;
  border-radius: 10px;
  box-shadow: 9px 4px 8px hsla(0, 73.3%, 52.9%, 0.28);
  text-align: center; 
  max-width: 400px; 
  margin: 0 auto; /* Centrar horizontalmente en PC */
}

/* Estilos para los botones */
.casino-button {
  
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 100%; /* Ocupa el ancho completo en cualquier tamaño de pantalla */
  margin: 5px 0; /* Agregar un margen vertical entre botones */
}

.casino-button-blue {
  background-color:  #72721e76; /* Color azul para los botones de recarga */
  color: #000;
}

.casino-button-blue:hover {
  background-color: hsla(60, 33%, 53%, 0.463); /* Color azul más oscuro al pasar el mouse */
}

.casino-button-green {
  background-color: #72721e76; /* Color verde para los botones de recarga */
  color: #000;
}

.casino-button-green:hover {
  background-color: hsla(60, 33%, 53%, 0.463); /* Color verde más oscuro al pasar el mouse */
}

.casino-button-yellow {
  background-color:  #72721e76; /* Color amarillo para los botones de recarga */
  color: #000;
}

.casino-button-yellow:hover {
  background-color: hsla(60, 33%, 53%, 0.463); /* Color amarillo más oscuro al pasar el mouse */
}

.casino-button-red {
  background-color:  #72721e76; /* Color rojo para el botón de girar */
  color: #000;
}

.casino-button-red:hover {
  background-color:hsla(60, 33%, 53%, 0.463); /* Color rojo más oscuro al pasar el mouse */
}

/* Resto de los estilos permanecen igual */


.casino-saldo {
  font-size: 18px;
  margin-bottom: 10px;
}

.casino-costo-girada label {
  font-size: 16px;
}

.casino-select {
  background-color: #fff; /* Fondo blanco para el select de monto de apuesta */
  border: none;
  border-radius: 5px;
  padding: 5px;
  margin-top: 10px;
}

.casino-notification {
  color: red;
  margin-top: 10px;
  font-weight: bold;
}
/************** */
.recargar-fichas {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.recargar-fichas button {
  background-color: #007bff;
  color: #fff;
  /* padding: 10px 20px; */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  transition: background-color 0.3s ease;
  position: center;
  margin-left: 0
}

.recargar-fichas button:hover {
  background-color: #0056b3;
}

/* .recargar-fichas button:last-child {
  margin-right: 1px;
} */

.fruit-animation-enter-active,
.fruit-animation-leave-active {
  transition: transform 0.1s ease-in-out;
}

.fruit-animation-enter,
.fruit-animation-leave-to {
  transform: translateY(-50%);
  opacity: 0;
}

.fruit-container {
  transition: transform 0.1s ease-in-out;
}

/* Estilos para la máquina de frutas */
.fruit-machine {
  text-align: center;
  padding: 20px;
}

/* .btn-spin {
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
} */

.result {
  margin-top: 20px;
}

.text-green-500 {
  color: #00aa00;
}

.text-red-500 {
  color: #ff0000;
  
}

.casino-recargar-fichas {
    display: flex;
    flex-direction: column;
    align-items: center; /* Centrar horizontalmente en mobile */
  }
@media (max-width: 400px) {
  .casino-recargar-fichas {
    display: flex;
    flex-direction: column;
    align-items: center; /* Centrar horizontalmente en mobile */
  }

  .casino-button {
    width: 100%; /* Ocupa el ancho completo en mobile */
    margin: 5px 0; /* Agregar un margen vertical entre botones en mobile */
  }

  .casino-select {
    width: 100%; /* Ocupa el ancho completo en mobile */
    margin-top: 10px;
  }

  /* Resto de los estilos permanecen igual para mobile */
}
</style>
