<template>
  <div class="conversor">
    <h2>{{moedaA}} para {{moedaB}}</h2>
    <input class="valor" id="valor" type="number" maxlength="9" v-model="moedaA_value" v-bind:placeholder="moedaA"   @keyup="converter(), mask()">
    <h2>{{simbolo}} {{moedaB_value}}</h2>
  </div>
</template>

<script>
export default {
  name: "Conversor",
  props: ["moedaA", "moedaB", "simbolo"],
    data(){
      return{
        moedaA_value : "",
        moedaB_value : "0",
      }
    },
    methods:{
      converter(){
        let  de_para = this.moedaA + "-" + this.moedaB;
        // let  dePara = this.moedaA + this.moedaB;
        let url = "https://economia.awesomeapi.com.br/json/"+de_para

        fetch(url)
          .then(res=>{
            return res.json();
          })
          .then(data=>{
            let cotacao = data[0].bid
            console.log(cotacao)

            this.moedaB_value = (cotacao * parseFloat(this.moedaA_value.replace(",", "."))).toFixed(2);
            this.moedaB_value.toString;
            if(isNaN(this.moedaB_value)) {
              this.moedaB_value = '0'
            } 
          })

      },

      mask(){
        let elemento = document.getElementById('valor');
        let valor = elemento.value;
        elemento.value = valor;
        if(valor == 'NaN') elemento.value = '';
      }

    }
}
</script>

<style scoped>
  .conversor{
    max-width: 300px;
    padding:20px;
    box-shadow: 3px 3px 23px 0px  rgba(128,128,128,0.44);
    border-radius: 10px;
    background:cadetblue;
  }

  .valor {
    max-width: 140px;
    border-radius: 3px;
    border: none;
  }

  .valor:focus { 
      outline: none !important;
      border-color: #719ECE;
      box-shadow: 0 0 10px #719ECE;
  }

  .btn{
    background: transparent;
    color: #fff;
    border: 1px solid #FFF;
    border-radius: 3px;
    padding: 10px;
    margin-left: 30px;
    transition: .3s;
    font-weight: 600;
  }
  .btn:hover{
    background: #6b849b;
  }

  input[type=number]::-webkit-inner-spin-button { 
    -webkit-appearance: none;
    
}
  input[type=number] { 
    -moz-appearance: textfield;
    appearance: textfield;

  }

  @media (max-width: 900px){
  .conversor{
    max-width: 40% !important;
  }
  .valor {
    max-width: 90%;
  }

  .btn{
    margin-left: 0;
    margin-top: 10px;
  }
}

@media (max-width: 768px){
  .conversor{
    max-width: 300px !important;
    margin-top: 15px;
  }

  .btn{
    margin-left: 10px;
    margin-top: 10px;
  }
}

</style>
