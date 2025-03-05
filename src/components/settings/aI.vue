<script setup>
    import universalItemsLayout from './template/universalItemsLayout.vue'
    import { useUserPreference } from '@/stores/index.js';
    import { ref } from 'vue';

    const userPreference = useUserPreference()
    const localGoogleAIAPIKEY = userPreference.aI.googleAIAPIKEY

    const userAIAPIKEY = ref()

    function modifyUserPreference(event){
        if(event.key == "Enter" && event.isComposing == false){
            console.log(`user APIKEY: ${userAIAPIKEY.value}`)
            userPreference.modifyUserPreference('aI','GoogleAIAPIKEY',userAIAPIKEY.value)
        }
    }

</script>

<template>
    <div>
        <universalItemsLayout>
            Google AI APIKEY:<input type="text" :placeholder="localGoogleAIAPIKEY" v-model="userAIAPIKEY" @keydown.enter="modifyUserPreference" class="ml-2 w-40 pl-2 overflow-hidden focus:outline-none rounded-md" />
        </universalItemsLayout>
    </div>
</template>