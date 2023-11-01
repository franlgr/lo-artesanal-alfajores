<template>
    <div>
      <navbar-component></navbar-component>
      <main class="profile-page">
        <section class="relative block" style="height: 500px;">
          <div
            class="absolute top-0 w-full h-full bg-center bg-cover"
            style='background-image: url("https://sharklabs.com.br/assets/img/2020-10/file-upload-vuejs-nodejs.png");'
          >
            <span
              id="blackOverlay"
              class="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style="height: 70px;"
          >
            <svg
              class="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                class="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section class="relative py-16 bg-blue-400">
          <div class="container mx-auto px-4">
            <div
              class="relative flex flex-col min-w-0 break-words bg-blue-200 w-full mb-6 shadow-xl rounded-lg -mt-64" style="opacity: 0.9;"
            >
              <div class="px-6">
                <div class="flex flex-wrap justify-center">
                  <div
                    class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center"
                  >
                    <div class="relative">
                      <img
                        alt="..."
                        src="../assets//img/perfilcv.jpeg"
                        class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                        style="max-width: 180px;"
                      />
                    </div>
                  </div>
                  <div
                    class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center"
                  >
                    <div class="py-6 px-3 mt-32 sm:mt-0">
                      <!-- <button
                        class="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                        type="button"
                        style="transition: all 0.15s ease 0s;background:  #440030;;"
                      >
                        Download CVS.pdf
                      </button> -->
                      <DownloadPdf />
                    </div>
                  </div>
                  <div class="w-full lg:w-4/12 px-4 lg:order-1">
                    <!-- <div class="flex justify-center py-4 lg:pt-4 pt-8">
                      <div class="mr-4 p-3 text-center">
                        <span
                          class="text-xl font-bold block uppercase tracking-wide text-gray-700"
                          >22</span
                        ><span class="text-sm text-gray-500">Friends</span>
                      </div>
                      <div class="mr-4 p-3 text-center">
                        <span
                          class="text-xl font-bold block uppercase tracking-wide text-gray-700"
                          >10</span
                        ><span class="text-sm text-gray-500">Photos</span>
                      </div>
                      <div class="lg:mr-4 p-3 text-center">
                        <span
                          class="text-xl font-bold block uppercase tracking-wide text-gray-700"
                          >89</span
                        ><span class="text-sm text-gray-500">Comments</span>
                      </div>
                    </div> -->
                  </div>
                </div>
                <div class="text-center mt-16">
                  <h3
                    class="text-4xl font-semibold leading-normal mb-2 text-gray-800"
                  >
                   Francisco Grillo Ruiz
                  </h3>
                  <div
                    class="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase"
                  >
                    <i
                      class="fas fa-map-marker-alt mr-2 text-lg text-gray-500"
                    ></i>
                    Córdoba, Argentina.
                  </div>
                  <div class="mb-2 text-gray-700 mt-5">
                    <i class="fas fa-envelope mr-2 text-lg text-gray-500"></i
                    ><a href="mailto:grilfran90@gmail.com">grilfran90@gmail.com</a>
                  </div>
                  <div class="mb-2 text-gray-700 mt-10">
                    <i class="fas fa-briefcase mr-2 text-lg text-gray-500"></i
                    >Full-Stack Developer
                  </div>
                  <div class="mb-2 text-gray-700">
                    <i class="fas fa-university mr-2 text-lg text-gray-500"></i
                    >Freelancer. (6 anni)
                  </div>
                  <div class="mb-2 text-gray-700">
                    <i class="fas fa-microchip mr-2 text-lg text-gray-500"></i
                    >Nuxtjs, Vuejs, Vite // Bootstrap & Tailwind. // Feathers, Axios, Nodejs, Express, MongoDB.
                  </div>
                </div>
                <div class="mt-10 py-10 border-t border-gray-300 text-center">
                  <div class="flex flex-wrap justify-center">
                    <div class="w-full lg:w-9/12 px-4">
                      <p class="mb-4 text-lg leading-relaxed text-gray-800">
                        Sono un programmatore appassionato che da oltre 5 anni si dedica con entusiasmo al mondo dello sviluppo web. Ho un'esperienza consolidata in tecnologie come Vue.js, Feathers e Node.js, oltre a competenze approfondite in JavaScript e altre tecnologie di base.
  
  Negli anni, ho avuto il privilegio di collaborare con amici e partner, offrendo il mio supporto e competenze per la realizzazione di diversi progetti. Questa esperienza mi ha permesso di approfondire le mie competenze e di imparare continuamente, affrontando sfide stimolanti e sviluppando soluzioni innovative.
  
  La mia passione per la programmazione mi spinge costantemente a crescere e migliorare. Sono entusiasta all'idea di intraprendere nuove sfide e sono alla ricerca di opportunità che mi permettano di continuare a crescere professionalmente, mettendo a frutto la mia esperienza e creatività per contribuire in modo significativo a progetti innovativi.
  
                      </p>
                      <span class="font-bold">Collaboro ai seguenti progetti:</span>
                      <div class="m-3"></div>
                      <a href="https://armortemplate.site" target="_blank" rel="noopener" class="font-normal text-pink-500"
                        >ARMORTEMPLATE.SITE</a
                      >
                      <div>
                        <button
                        class="m-3 bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-1 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                        type="button"
                        style="transition: all 0.15s ease 0s;background: #440030;"
                        @click="toggleArmor = !toggleArmor"
                      >
                        {{ toggleArmor ? 'Close' : 'Preview' }}
                      </button>
                      </div>
  
                      <div>
                        <iframe v-if="toggleArmor" src="https://armortemplate.site" width="100%" height="500"></iframe>
                      </div>
                      <hr>
                      <div class="m-3"></div>
                      <a href="https://spin-win-money.netlify.app/" target="_blank" rel="noopener" class="font-normal text-pink-500"
                        >Spin & Win Money</a
                      >
                      <div>
                        <button
                        class="m-3 bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-1 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                        type="button"
                        style="transition: all 0.15s ease 0s;background: #440030;"
                        @click="toggleSpin = !toggleSpin"
                      >
                        {{ toggleSpin ? 'Close' : 'Preview' }}
                      </button>
                      </div>
  
                      <div>
                        <iframe v-if="toggleSpin" src="https://spin-win-money.netlify.app/" width="100%" height="500"></iframe>
                      </div>
                      <hr>
                      <div class="m-3"></div>
                      
                      <a href="https://alma-bar.alguientiene.com" target="_blank" rel="noopener" class="font-normal text-pink-500"
                        >Menu Alma Bar</a
                      >
                      <div>
                        <button
                        class="m-3 bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-1 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                        type="button"
                        style="transition: all 0.15s ease 0s;background: #440030;"
                        @click="toggleAlma = !toggleAlma"
                      >
                        {{ toggleAlma ? 'Close' : 'Preview' }}
                      </button>
                      </div>
  
                      <div>
                        <iframe v-if="toggleAlma" src="https://alma-bar.alguientiene.com" width="100%" height="500"></iframe>
                      </div>
                      <hr>
                      <div class="m-3"></div>
                      <a href="https://my-menu-qr.netlify.app/" target="_blank" rel="noopener" class="font-normal text-pink-500"
                        >My Menu QR</a
                      >
                      <div>
                        <button 
                        class="m-3 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-1 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                        type="button"
                        style="transition: all 0.15s ease 0s;background: #440030;"
                        @click="toggleMymenu = !toggleMymenu"
                      >
                        {{ toggleMymenu ?'Close' : 'Preview' }}
                      </button>
                      </div>
  
                      <div>
                        <iframe v-if="toggleMymenu" src="https://my-menu-qr.netlify.app/" width="100%" height="500"></iframe>
                      </div>
                      <hr>
                      
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer-component></footer-component>
    </div>
  </template>
  <script>
  import NavbarComponent from "../components/NavBarra.vue";
  import FooterComponent from "../components/Footer.vue";
  import DownloadPdf from "../components/DownloadPdf.vue";
  export default {
    name: "profile-page",
    components: {
      NavbarComponent,
      FooterComponent,
      DownloadPdf
    },
    data(){
      return{
        toggleMymenu: false,
        toggleAlma: false,
        toggleSpin: false,
        toggleArmor: false,
      }
    }
  }
  </script>
  