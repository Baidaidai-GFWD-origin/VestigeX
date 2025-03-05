import { defineStore } from 'pinia'
import { computed } from 'vue'

// 你可以任意命名 `defineStore()` 的返回值，但最好使用 store 的名字，同时以 `use` 开头且以 `Store` 结尾。
// (比如 `useUserStore`，`useCartStore`，`useProductStore`)
// 第一个参数是你的应用中 Store 的唯一 ID。

const useAuthorshipInfo = defineStore('authorshipInfo',{
    state(){
        return {
            authorName:'1111',
            authorURL:'2222'
        }
    },
    actions:{
        /**
         * @param {String} type 修改类型索引
         * @param {String} value 修改类型的值
         * @returns Undefined
         *
         * @example
         * modifyAuthorshipInfo('authorName', 'New Name') // 设置 authorName 为 'New Name'
         * modifyAuthorshipInfo('authorURL', 'New URL') // 设置 authorURL 为 'New URL'
        */
        modifyAuthorshipInfo(type,value){
            switch (type) {
                case 'authorName':
                    this.authorName = value
                    console.log(`name:${this.authorName}`)
                    break;
                case 'authorURL':
                    this.authorURL = value
                    console.log(`URL:${this.authorURL}`)
                    break;
            }
        }
    }
})

// ... existing code ...
const useUserPreference = defineStore('userPreference', {
    state(){
        return {
            general:{
                SearchEngine:null
            },
            background:{
                AutoBackgroundPic:localStorage.getItem('backgroundAutoBackgroundPic') ? JSON.parse(localStorage.getItem('backgroundAutoBackgroundPic')).value : false ,
                StaticBackgroudPic:"",
                GaussianBlur:localStorage.getItem('backgroundGaussianBlur') ? JSON.parse(localStorage.getItem('backgroundGaussianBlur')).value : 0
            },
            aI:{
                googleAIAPIKEY:localStorage.getItem('aIGoogleAIAPIKEY') ? JSON.parse(localStorage.getItem('aIGoogleAIAPIKEY')).value : 'xxxxxx-xxxxxx-xxxxxx-xxxxxx' ,
            }
        }
    },
    actions:{
        /**
         * 
         * @param {String} type 
         * @param {String} property 
         * @param {String} value 
         */
        modifyUserPreference(type,property,value){
            // console.log(`pinia${property}`)
            localStorage.setItem(`${type}${property}`,JSON.stringify({ "value": value }))
            // let originGeneral = localStorage.getItem('general')
            // let processedGeneral = JSON.parse(originGeneral)
            // console.log(processedGeneral.twelveHourFormat)
        }
    },
})
// ... existing code ...

const useGeminiResault = defineStore('geminiResault',{
    state(){
        return {
            geminiResault:"1111"
        }
    },
    actions:{
        modifyGeminiResault(geminiAnswer){
            this.geminiResault = geminiAnswer
            console.log("pinia: updated success!")
            console.log(this.geminiResault)
        }
    }
})

const useUniversalFrameworkVisibility = defineStore('universalFrameworkVisibility',{
    state(){
        return {
            settingsVisibility:false,
            geminiVisibility:false,
        }
    },
    actions:{
        /**
         * @param {String} type 需要控制可见度的索引 
         * @param {boolean} bool 需要控制可见度的布尔值
         * @returns Undefined
         * 
         * @example
         * changeVisibilities('settingsVisibility', true) // 设置 settingsVisibility 为 true
         * changeVisibilities('geminiVisibility', false) // 设置 geminiVisibility 为 false
         */
        changeVisibilities(type,bool){
            console.log(`intered`)
            switch (type) {
                case 'settingsVisibility':
                    this.settingsVisibility = bool
                    console.log('setting_pinia:'+bool)
                    console.log(typeof bool)
                    break;
                case 'geminiVisibility':
                    this.geminiVisibility = bool
                    console.log('gemini_pinia:'+bool)
                    console.log(typeof bool)
                    break;
            }
        }
    }
})


export { useUserPreference, useGeminiResault, useUniversalFrameworkVisibility, useAuthorshipInfo } 
