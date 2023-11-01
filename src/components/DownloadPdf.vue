
<template>
    <div class="flex flex-wrap justify-center">
        <button @click="descargarPDF()"
                          class="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                          type="button"
                          style="transition: all 0.15s ease 0s;background:  #440030;"
                        >
                          Download CVS.pdf
                        </button>
    </div>
    
    
    </template>
    
    <script>
    export default {
      methods: {
        descargarPDF() {
          const rutaArchivo = 'https://drive.google.com/uc?export=download&id=1Tmo3rXcx01wIwvjjOPluJVnFStMXYdh0';
    
          const enlace = document.createElement('a');
          enlace.href = rutaArchivo;
          enlace.download = 'CVS.Francisco-Grillo.pdf'; // Puedes establecer el nombre del archivo aquí
    
          document.body.appendChild(enlace);
          enlace.click();
          document.body.removeChild(enlace);
        }
      }
    };
    </script>
    