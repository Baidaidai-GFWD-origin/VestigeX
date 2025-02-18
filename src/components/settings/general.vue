<script setup>
    import universalItemsLayout from './template/universalItemsLayout.vue'

    // "location": "http://about-me/${nickName}/location",
    // "twelveHourFormat": "true",
    // "searchEngine": "Bing"
</script>

<template>
    <div>
        <universalItemsLayout>
            GMT<input type="text   ">
        </universalItemsLayout>
        <universalItemsLayout>
            twelveHourFormat:<input type="checkbox">
        </universalItemsLayout>
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
    </div>
</template>