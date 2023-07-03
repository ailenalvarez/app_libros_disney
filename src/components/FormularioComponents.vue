<template>
 
    <div class="formulario">
      <h1>Agrega un libro a tu lista!</h1>
      <form v-on:submit.prevent="guardar" novalidate class="form-c"> 
        <label>Nombre del libro</label>
        <input type="text" v-model="titulo" placeholder="Ingrese Titulo" name="titulo" />
  
        <label>Nombre del autor</label>
        <input type="text" v-model="autor" placeholder="Ingrese el nombre del autor" name="autor" />
  
        <label>Descripción</label>
        <textarea v-model="descripcion" name="descripcion"></textarea>
  
        <label>Categoria</label>
        <select v-model="categoria" multiple size="1" name="categoria">
          <option>Princesas</option>
          <option>SuperHeroes</option>
          <option>Hechizos</option>
          <option>Villanos</option>
          <option>Otros</option>
        </select>
  
        <label>Año de lanzamiento</label>
        <input v-model.number="anio" name="anio" type="text" />
  
        <input type="submit" value="Enviar" />
      </form>
  
      <div v-if="envio === true">
        <div v-if="error" class="classerror">
          <ul>
            <li v-for="x in errores" :key="x">{{ x }}</li>
          </ul>
        </div>
        <div v-else class="envio">
          <span>Gracias por sumar libros!</span>
        </div>
      </div>
  <h1 class="tuLibro">Tu libro</h1>
      <div class="contenedorPrincipal" v-if="array.length > 0">
        
        <div class="contenedorMos" v-for="item in array" :key="item.id">
          <h2 class="nombreLibro">{{ item.titulo }}</h2>
          <h3 class="nombreAutor">{{ item.autor }}</h3>
          <p class="descripcion">{{ item.descripcion }}</p>
          <span v-for="x in item.categoria" :key="x">{{ x }} </span>
          <p>{{ item.anio }}</p>
        </div>
      </div>

      <div v-else >
        <p id="textoComenza">¡Comenzá a cargar tus libros!</p>
      </div>
    </div>
</template>
  
<script>
  export default {
    data() {
      return {
        titulo: null,
        autor: "",
        descripcion: "",
        categoria: [],
        anio: null,
        array: [],
        errores: [],
        envio: false,
      };
    },
    computed: {
      error() {
        return this.errores.length;
      },
    },
    methods: {
      guardar() {
        this.envio = true;
        this.errores = [];
  
        if (!this.titulo) {
          this.errores.push("El titulo es obligatorio.");
        }
        if (this.titulo && this.titulo.length < 2) {
          this.errores.push("El título tiene que tener mas de 2 caracteres.");
        }
        if (!this.categoria[0]) {
          this.errores.push("Tenés que seleccionar una categoria.");
        }
        if (!this.anio) {
          this.errores.push("El año de publicación es obligatorio.");
        }
  
        if (this.errores.length == 0) {
          const nuevoObj = {
            descripcion: this.descripcion,
            titulo: this.titulo,
            autor: this.autor,
            categoria: this.categoria,
            anio: this.anio,
          };
  
          if (!localStorage.info) {
            this.array = [];
          } else {
            this.array = JSON.parse(localStorage.getItem("info"));
          }
  
          this.array.push(nuevoObj);
          localStorage.setItem("info", JSON.stringify(this.array));
        }
      },
    },
    mounted() {
      this.array = JSON.parse(localStorage.getItem("info")) || [];
    },
  };
</script> 
<style>
@import '@/assets/css/estilos.css';
</style>
