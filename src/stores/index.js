import { defineStore } from 'pinia'

// 你可以任意命名 `defineStore()` 的返回值，但最好使用 store 的名字，同时以 `use` 开头且以 `Store` 结尾。
// (比如 `useUserStore`，`useCartStore`，`useProductStore`)
// 第一个参数是你的应用中 Store 的唯一 ID。

const useSettingsVisibility = defineStore('settingsVisibility', {
    state(){
        return {
            isVisible:false
        }
    },
    actions:{
        /**
         * @param { boolean } bool
         */
        changeSettingsVisibility(bool){
            if(bool == true){
                this.isVisible = true
            }else if(bool == false){
                this.isVisible = false
            }

        }
    }
})
const useGeminiVisibility = defineStore('geminiVisibility', {
    state(){
        return {
            isVisible:false
        }
    },
    actions:{
        /**
         * @param { boolean } bool
         */
        changeGeminiVisibility(bool){
            if(bool == true){
                this.isVisible = true
            }else if(bool == false){
                this.isVisible = false
            }

        }
    }
})

const useUserPreference = defineStore('userPreference', {
    state(){

    }
})

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

export {useSettingsVisibility,useGeminiVisibility, useUserPreference, useGeminiResault } 