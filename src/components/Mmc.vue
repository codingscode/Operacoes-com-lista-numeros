<template>
    <div>
       <h2>Mínimo Múltiplo Comum</h2>
       <input type="number" v-model="numero_atual">
       <button @click="adicionando(parseFloat(numero_atual))" >+</button>
       <div class="lista">{{String(lista)}}</div>

       <button class="botaocalc" @click="calcularmmc(lista)">Calcular MMC</button>
       <div class="cresultado">o mmc é :  <div class="resultado"> {{mmc}}</div></div>
       <button class="limpar" @click="limpar()">Limpar lista</button>
    </div>
</template>

<script>
import calc_mmc from './mmc'

export default {
    data() {
        return {
            lista: [],
            numero_atual: undefined,
            mmc: undefined
        }
    },
    methods: {
        adicionando(valor) {
           this.lista.push(valor)
           this.numero_atual = undefined
        },
        calcularmmc() {
            this.mmc = calc_mmc(this.lista)
        },
        limpar() {
             this.lista = []
             this.mmc = null
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
 
    .botaocalc:hover {
        background: darkorange;
        color: white;
    }

    button {
        margin: 8px;
    }
</style>