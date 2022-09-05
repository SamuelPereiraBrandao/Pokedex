<template>
  <div class="container">
    <div class="row mt-2">
      
      <!-- início lado esquerdo -->
      <div class="col mb-2">
        <div class="card palco">
          <div class="card-header"></div>

          <div class="card-body bg-pokebola bg-normal">
            <div class="pokemon">
              <transition name="pulo">
              <img src="@/assets/imgs/pokemons/001.png" v-if="exibir">
            </transition> 
              <div class="evolucoes">
              
              <transition name="fade">
              <img src="@/assets/imgs/pokemons/003.png" v-if="exibir">
            </transition> 
              <transition name="fade">
              <img src="@/assets/imgs/pokemons/002.png" v-if="exibir">
            </transition> 

          </div>
            </div>
          </div>

          <div class="card-footer">
         
          <nav class="nav nav-pills nav-fill">
            <!-- menu de navegação -->
          </nav>

          <div class="detalhes">
            <!-- exibe dados de acordo com o menu de navegação -->
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
            <select class="form-select">
              <option>Id crescente</option>
              <option>Id decrescrente</option>
              <option>De A - Z</option>
            </select>
          </div>
        
          <div class="col">
            <input type="text" class="form-control" placeholder="Pesquisar pokémon">
          </div>
        </div>

        <div class="row">
          <div class="pokedex-catalogo">

            <!-- início listagem dinâmica -->
            <div class="cartao-pokemon bg-grama" @click="exibir =  !exibir">
              <h1>1 Bulbasaur</h1>
              <span>grama</span>
              <div class="cartao-pokemon-img">
                <img src="@/assets/imgs/pokemons/001.png" >
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
    exibir: false
  })
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
  float: right;
}
</style>
