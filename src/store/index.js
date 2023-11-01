import { createStore } from 'vuex';
import { haPasadoUnDia } from '../../utils'; 

export default createStore({
  state: {
    acceptedRules: localStorage.getItem('acceptedRules') || '',
    historialGiradas: [],
    history: [],
    saldo: 0,
    ultimaCompra: null,
    tiempoRestante: null
  },
  getters: {
    getHistorialGiradas(state) {
      return state.historialGiradas;
    },
  },
  mutations: {
    // actualizarUltimaCompra(state, fecha) {
    //   state.ultimaCompra = fecha;
    // },
    actualizarTiempoRestante(state, tiempo) {
      state.tiempoRestante = tiempo;
    },
    actualizarUltimaCompra(state, fecha) {
      state.ultimaCompra = fecha;
    },
    setUltimaCompra(state, fecha) {
      state.ultimaCompra = fecha; // Mutación para establecer la fecha de última compra
    },
    actualizarUltimaCompra(state, fecha) {
      state.ultimaCompra = fecha;
    },
    'user/actualizarSaldo'(state, nuevoSaldo) {
      state.saldo = nuevoSaldo;
    },
    SET_SALDO(state, saldo) {
      state.saldo = saldo;
    },
    setAcceptedRules(state, decision) {
      // Guardar la decisión en el estado y en el almacenamiento local
      state.acceptedRules = decision;
      localStorage.setItem('acceptedRules', decision);
    },
    agregarTirada(state, tirada) {
      // Agrega la nueva tirada al inicio del historial
      state.historialGiradas.unshift(tirada);
    },
    ADD_TO_HISTORY(state, entry) {
      state.history.unshift(entry);
      // Guardar en localStorage
      localStorage.setItem("history", JSON.stringify(state.history));
    },
    SET_HISTORY(state, history) {
      state.history = history;
    },
  },
  actions: {
    // async realizarCompra({ commit, state }) {
    //   if (!haPasadoUnDia()) {
    //     // No ha pasado un día completo, calcular tiempo restante
    //     const ultimaCompra = new Date(localStorage.getItem('ultimaCompra'));
    //     const ahora = new Date();
    //     const tiempoRestante = 24 * 60 * 60 * 1000 - (ahora - ultimaCompra);
  
    //     // Aquí puedes guardar tiempoRestante en el estado para mostrarlo en tu vista
    //     commit('actualizarTiempoRestante', tiempoRestante);
    //   } else {
    //     // Ha pasado un día completo, permitir una nueva compra
    //     const now = new Date();
    //     commit('actualizarUltimaCompra', now);
    //     localStorage.setItem('ultimaCompra', now.toISOString());
    //   }
    // },
    realizarCompra({ commit }) {
      
      const now = new Date();
      commit('actualizarUltimaCompra', now);
      localStorage.setItem('ultimaCompra', now.toISOString());
    },
    cargarSaldo({ commit }) {
      // Ejemplo: carga el saldo desde localStorage
      const saldoCargado = parseFloat(localStorage.getItem('saldo')) || 0; // 0 es el valor predeterminado si no se encuentra en localStorage
      commit('user/actualizarSaldo', saldoCargado);
    }
  },
  modules: {
  }
})
