<template>
    <div>
        <table class="table text-white">
            <tbody>
                <tr v-for="(h, indice) in pokemon.habilidades" :key="indice">
                    <td>{{h}}</td>
                    <td class="d-flex justify-content-end">
                        <button type="button" class="btn btn-danger btn-sm">x</button>
                    </td>
                </tr>
   
            </tbody>
        </table>
        <input type="text" class="form-control" placeholder="Adicionar habilidade">
    </div>
</template>

<style scoped>
.table td {
    border: none;
}
</style>
<script>
    export default {
        name: 'HabilidadesVue',
        props:{
            pokemon: Object
        }
    }
</script>