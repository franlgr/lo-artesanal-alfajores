<template>
<!-- component -->
<div v-if="showSucces" class="flex items-center p-4 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800" role="alert">
  <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
  </svg>
  <span class="sr-only">Info</span>
  <div>
    <span class="font-medium">Felicitaciones!</span> Tu pedido ha sido enviado con éxito! En breve nos contactaremos vía Whatsapp. Muchas gracias! 
  </div>
</div>


<div v-if="showError" id="alert-2" class="flex items-center p-4 mb-4 text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  <svg class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
  </svg>
  <span class="sr-only">Info</span>
  <div class="ms-3 text-sm font-medium">
   Oh! Estamos teniendo problemas! Pero puedes hacernos tu pedido directamente aquí<a href="https://wa.me/543548417898" class="font-semibold underline hover:no-underline"> Click para WhatsApp</a>. O intenta nuevamente! Te esperamos. Muchas gracias!
  </div>
  <button type="button" class="ms-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700" data-dismiss-target="#alert-2" aria-label="Close">
    <span @click="showError=false, showMarket=true" class="sr-only">Close</span>
    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
    </svg>
  </button>
</div>

<div v-if="showMarket" class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-4">
    <svg class="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"/>
    </svg>
    <a href="#">
        <h5 class="mb-2 text-2xl  font-semibold tracking-tight text-gray-900 dark:text-white">Querés hacernos un pedido?</h5>
    </a>
    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Haz click en el siguiente botón para crear tu pedido personalizado, es GRATIS! Muchas Gracias!</p>
    <span class="shrikhand">LoArtesanal.Arg</span>
    <div class="m-3"></div>
    <button @click="openModal=!openModal, showMarket =!showMarket" type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
        HACER PEDIDO</button>
</div>


<!-- Main modal -->
<div v-if="openModal" id="crud-modal" tabindex="-1" aria-hidden="true" class=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex relative w-100 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative p-4 w-full max-w-md max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <!-- Modal header -->
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                    Personaliza tu pedido
                </h3>
                <button @click="openModal =!openModal, showMarket=true" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <!-- Modal body -->
            <div class="p-4 md:p-5">
    <div class="grid gap-4 mb-4 grid-cols-2">
      <div class="col-span-2">
        <form class="max-w-sm mx-auto">
          <input v-model="nombre" type="text" id="disabled-input" class="mb-5 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nombre; Apodo">
          <input v-model="ubicacion" type="text" id="disabled-input-2" class="mb-5  bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ubicación; Dirección">
          <div class="flex items-center mb-5">
      <span class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-l-lg p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400">
        +
      </span>

      <input v-model="phone" @input="soloNumeros" type="tel" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-r-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 flex-1" placeholder="WhatsApp Ej: 543548417898" />
    </div>
        </form>
        <label for="name" class="block m-2 text-sm font-medium text-gray-900 dark:text-white">Elegir cantidad</label>
        <div class="col-span-2 sm:col-span-1">
          <select v-model="cantidad" @change="actualizarPrecio" id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
            <option selected="">12 Unidades</option>
            <option value="48">48 Unidades</option>
            <option value="24">24 Unidades</option>
            <option value="8">8 Unidades Unidades</option>
            <option value="4">4 Unidades</option>
          </select>
        </div>
      </div>
      <div class="col-span-2 sm:col-span-1">
        <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Precio</label>
        <input v-model="precio" type="text" readonly name="price" id="price" class="cursor-not-allowed bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"  required="">
      </div>
      <div class="col-span-2 sm:col-span-1">
        <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Elegir Variedad</label>
        <select v-model="variedad" id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
          <option selected="">Negro</option>
          <option value="TV">Blanco</option>
          <option value="PC">Mitad y Mitad</option>
          <option value="GA">Personalizo en aclaraciones</option>
        </select>
      </div>
      <div class="col-span-2">
        <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Especificar aclaraciones</label>
        <textarea v-model="aclaraciones" id="description" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Escribir aquí tus aclaraciones..."></textarea>
      </div>
    </div>
    <p v-if="errorForm" class="mt-2 mb-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">Oops!</span> Parece que faltó rellenar el Nombre, Ubicación o WhatsApp</p>
    <button @click="validarEnv()" class="m-3 text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      Enviar pedido
    </button>
</div>
        </div>
    </div>
</div> 

</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            openModal: false,
            errorForm: false,
            showSucces: false,
            showMarket: true,
            showError: false,
            nombre: '',
            ubicacion: '',
            cantidad: '12 Unidades',
            precio: 'R$ 105',
            variedad: 'Negro',
            aclaraciones: '',
            phone: ""
        }
        
    },
    methods: {
        soloNumeros(event) {
      // Filtrar los caracteres que no son dígitos
      const input = event.target.value.replace(/\D/g, '');
      // Actualizar el valor del modelo con solo dígitos
      this.phone = input;
    },
        actualizarPrecio() {
      // Lógica para calcular el precio según la cantidad seleccionada
      if (this.cantidad === '48') {
        this.precio = 'R$ 390';
      } else if (this.cantidad === '24') {
        this.precio = 'R$ 200';
      } else if (this.cantidad === '8') {
        this.precio = 'R$ 70';
      } else if (this.cantidad === '4') {
        this.precio = 'R$ 35';
      } else {
        this.precio = "R$ 105";
      }
    },
        validarEnv(){
            if(this.nombre && this.ubicacion && this.phone){
                this.enviarPedido();
                
                
            }
            else{
                this.errorForm = true;
                setTimeout(() => {
                this.errorForm = false;
                }, 5000);
            }
        },
            enviarPedido() {
            const mensaje = ` NUEVO PEDIDO RECIBIDO!!!
                Nombre: ${this.nombre}
                Ubicación: ${this.ubicacion}
                Numero: https://wa.me/${this.phone}
                Cantidad: ${this.cantidad}
                Precio: ${this.precio}
                Variedad: ${this.variedad}
                Aclaraciones: ${this.aclaraciones}
            `;
            console.log(mensaje);
             const chatId = "-4050128712"
             const botToken = "6433083297:AAErgINcR9BwdrIZZFcRZYBPqyFldor2uvY"
             const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

                    axios.post(apiUrl, {
                        chat_id: chatId,
                        text: mensaje,
                    })
                        .then(response => {
                            this.showSucces=true;
                            this.showMarket= false;
                            this.openModal=false;
                            setTimeout(() => {
                            this.showSucces= false;
                            this.showMarket= true;

                           
                            
                            }, 7000);
                        console.log('Mensaje enviado:', response.data);
                        })
                        .catch(error => {
                            this.showError=true
                        console.error('Error al enviar el mensaje:', error);
                        });
    
            }
   }
}
</script>

<style>
.shrikhand {
    font-family: 'Shrikhand';
}
</style>