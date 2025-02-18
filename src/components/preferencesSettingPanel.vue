<script setup>
    import { ref } from 'vue'
    import { AI , background , general } from './settings/_allRemix.js'

    let options = {
        general:"General",
        background:"BackGround",
        artificalIntelligent:"AI"
    }

</script>

<template>
    <div id="setting_box_container" class="absolute bottom-8 left-8 h-3/5 w-6/12 p-2 rounded-3xl flex items-center bg-slate-200 z-40 ">
        <div class="flex flex-col h-full justify-center">
            <button v-for="key in options" class=" h-10 w-32 m-4 bg-slate-400 rounded-3xl">{{ key }}</button>
        </div>
        <component class=" h-[520px] w-9/12 bg-slate-400 rounded-xl absolute right-4 p-10" :is="AI"></component>
    </div>
</template>
