<template>
  <div class="contenedorLibros">
    <div class="banner"></div>
    <h1 class="tituloDisney">{{ titulo }}</h1>
    <div class="contenedorPrincipal">
      <hijos-cards v-for="libro in libros" :key="libro.id" :libro="libro" @cambiar-favorito="cambiarFavorito"></hijos-cards>
    </div>
    <div>
      <lista-favoritos :libros="libros"></lista-favoritos>
    </div>
  </div>
</template>

  <script>
  import HijosCards from './HijosCards.vue';
  import ListaFavoritos from './ListaFavoritos.vue';
  
  export default {
    data() {
      return {
        titulo: 'Nuestra biblioteca',
        libros: [
          {
            id: 1,
            img:require('@/assets/img/libros/laSirenita.png'),
            clase: 'no fav',
            favoritos: false,
            nombre: 'La Sirenita',
            autor: 'Hans Christian Andersen',
            descripcion: 'La Sirenita es la historia de una niña llamada Ariel que sueña por conocer el mundo de los humanos. Un día se desata una enorme tormenta que hace naufragar un barco y Ariel rescatará a un apuesto joven del mar, el príncipe Eric, del que se enamorará.',
            alt: 'Imagen la sirenita'
          },
          {
          id:2,
          img:require('@/assets/img/libros/cenicienta.png'),
          clase: "no fav",
          favoritos: false,
          nombre: "Cenicienta",
          autor: "Charles Perrault",
          descripcion: "Cenicienta vive con su madrastra y sus dos hijas, quienes la obligan a realizar todas las tareas del hogar. Mientras tanto, en palacio, los reyes deciden organizar un baile real, al que Cenicienta no puede asistir, hasta que llega su hada madrina.",
          alt:"Imagen cenicienta"
      },
      {
          id:3,
          img: require('@/assets/img/libros/pocahontas.png'),
          clase: "no fav",
          favoritos: false,
          nombre: "Pocahontas",
          autor: "Sabina Colloredo",
          descripcion: "Pocahontas es una princesa india con la mente sabia y el corazón terco. John Smith es un colono inglés con los ojos azules y la ferocidad del aventurero. Ella sueña con un futuro en paz, él sueña con la conquista. Un amor imposible con una guerra cruel como telón de fondo.",
          alt:"Imagen Pocahontas"
      },
      {
          id:4,
          img:require('@/assets/img/libros/peterPan.png'),
          clase: "no fav",
          favoritos: false,
          nombre: "Peter Pan",
          autor: "James Matthew Barrie",
          descripcion: "Peter Pan es un niño volador que, acompañado del hada Campanilla, invita a la niña Wendy y a sus dos hermanos a visitar volando la isla de Nunca Jamás y conocer a los Niños Perdidos que viven con él, con la intención de que Wendy sea la mamá de todos ellos.",
          alt:"Imagen peter pan",
      },
      {
          id:5,
          img: require('@/assets/img/libros/bellaDurmiente.png'),
          clase: "no fav",
          favoritos: false,
          nombre: "La Bella Durmiente",
          autor: "Charles Perrault",
          descripcion: "La bella durmiente trata de una bonita historia de amor sobre una joven princesa condenada a dormir eternamente hasta que llegase a su vida el verdadero amor. Se trata de un cuento que habla sobre la bondad y que ensalza el valor del amor, demostrando que es capaz de superar todos los obstáculos.",
          alt:"Imagen la bella durmiente"
      },
       {
          id:6,
          img: require('@/assets/img/libros/aladin.jpeg'),
          clase: "no fav",
          favoritos: false,
          nombre: "Aladdin",
          autor: "Howard Ashman",
          descripcion: "Es un joven ladrón de buen corazón que vive en la ciudad árabe de Agrabah junto a su mono mascota Abu. Un día rescata y se hace amigo de la princesa Jasmín, quien se escabulló del palacio para explorar la ciudad, cansada de su vida sobre-protegida.",
          alt:"imagen aladin"
      }
        ]
      };
    },
    mounted() {
      this.cargarFavoritos();
    },
    methods: {
      cambiarFavorito(id, favorito) {
        const libro = this.libros.find(libro => libro.id === id);
        if (libro) {
          libro.favoritos = favorito;
          this.guardarFavoritos();
        }
      },
      guardarFavoritos() {
        const favoritos = this.libros.filter(libro => libro.favoritos).map(libro => libro.id);
        localStorage.setItem('favoritos', JSON.stringify(favoritos));
      },
      cargarFavoritos() {
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
        this.libros.forEach(libro => {
          libro.favoritos = favoritos.includes(libro.id);
        });
      }
    },
    components: {
      HijosCards,
      ListaFavoritos
    }
  };
  </script>
  <style>
  @import '@/assets/css/estilos.css';
  </style>
  