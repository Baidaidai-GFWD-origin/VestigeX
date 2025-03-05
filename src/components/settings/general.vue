<script setup>
    import { computed,ref } from 'vue';
    import universalItemsLayout from './template/universalItemsLayout.vue'
    import { useAuthorshipInfo, useUserPreference } from '@/stores/index.js'

    const authorshipInfo = useAuthorshipInfo()
    const userPreference = useUserPreference()
    let authorName = computed(()=>authorshipInfo.authorName)
    let authorLink = computed(()=>authorshipInfo.authorURL)

    // "location": "http://about-me/${nickName}/location",
    // "twelveHourFormat": "true",
    // "searchEngine": "Bing"
    let GMT = ref()
    let TwelveHourFormat = ref()

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
            searchEngine:
            <select disabled class=" cursor-not-allowed">
                <option disabled>Please Select</option>
                <option value="bing">Bing</option>
                <option value="gogole">Google</option>
                <option value="duckduckgo">DuckDuckGO</option>
                <option value="baidu">BaiDu</option>
            </select>
        </universalItemsLayout>
        <div class=" absolute bottom-4 right-8 h-10 p-5 flex justify-center items-center bg-slate-500 rounded-3xl">
            <p class=" cursor-pointer">Background Photo by <a :href="authorLink" class="underline">{{ authorName }}</a> on <a href="https://unsplash.com/?utm_source=vestigeX&utm_medium=referral" class=" underline">Unsplash</a></p>
        </div>
    </div>
</template>