<script setup>
    import { computed } from 'vue';

    import { useGeminiResault,useUniversalFrameworkVisibility } from '@/stores/index.js'

    const _geminiResault = useGeminiResault()

    // New API
    const universalFrameworkVisibility = useUniversalFrameworkVisibility()

    let Gemini = computed(() => {
        console.log("模态框："+_geminiResault.geminiResault)
        return _geminiResault.geminiResault
    })


</script>
<template>
    <div id="whole_component_container" @click.self="universalFrameworkVisibility.changeVisibilities('geminiVisibility',false)" class=" fixed w-screen h-screen flex justify-center items-center z-50 bg-[rgba(255,255,255,0)] backdrop-blur-sm">
        <div id="dialog_view_container" class=" fixed h-[700px] w-[1000px] bg-slate-400 flex flex-col justify-between items-center rounded-3xl">
            <div id="gemini_answer" class="bg-slate-500 mt-12 h-[600px] w-[900px] rounded-2xl p-8 text-white overflow-scroll flex flex-col gap-4" v-html="Gemini">
            </div>
        </div>
    </div>
</template>