<template>
  <div>
    <h1>{{ titulo }}</h1>
    <img :src="foto.src" :alt="foto.alt"/>
  </div>
</template>

<script>


export default {
  data () {
    return {
      titulo: "Alura app",
      foto : {
        src : "./assets/logo.png",
        alt : "Logo",
      }
    }
  }
}
</script>

<style>

</style>
