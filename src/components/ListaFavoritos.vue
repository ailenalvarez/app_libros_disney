<template>
    <div>
      <h2 class="tituloDisney">{{ tituloF }}</h2>
      <p :class="pLibros">{{ parrafo }}</p>
      <div class="contenedorPrincipal">
        <div v-for="libro in librosFavoritos" :key="libro.id" class="contenedorHijo">
          <img :src="libro.img" :alt="libro.alt" />
          <p class="nombreLibro">{{ libro.nombre }}</p>
          <p class="descripcion">{{ libro.descripcion }}</p>
          <p class="nombreAutor">Autor: {{ libro.autor }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['libros'],
    data() {
      return {
        tituloF: 'Lista de libros favoritos',
        parrafo: 'Agrega libros a tu lista de favoritos y visualízalos aquí!',
        pLibros: 'pLibros'
      };
    },
    computed: {
      librosFavoritos() {
        return this.libros.filter(libro => libro.favoritos);
      }
    }
  };
  </script>
  
  <style>
  @import '@/assets/css/estilos.css';
  </style>
  