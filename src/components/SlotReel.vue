<template>
 <div class="reel">
    <!-- Llama a FruitImage y pasa los nombres de las frutas -->
    <FruitImage v-for="(fruit, index) in reel1Fruits" :key="index" :imageOptions="fruits[fruit]" />
    
  </div>
  </template>
  
  <script>
import FruitImage from "./FruitImage.vue";

export default {
  components: {
    FruitImage,
  },
  props: {
    fruits: Array, // Cambiamos la propiedad fruits a un array
  },
  data() {
    return {
      fruitImages: {
        pera:
          "https://1.bp.blogspot.com/-BsxgRuCVsP4/Wbag5ytEvnI/AAAAAAAHZII/Evjl2vcPQ-0fAd5TUOfJe9LQy36XZ1LhQCLcBGAs/s1600/Pear-PNG-Pic.png",
        manzana:
          "https://clipart-library.com/images_k/apple-transparent/apple-transparent-17.png",
        frutilla:
          "https://1.bp.blogspot.com/-ffftiY7q0nM/XVCfPnTbYHI/AAAAAAAAJaw/_8dq8LGTri4WPH9xFZv7Xmcz8QKILgAlgCLcBGAs/s1600/frutilla.png",
          banana:
          "https://pngimg.com/uploads/banana/banana_PNG852.png",
          moneda: 
          "https://purepng.com/public/uploads/large/purepng.com-gold-coinsflatcoinsroundmetalgoldclipart-1421526479602pcbjc.png"  }
    }
  },
};
</script>

  
  <style scoped>
  /* Estilos para el rodillo */
  .reel {
    display: flex;
    flex-direction: column;  /* Cambiamos la dirección a vertical */
    align-items: center;
    width: 100px;
    border: 1px solid #ccc;
    padding: 10px;
    margin: 5px;
  }
  </style>
  