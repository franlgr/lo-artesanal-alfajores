// utils.js

// Función para verificar si ha pasado un día completo desde la última compra
export function haPasadoUnDia() {
    const ultimaCompra = localStorage.getItem('ultimaCompra');
    if (ultimaCompra) {
      const hoy = new Date();
      const ultimaCompraDate = new Date(ultimaCompra);
      return hoy - ultimaCompraDate >= 24 * 60 * 60 * 1000; // 24 horas en milisegundos
    }
    return true; // Si no hay registro de última compra, se permite la compra
  }
  
  // Otras funciones de utilidad aquí
  