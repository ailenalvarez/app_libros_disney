<template>
  <v-btn @click="cambiar" class="btnAgregar primary">
    <v-icon left>{{ favoritos ? 'mdi-check' : 'mdi-plus' }}</v-icon>
    {{ favoritos ? 'Ahora es uno de tus favoritos!' : 'Agregar a Favoritos' }}
  </v-btn>
</template>
  
  <script>
  export default {
    props: ['favoritos'],
    methods: {
      cambiar() {
        this.$emit('cambiar');
      }
    }
  };
  </script>
<style>
@import '@/assets/css/estilos.css';
</style>
  