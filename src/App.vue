<template>
  <div>
    <h1>{{ titulo }}</h1>
    <ul>
      <li v-for="foto of fotos" :key="foto.alt">
        <img :src="foto.url" :alt="foto.alt"/>
      </li>
    </ul>
  </div>
</template>

<script>


export default {
  data () {
    return {
      titulo: "Alura app",
      fotos : []
    }
  },
  created() {
    alert("Componente Criado");
  }
}
</script>

<style>

</style>
