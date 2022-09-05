<template>
    <div>
        <span>Força:</span>
        <div class="progress mb-2">
            <div class="progress-bar" role="progressbar" style="width: 30%;" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">30</div>
        </div>

        <span>Agilidade:</span>
        <div class="progress mb-2">
            <div class="progress-bar" role="progressbar" style="width: 40%;" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">40</div>
        </div>

        <span>Ataque:</span>
        <div class="progress mb-2">
            <div class="progress-bar" role="progressbar" style="width: 20%;" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">20</div>
        </div>
        
        <span>Defesa:</span>
        <div class="progress mb-2">
            <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25</div>
        </div>
    </div>
</template>
<script>
    export default {
        name:'StatusVue'
    }
</script>