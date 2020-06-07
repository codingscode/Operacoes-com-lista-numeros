<template>
    <div class="molde1">
		<h1>Operações</h1>
        <select  v-model="escolhido"> 
			    <option select value="">Escolha uma tarefa</option>
				<option v-for="(cada, i) in opcoes" :key="i" >
				     {{ cada }}
				</option>
        </select>
        <h2>Operação: {{escolhido}}</h2>
        <div v-if="escolhido == 'maior'">
            <Maior />
		</div>
        <div v-else-if="escolhido == 'menor'">
            <Menor />
		</div>
        <div v-else-if="escolhido == 'mdc'">
            <Mdc />
		</div>
        <div v-else-if="escolhido == 'mmc'">
            <Mmc />
		</div>
        <div v-else>
            Escolha uma operação
		</div>
    </div>
</template>

<script>
import './App.css'
import Maior from './components/Maior.vue'
import Menor from './components/Menor.vue'
import Mdc from './components/Mdc.vue'
import Mmc from './components/Mmc.vue'

export default {
	components: {Maior, Menor, Mdc, Mmc},
	data() {
		return {
			operacoes: 'escolha uma operação',
			opcoes: ['maior', 'menor', 'mdc', 'mmc'],
			escolhido: ''
		}
	}
}
</script>

<style>
    .molde1 {
		background-color: lightblue;
		width: 450px;
		height: 600px;
		padding: 30px;
        margin-top: 50px;
		text-align: justify;
        display: inline-block;  
        border-radius: 20px;
		border: solid 1px purple;
	}

    select {
		width: 150px;
		height: 25px;
		outline: none;
		
	}

    option {
		text-align: center;
	}

	
</style>