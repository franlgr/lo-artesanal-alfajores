<template>
    <div class="rules-description">
      <h2 class="title">¡Bienvenido al Juego de la Suerte!</h2>
      <p class="intro">
        ¿Quieres conocer las reglas y los emocionantes premios que te esperan? ¡Sigue leyendo y descúbrelo todo!
      </p>
      <h3 class="sub-title">Reglas del Juego</h3>
      <ul class="rules-list">
        <li>
          <strong>4 MONEDAS:</strong> Si obtienes FILA COMPLETA DE MONEDAS, ¡ganas un gran premio equivalente a 100 veces tu apuesta!
        </li>
        <li>
          <strong>3 MONEDAS:</strong> Si obtienes 3 MONEDAS juntas en una fila, ganas un premio igual a 50 veces tu apuesta.
        </li>
        <li>
          <strong>4 RUNAS:</strong> Si obtienes FILA COMPLETA DE RUNAS, ¡ganas un premio equivalente a 25 veces tu apuesta!
        </li>
        <li>
          <strong>3 RUNAS:</strong> Si obtienes 3 RUNAS juntas en una fila, ganas un premio igual a 10 veces tu apuesta.
        </li>
        <li>
          <strong>1 ESCUDO:</strong> Si obtienes 1 ESCUDO, recuperas el 25% de tu apuesta.
        </li>
        <li>
          <strong>2 ESCUDOS:</strong> Si obtienes 2 ESCUDOS juntos, recuperas el 50% de tu apuesta.
        </li>
      </ul>
      <div>
        <p>(El escudo solo te cubre si no hay ninguna coincidencia ganadora.)</p>
      </div>
    </div>
  </template>
  
  <style scoped>
  .rules-description {
    background-color: #1a1a1a; /* Fondo oscuro estilo casino */
    color: #fff; /* Texto en blanco */
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  .title {
    font-size: 24px;
    text-align: center;
    margin-bottom: 10px;
  }
  
  .intro {
    font-size: 16px;
    text-align: center;
    margin-bottom: 20px;
  }
  
  .sub-title {
    font-size: 20px;
    margin-bottom: 10px;
  }
  
  .rules-list {
    list-style-type: none;
    padding: 0;
  }
  
  .rules-list li {
    margin-bottom: 10px;
  }
  
  strong {
    color: #ffd700; /* Color dorado para el texto fuerte */
  }
  </style>
  