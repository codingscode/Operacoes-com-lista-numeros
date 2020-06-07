<template>
     <div >
          <h2>Maior elemento</h2>
          <input type="number" v-model="num_atual">
          <button @click="adicionar(parseFloat(num_atual))">+</button>
          <div class="lista">{{String(valores)}}</div>
          <button class="botaocalc" @click="maiorcalc(valores)">calcular</button>
          <div class="cresultado" > 
              Maior elemento
              <div class="resultado" >{{maior}}</div>
          </div>
          <button class="limpar" @click="limpar()">Limpar lista</button>
     </div>
     
</template>

<script>
import maior_calc from './maior'

export default {
     data() {
         return {
             valores: [],
             num_atual: undefined,
             maior: undefined
         }
     },
     methods: {
         adicionar(valor) {
             this.valores.push(valor)
             this.num_atual = undefined
         },
         maiorcalc(lista) {
             this.maior = maior_calc(lista)
         },
         limpar() {
             this.valores = []
             this.maior = null
         }  
     }
}




</script>
    
<style>
     .lista, .resultado {
        height: 20px;
        width: 180px;
        background-color: white;
        margin: 15px 0px;
        padding: 5px;
        border: solid 1px darkgreen;
    }

    .cresultado {
        margin: 15px 0px;
    }

    .resultado {
        width: 70px;
        margin: 10px 0px;
    }

    .botaocalc, .limpar {
        background: gold;
        height: 40px;
        border-radius: 4px;
        border: solid 1px lightsalmon;
        margin: 0px;
        outline: none;
    }

    button {
        margin: 8px;
    }

</style>