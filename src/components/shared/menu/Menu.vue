<template>
    <nav>
      <ul>
        <li v-for="rota in rotas" :key="rota.indexOf">
          <!-- <router-link :to="route.path ? route.path : '/'"> -->
          <router-link :to="rota.path">{{ rota.titulo }}</router-link>
        </li>
      </ul>
    </nav>
</template>
<script>
export default {
    props: {
        rotas : Array
    }
}
</script>
<style scoped>

</style>
