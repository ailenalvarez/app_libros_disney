<template>
    <div class="contenedorHijo">
      <img :src="libro.img" :alt="libro.alt" class="portada" />
      <h2 class="nombreLibro">{{ libro.nombre | uppercase }}</h2>
      <h3 class="nombreAutor">{{ libro.autor}}</h3>
      <p class="descripcion">{{ libro.descripcion }}</p>
      <btn-favoritos :favoritos="libro.favoritos" @cambiar="cambiarFavorito"></btn-favoritos>
    </div>
  </template>
  
  <script>
  import BtnFavoritos from './BtnFavoritos.vue';
  
  export default {
    props: ['libro'],
    methods: {
      cambiarFavorito() {
        this.$emit('cambiar-favorito', this.libro.id, !this.libro.favoritos);
      }
    },
    components: {
      BtnFavoritos
    }
  };
  </script>
  
  <style>
  @import '@/assets/css/estilos.css';
  </style>
  