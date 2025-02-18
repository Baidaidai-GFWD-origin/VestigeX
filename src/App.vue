<script setup>
    import { unSplashURL } from "./scripts/unSplash/getUnSplashImg.js"
    import { useSettingsVisibility, useGeminiVisibility, useGeminiResault } from './stores/index.js'
    import { rebuildResault } from './scripts/googleGemini/googleGeminiStudio.js'

    import preferencesSettingPanel from './components/preferencesSettingPanel.vue'
    import conversationWithGemini from "./components/Artificial_Intelligent/conversationWithGemini.vue"

    import settingLOGO from './assets/icons/_settingLOGO.vue'
    import cssLoaders from './assets/icons/_cssLoaders.vue'

    import { onBeforeMount,ref, onUpdated, computed, readonly, onMounted,provide } from 'vue'



    let _settingsVisibilityStore = useSettingsVisibility()
    let _geminiVisibility = useGeminiVisibility()
    let _geminiResault = useGeminiResault()

    let settingsVisibilityStatus = computed(()=>_settingsVisibilityStore.isVisible)
    let geminiVisibilityStatus = computed(()=>_geminiVisibility.isVisible)

    let changeSettingsVisibility = (numb) => {
        _settingsVisibilityStore.changeSettingsVisibility(numb)
    }
    let changeGeminiVisibility = () => {
        _geminiVisibility.changeGeminiVisibility(true)
    }
    let URL = unSplashURL

    let img = ref(URL) 

    let blurLevel = ref(0)

    const _originBlurLevel = readonly(blurLevel.value);

    let blurNum = computed(() => `${blurLevel.value}px`)

    let userInput = ref('')

    let bingURL = "https://www.bing.com/search?q="

    let userWillGoURL = computed(()=>`${ bingURL }${ userInput.value }`)

    function goGoGo(){
        window.open(userWillGoURL.value)
    }

    function changeBackgroundBlur(numb){
        if(numb == 1){
            blurLevel.value = 7
        }else{
            blurLevel.value = _originBlurLevel.value
        }
    }
    function modifyGeminiResault(geminiResault){
        _geminiResault.modifyGeminiResault(geminiResault)
        console.log('app.vue sent')
    }
    async function runAI() {
        console.log(userInput.value)
        changeGeminiVisibility()
        modifyGeminiResault('Gemini is Thinking……')
        const newResault = await rebuildResault(userInput.value)
        // window.alert(newResault)
        userInput.value = ''
        modifyGeminiResault(newResault)
    }

</script>

<template>
    <Transition>
        <preferencesSettingPanel v-if="settingsVisibilityStatus"/>
    </Transition>
    <Transition>
        <conversationWithGemini v-if="geminiVisibilityStatus"/>
    </Transition>
    
    <div id="main_container" @click="changeSettingsVisibility(false)" class=" flex justify-center items-center bg-center h-screen w-screen bg-no-repeat bg-cover" :style="`background-image: url(${img});`">
        <div id="element_container_with_bg_blur" class="absolute flex justify-center h-screen w-screen flex-col ease-in-out duration-500" :style="`backdrop-filter: blur(${blurNum})`">
            <div class=" -translate-y-10 flex justify-center items-center  mb-20 text-violet-400 drop-shadow-2xl hover:text-violet-300 hover:-skew-x-6 transition ease-in-out text-7xl font-bold cursor-pointer ">
                <p>VestigeX</p>
            </div>
        </div>
        <input type="text" class=" fixed backdrop-blur-sm bg-[rgba(255,255,255,0.2)] translate-y-10 transition-all ease-in-out font-medium text-lg text-white placeholder-[rgba(199,186,251,0.99)] p-2  pl-4 w-80 h-14 rounded-2xl overflow-hidden focus:outline-none focus:w-96 " @focus="changeBackgroundBlur(1)" @blur="changeBackgroundBlur(0)" @keyup.enter="goGoGo" v-model="userInput" placeholder="🔍 Searching What is New">
        <div class=" fixed bottom-10 right-10 text-lg cursor-pointer" @click.self="runAI" @focus="changeBackgroundBlur(1)">💡</div>
    </div>
    <settingLOGO class=" fixed bottom-10 left-10" @click="changeSettingsVisibility(true)"></settingLOGO>
</template>
<style lang="css" scoped>
    /* 下面我们会解释这些 class 是做什么的 */
    .v-enter-active,
    .v-leave-active {
        transition: opacity 0.2s ease-in-out, filter 0.2s ease-in-out;
    }

    .v-enter-from,
    .v-leave-to {
        opacity: 0;
        filter: blur(10px);
    }

    .v-enter-to,
    .v-leave-from {
        opacity: 1;
        filter: blur(0);
    }
</style>