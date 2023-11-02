<template>
  <div id="app">
    <router-view />
  </div>
</template>
     <!-- Google tag (gtag.js) -->
     <!-- <script async src="https://www.googletagmanager.com/gtag/js?id=G-ND616K92FZ"></script> -->
     <script setup>
       window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());
 
       gtag('config', 'G-ND616K92FZ');
     </script>