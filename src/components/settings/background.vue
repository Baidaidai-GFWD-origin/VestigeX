<script setup>

    import {ref,onUpdated} from 'vue'
    import universalItemsLayout from './template/universalItemsLayout.vue'

    let autoPic = ref()
    let backgroundPic = ref()
    let blurLevel = ref()

    onUpdated(()=>{
        console.log(autoPic)
        console.log(blurLevel)
    })

    function verifyNumber(){
        console.log(blurLevel)
        if(type(blurLevel) !== 'number'){
            window.alert('illegal character')
        }else if( blurLevel > 10 || blurLevel < 0){
        }
    }

</script>

<template>
    <div>
        <universalItemsLayout>
            autoBackgroundPic: <input type="checkbox" class=" ml-2 appearance-auto" v-model="autoPic"/>
        </universalItemsLayout>
        <universalItemsLayout>
            staticBackgroudPic:<input type="file" class="w-10 h-10" accept="image/*"/>
        </universalItemsLayout>
        <universalItemsLayout>
            gaussianBlur:<input type="range" class=" ml-2 w-28 mr-2" max="10" min="0" step="0.5" v-model="blurLevel"/> 
            <input type="number" v-model="blurLevel" max="10" min="0" step="0.5" class=" pl-2 w-12 rounded-lg appearance-none focus:outline-none">
        </universalItemsLayout>
    </div>
</template>