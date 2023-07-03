<template>
    <v-footer class="secondary text-center d-flex flex-column">
    <div class="bg-teal d-flex w-100 align-center px-4">
      <strong>© 2023 Biblioteca de Disney</strong>
    </div>
    <div class="pt-0">
      <p>Ailen Alvarez y Julieta Bariandaran
      </p>
    </div>
    <v-divider></v-divider>
    <div class="px-4 py-2 bg-black text-center w-100">
      {{ new Date().getFullYear() }} — <strong>Aplicación para dispositivos moviles</strong>
    </div>
  </v-footer>
</template>


<style>
  @import '@/assets/css/estilos.css';
  </style>