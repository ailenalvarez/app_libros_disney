<template>
  <v-app >
    <v-main>
      <div class="contenedor" id="app">
        <nav class="secondary menu">
          <ul>
            <li><router-link to="/">Biblioteca de Disney</router-link></li>
            <li><router-link to="/formulario">Agregar un libro a tu lista</router-link></li>
        </ul>  
        </nav>
        <transition name="slide-fade" mode="out-in">
            <router-view></router-view>
      </transition>
      <footer-view></footer-view>
    </div>
    </v-main>
  </v-app>
</template>

<script>
import FooterView from './views/FooterView.vue';
export default {
  
  name: 'App',
  components: {
    FooterView
  }
};
</script>
