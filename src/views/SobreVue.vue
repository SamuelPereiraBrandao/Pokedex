<template>
    <div>
        <p>Identificador: {{pokemon.id}}</p>
        <p>Nome: {{pokemon.nome}}</p>
        <p>Tipo: {{pokemon.tipo}}</p>
    </div>
</template>
<script>
    export default {
        name:'SobreVue',
        props:{
            pokemon: Object
        }
    }
</script>