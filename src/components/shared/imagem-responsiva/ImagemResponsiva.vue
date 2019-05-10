<template>
    <img class="imagem-responsiva" :src="url" :alt="titulo"/>
</template>
<script>
export default {
    props : {
        url : String,
        titulo : String
    }
}
</script>
<style scoped>
  .imagem-responsiva {
    width: 100%;
  }
</style>
