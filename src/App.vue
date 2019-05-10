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
      fotos : [
        {
          url : "https://cdn-images-1.medium.com/max/1600/1*wqYF-8Dmh7LhtLkKfERc3Q.png",
          titulo : "Logo"
        },
        {
          url : "https://cdn-images-1.medium.com/max/1600/1*wqYF-8Dmh7LhtLkKfERc3Q.png",
          titulo : "logo2"
        }
      ]
    }
  }
}
</script>

<style>

</style>
