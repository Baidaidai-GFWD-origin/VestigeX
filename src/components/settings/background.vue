<script setup>

    import {computed, ref} from 'vue'
    import universalItemsLayout from './template/universalItemsLayout.vue'
    import { useUserPreference } from '@/stores/index.js'

    let autoPic = ref()
    let backgroundPic = ref()
    let blurLevel = ref(0)
    const userPreference = useUserPreference()

    function modifyUserPreference(event,type,property,value){
        // console.log(`general.vue: out_point`)
        if(event.key == "Enter" && event.isComposing == false){
            // console.log(`general.vue: in_ponit`)
            userPreference.modifyUserPreference(type,property,value)
            console.log(`general.vue: modified success`)
            // console.log(twelveHourFormat.value)
        }
    }


</script>

<template>
    <div>
        <universalItemsLayout>
            autoBackgroundPic: <input :checked="userPreference.background.AutoBackgroundPic" @keydown.enter="modifyUserPreference($event,'background','AutoBackgroundPic',autoPic)" type="checkbox" class=" ml-2 appearance-auto" v-model="autoPic"/>
        </universalItemsLayout>
        <universalItemsLayout>
            staticBackgroudPic:<input  disabled type="file" class="w-10 h-10" accept="image/*"/>
        </universalItemsLayout>
        <universalItemsLayout>
            gaussianBlur:<input type="range" class=" ml-2 w-28 mr-2" max="10" min="0" step="0.5" @keydown.enter="modifyUserPreference($event,'background','GaussianBlur',blurLevel)" v-model="blurLevel"/> 
            <input type="number" v-model="blurLevel" max="10" min="0" step="0.5" @keydown.enter="modifyUserPreference($event,'background','GaussianBlur',blurLevel)" class=" pl-2 w-12 rounded-lg appearance-none focus:outline-none">
        </universalItemsLayout>
    </div>
</template>