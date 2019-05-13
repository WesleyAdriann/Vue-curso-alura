<template>
  <div>
    <h1 class="centralizado">Alura <Applet> </Applet></h1>
    <input type="search" class="filtro" @input="filtro = $event.target.value" placeholder="Busca"/>
    <p v-show="mensagem" class="centralizado">{{ mensagem }}</p>
    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto of filtroFotos" :key="foto._id">
        <Painel  :titulo="foto.titulo">
          <ImagemResponsiva v-meu-transform:scale.animate="1.1" :url="foto.url" :titulo="foto.titulo"/>
          <router-link :to="{name: 'altera', params: { id : foto._id }}">
            <Botao tipo="button" rotulo="ALTERAR"/>
          </router-link>
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
import FotoService from '../../domain/foto/FotoService';

export default {
  data () {
    return {
      fotos : [],
      filtro : "",
      mensagem : '',
    }
  },
  created() {
    this.service = new FotoService(this.$resource);
    this.service.lista()
      .then(fotos => this.fotos = fotos, err => this.mensagem = err.message );
      
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

      this.service.apaga(foto._id)
        .then(() => {
          let indice = this.fotos.indexOf(foto);
          this.fotos.splice(indice, 1);
          this.mensagem = "Foto removida com sucesso";
        }, err => {
            this.mensagem = err.message;
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
