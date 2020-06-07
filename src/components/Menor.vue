<template>
    <div>
        <h2>Menor Elemento</h2>
        <input type="number" v-model="num_atual">
        <button @click="adicionar(parseFloat(num_atual))">+</button>
        <div class="lista">{{String(valores)}}</div>
        <button class="botaocalc" @click="menorcalc(valores)">calcular</button>
        <div class="cresultado">
            Menor elemento:
            <div class="resultado">{{menor}}</div>
        </div>
        <button class="limpar" @click="limpar()">Limpar lista</button>
    </div>
</template>

<script>
import menor_calc from './menor'

export default {
     data() {
         return {
             valores: [],
             num_atual: undefined,
             menor: undefined
         }
     },
     methods: {
         adicionar(valor) {
             this.valores.push(valor)
             this.num_atual = undefined
         },
         menorcalc(lista) {
             this.menor = menor_calc(lista)
         },
         limpar() {
             this.valores = []
             this.menor = null
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