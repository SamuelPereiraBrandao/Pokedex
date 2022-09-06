<template>
    <div>   
        <div v-if="!pokemon.id">
        Selecione um Pokémon!
    </div>
    <div v-else>
        <span>Força:</span>
        <div class="progress mb-2">
            <div class="progress-bar" role="progressbar" :style="`width: ${pokemon.status.forca}%;`" :aria-valuenow="pokemon.status.forca" 
            aria-valuemin="0" aria-valuemax="100">{{pokemon.status.forca}}</div>
        </div>

        <span>Agilidade:</span>
        <div class="progress mb-2">
            <div class="progress-bar" role="progressbar" :style="`width: ${pokemon.status.agilidade}%;`" :aria-valuenow="pokemon.status.agilidade" 
            aria-valuemin="0" aria-valuemax="100">{{pokemon.status.agilidade}}</div>
        </div>

        <span>Ataque:</span>
        <div class="progress mb-2">
            <div class="progress-bar" role="progressbar" :style="`width: ${pokemon.status.ataque}%;`" :aria-valuenow="pokemon.status.ataque" 
            aria-valuemin="0" aria-valuemax="100">{{pokemon.status.ataque}}</div>
        </div>
        
        <span>Defesa:</span>
        <div class="progress mb-2">
            <div class="progress-bar" role="progressbar" :style="`width: ${pokemon.status.defesa}%;`" :aria-valuenow="pokemon.status.defesa" 
            aria-valuemin="0" aria-valuemax="100">{{pokemon.status.defesa}}</div>
        </div>
        </div>
    </div>
</template>
<script>
    export default {
        name:'StatusVue',
        props:{
            pokemon: Object
        }
    }
</script>