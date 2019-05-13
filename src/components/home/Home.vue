<template>
  <div>
    <h1 class="centralizado">{{ titulo }}</h1>
    <input type="search" class="filtro" @input="filtro = $event.target.value" placeholder="Busca"/>
    <p v-show="mensagem" class="centralizado">{{ mensagem }}</p>
    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto of filtroFotos" :key="foto.indexOf">
        <Painel  :titulo="foto.titulo">
          <ImagemResponsiva v-meu-transform:scale.animate="1.1" :url="foto.url" :titulo="foto.titulo"/>
          <Botao
            tipo="button"
            rotulo="REMOVER"
            @botaoAtivado="remove(foto)"
            :confirmacao="true"
            estilo="perigo"/>
        </Painel>

      </li>
    </ul>
  </div>
</template>

<script>
import Painel from '../shared/painel/Painel.vue';
import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue';
import Botao from '../shared/botao/Botao.vue';

export default {
  data () {
    return {
      titulo: "Alura app",
      fotos : [],
      filtro : "",
      mensagem : '',
    }
  },
  created() {
    this.$http.get('http://localhost:3000/v1/fotos')
      .then(res => res.json())
      .then(fotos => this.fotos = fotos);
  },
  components: {
    Painel,
    ImagemResponsiva,
    Botao,
  },
  computed : {
    filtroFotos () {
      if(this.filtro) {
        let exp = new RegExp(this.filtro.trim(), 'i');
        return this.fotos.filter(foto => exp.test(foto.titulo));
      }else {
        return this.fotos;
      }
    }
  },
  methods : {
    remove(foto) {
      this.$http.delete(`http://localhost:3000/v1/fotos/${foto._id}`)
      .then(() => {
        let indice = this.fotos.indexOf(foto);
        this.fotos.splice(indice, 1);
        this.mensagem = "Foto removida com sucesso";
      }, err => {
          console.log(err);
          this.mensagem = "Não foi possivel remover";
        });
    }
  }
}
</script>

<style>
  
  .centralizado {
    text-align: center;
  }
  .lista-fotos {
    list-style: none; 
  }
  .lista-fotos .lista-fotos-item{
    display: inline-block;
  }
  .filtro {
    display: block;
    width: 100%;
  }
</style>
