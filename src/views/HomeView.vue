<template>
  <div class="container">
    <div class="row mt-2">
      
      <!-- início lado esquerdo -->
      <div class="col mb-2">
        <div class="card palco">
          <div class="card-header"></div>

          <div class="card-body bg-pokebola bg-normal">
            <div class="pokemon">
              
              <transition 
              @after-enter="exibirEvolucoes = true"
              @before-leave="exibirEvolucoes = false"

              enter-active-class="animate__animated animate__bounceIn"
              leave-active-class="animate__animated animate__bounceOut"
              >
              <img :src="require(`@/assets/imgs/pokemons/${pokemon.imagem}`)" v-if="exibir">
            </transition> 
              <div class="evolucoes">
              
              <transition name="fade" v-for="e in pokemon.evolucoes" :key="e">
               <img :src="require(`@/assets/imgs/pokemons/${e.toString().padStart(3, '0')}.png`)" v-if="exibirEvolucoes"> 
              
            </transition> 
          

          </div>
            </div>
          </div>

          <div class="card-footer">
         
          <nav class="nav nav-pills nav-fill">
            <router-link class="nav-item nav-link text-white" :to="{path: '/sobre'}" exact-active-class="active">Sobre</router-link>
              <router-link class="nav-item nav-link text-white" :to="{path: '/status'}" exact-active-class="active">Status</router-link>
              <router-link class="nav-item nav-link text-white" :to="{path: '/habilidades'}" exact-active-class="active">Habilidades</router-link>
          </nav>

          <div class="detalhes">
            <!-- exibe dados de acordo com o menu de navegação -->     
            <!-- {{pokemon}} -->
            <router-view v-slot="{ Component }" :pokemon="pokemon" @adicionarHabilidade="adicionarHabilidade" @removerHabilidade="removerHabilidade">
              <transition
              enter-active-class="animate__animated animate__fadeIn">
                <component :is="Component" />
              </transition>
            </router-view>

          </div>

          </div>
        </div>
      </div>
      <!-- fim lado esquerdo -->

      <!-- início lado direito -->
      <div class="col mb-2 pokedex">        
        <div class="row">
          <div class="col">
            <h1>Pokédex</h1>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <select class="form-select" v-model="ordenacao">
              <option value="" disabled selected>Ordem</option>
              <option value="1">ID Crescente</option>
              <option value="2">ID Decrescrente</option>
              <option value="3">De A - Z</option>
              <option value="4">De Z - A</option>
            </select>
          </div>
        
          <div class="col">
            <input type="text" class="form-control" placeholder="Pesquisar pokémon">
          </div>
        </div>

        <div class="row">
          <div class="pokedex-catalogo">

            <!-- início listagem dinâmica -->
            <div v-for="p in pokemons" :key="p.id"
             :class="`cartao-pokemon bg-${p.tipo}`" @click="analisarPokemon(p)">
              <h1>{{p.id}} {{p.nome}}</h1>
              <span>{{p.tipo}}</span>
              <div class="cartao-pokemon-img">
                <transition appear enter-active-class="animate__animated animate__flipInX">
                                <img :src="require(`@/assets/imgs/pokemons/${p.imagem}`)" >
                </transition>
              </div>
            </div>
            <!-- fim listagem dinâmica -->

          </div>
        </div>
      </div>
      <!-- fim lado direito -->

    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data: () => ({
    exibir: false,
    exibirEvolucoes: false,
    pokemon:{},
    pokemons: [],
    ordenacao:''
  }),
  watch:{
    ordenacao(valorNovo){
      console.log(valorNovo)
      if(valorNovo == 1){ //ordenacao pot id crescente
        this.pokemons.sort((proximo, atual) => {
          if(atual.id < proximo.id){
            return 1
          }else if(atual.id > proximo.id){
            return -1
          }
          return 0
        })
      }
      if(valorNovo == 2){ //ordenacao pot id decrescente
        this.pokemons.sort((proximo, atual) => {
          if(atual.id < proximo.id){
            return -1
          }else if(atual.id > proximo.id){
            return 1
          }
          return 0
        })
      }
      if(valorNovo == 3){ //ordenacao alfabetica
        this.pokemons.sort((proximo, atual) => {
          //  1 caso a ordem esteja correta
          if(atual.nome < proximo.nome){
            return 1
          }
          // -1 caso a ordem esteja incorreta (inverter possições)
          if(atual.nome > proximo.nome){
            return -1
          }
          // 0 caso nenhuma ação seja necessaria
          return 0
        })
      }
      if(valorNovo == 4){ //ordenação alfabetica Z - A (localeCompare)
        this.pokemons.sort((proximo, atual) => {
       //   let resultado1 = atual.nome.localeCompare(proximo.nome)
       //   let resultado2 = proximo.nome.localeCompare(atual.nome)

          return atual.nome.localeCompare(proximo.nome)
          //console.log('atual e o próximo:', resultado1)
          //console.log('próximo e o atual:', resultado2)
        })
      }

    }

  },
  created(){
  fetch('http://localhost:3000/pokemons')
  .then(response => {
    return response.json()
  })
  .then(data => {
    this.pokemons = data
  })
  },
  methods:{
    //se o pokemon atual é diferente do pokemon clicado
    //se o atributo exibir é true
    analisarPokemon(p){
      let mudaPokemonAnalisado = false
      if(this.pokemon.id != p.id && this.exibir == true){
        setTimeout(() => {
          this.analisarPokemon(p)
        }, 250);

        mudaPokemonAnalisado = true
      }
      this.pokemon = p
      this.exibir = !this.exibir
      this.exibirEvolucoes = !this.exibirEvolucoes

      //se a ação for de ocultar o pokemon
      //se a ação recursiva nao for chamada
      if(!this.exibir && !mudaPokemonAnalisado){
        this.pokemon = {}
      }
    },
    adicionarHabilidade(habilidade){
      if(this.pokemon.habilidades){
        this.pokemon.habilidades.push(habilidade)
      }
    },
    removerHabilidade(indice){
      if(this.pokemon.habilidades[indice]){
        this.pokemon.habilidades.splice(indice,1)
      }
    }
  }

}
</script>

<style>
body {
  background-color: #dee3eb;
}
</style>

<style scoped>
  @import '@/assets/css/animacoes.css';
.pokedex {
  padding: 20px;
  background-color: #ffffff;
  -webkit-box-shadow: 2px 2px 10px rgba(200, 200, 200, 0.77);
  -moz-box-shadow: 2px 2px 10px rgba(200, 200, 200, 0.77);
  box-shadow: 2px 2px 10px rgba(200, 200, 200, 0.77);
  border-radius: 10px;
}

.pokedex-catalogo {
  overflow: auto;
  display: flex;
  flex-wrap: wrap;
  height: 400px;
  width: 98%;
  margin-top: 10px;
}

.cartao-pokemon {
  position: relative;
  margin: 5px;
  width: 150px;
  height: 115px;
  cursor: pointer;
  border-radius: 5px;
  -webkit-box-shadow: 2px 2px 2px rgba(200, 200, 200, 0.77);
  -moz-box-shadow: 2px 2px 2px rgba(200, 200, 200, 0.77);
  box-shadow: 2px 2px 2px rgba(200, 200, 200, 0.77);
}

.cartao-pokemon h1{
  color:#fff;
  font-size: 14px;
  margin: 5px 0px 0px 5px;
  padding: 0px;
}

.cartao-pokemon span{
  color:#fff;
  position: absolute;
  background: rgba(255, 255, 255, 0.3);
  font-size: 12px;
  margin: 10px 0px 0px 5px;
  padding: 5px 10px 5px 10px;
  border-radius: 25px;
}

.cartao-pokemon img {
    max-width:60%;
    max-height:60%;
    float: right;
}

.bg-grama {
  background-color: #2d8f78;
}

.bg-fogo {
  background-color: #e47373
}

.bg-agua {
  background-color: #5a9ed2
}

.bg-inseto {
  background-color: #26d3ab
}

.bg-normal {
  background-color: #cecece
}

.bg-pokebola {
  background-image: url("@/assets/pokebola.png");
  background-repeat: no-repeat;
  background-position: bottom right;
}

.palco {
  color: #fff;
  background-color: #333;
  -webkit-box-shadow: 2px 2px 10px rgba(230, 223, 223, 0.77);
  -moz-box-shadow: 2px 2px 10px rgba(230, 223, 223, 0.77);
  box-shadow: 2px 2px 10px rgba(230, 223, 223, 0.77);
  border-radius: 10px;
}

.pokemon {
  display: block;
  text-align: center;
  height: 215px;
}

.detalhes {
  margin: 20px 30px 20px 30px;
}
.evolucoes{
  position: absolute;
  top: 0px;
  right:0px;
  height: 70px;
}
.evolucoes img{
  cursor: pointer;
  max-width: 100%;
  max-height: 100%;
}
</style>
