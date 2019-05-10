<template>
  <div class="corpo">
    <h1 class="centralizado">{{ titulo }}</h1>
    <input type="search" class="filtro" v-on:input="search = $event.target.value" placeholder="Busca"/>
    {{ search }}
    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto of fotos" :key="foto.alt">
        <Painel :titulo="foto.titulo">
          <img class="imagem-responsiva" :src="foto.url" :alt="foto.alt"/>
        </Painel>

      </li>
    </ul>
  </div>
</template>

<script>
import Painel from './components/shared/painel/Painel.vue';

export default {
  data () {
    return {
      titulo: "Alura app",
      fotos : [],
      search : "",
    }
  },
  created() {
    this.$http.get('http://localhost:3000/v1/fotos')
      .then(res => res.json())
      .then(fotos => this.fotos = fotos);
  },
  components: {
    Painel,
  }
}
</script>

<style>
  .corpo{
    font-family: Helvetica, sans-serif;
    width: 96%;
    margin: 0 auto;
  }
  .centralizado {
    text-align: center;
  }
  .lista-fotos {
    list-style: none; 
  }
  .lista-fotos .lista-fotos-item{
    display: inline-block;
  }
  .imagem-responsiva {
    width: 100%;
  }
  .filtro {
    display: block;
    width: 100%;
  }
</style>
