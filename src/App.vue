<template>
  <div id="app">
  <h1 class="titulo-page">CONVERSOR DE MOEDAS EM VUE.JS</h1>
    <div class="linha">
      <h1>Conversor de Dólar $</h1> 
      <div class="bloco">
      <Conversor class="bloco-conversor" simbolo="R$" moeda-a="USD" moeda-b="BRL"/>
      <Conversor class="bloco-conversor" simbolo="$" moeda-a="BRL" moeda-b="USD"/>
      </div>
    </div>

    <div class="linha">
      <h1>Conversor de Euro €</h1>
      <div class="bloco">
      <Conversor class="bloco-conversor" simbolo="R$" moeda-a="EUR" moeda-b="BRL"/>
      <Conversor class="bloco-conversor" simbolo="€" moeda-a="BRL" moeda-b="EUR"/>
      </div>
    </div>

    <div class="linha">
      <h1>Conversor de Libra Esterlina £</h1>
      <div class="bloco">
      <Conversor class="bloco-conversor" simbolo="R$" moeda-a="GBP" moeda-b="BRL"/>
      <Conversor class="bloco-conversor" simbolo="£" moeda-a="BRL" moeda-b="GBP"/>
      </div>
    </div>
    <Footer />
    
  </div>
</template>

<script>
import Conversor from "./components/Conversor.vue";

export default {
  name: 'App',
  components: {
    Conversor,
    Footer  : () => import("./components/Footer"),
  }
};
</script>

<style>
@import "/scss/global";

body{
  background: azure;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.titulo-page{
  color: cadetblue;
}


h2{
  color: #fff;
}

.bloco {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

}

.linha{
  width: 100%;
  max-width: 700px;
  margin: 30px auto;
  border-radius: 15px;
  padding: 20px 0 80px 0;
  background: beige;
  box-shadow: 3px 3px 23px 0px  rgba(128,128,128,0.44);

}

@media (max-width: 768px){
  #app{
    margin-top: 30px;
  }
.bloco{
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 9px 9px;
}

.linha{
  margin: 30px 5px;
  padding: 12px 0 4px 0;

}

}

@media (max-width: 400px){
  h1{
    font-size: 1.7em;
  }
  h2{
    font-size: 1.3em;
  }
}
</style>
