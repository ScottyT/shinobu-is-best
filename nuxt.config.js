import { defineNuxtConfig } from 'nuxt3'
import { resolve } from 'pathe'

export default defineNuxtConfig({
    alias: {
        'images': resolve(__dirname, './assets/images'),
        'style': resolve(__dirname, '@/assets/style'),
        'data': resolve(__dirname, './assets/other/data')
    },
    css: ['@/assets/style/index.css'],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    sourceMap:true,
                    additionalData: `@import "@/assets/style/global.scss";`
                }
            }
        }
    }
})
