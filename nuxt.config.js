import { defineNuxtConfig } from 'nuxt3'
import { resolve } from 'pathe'

export default defineNuxtConfig({
    components: true,
    ssr: true,
    target: 'static',
    alias: {
        'images': resolve(__dirname, './assets/images'),
        'style': resolve(__dirname, '@/assets/style'),
        'data': resolve(__dirname, './assets/other/data')
    },
    buildModules: [
        '@nuxtjs/pwa'
    ],
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
    },
    pwa: {
        icon: false,
        manifest: {
            name: "Shinobu is Best",
            short_name: "Shinobu",
            lang: "en"
        },
        meta: {
            viewport: 'width=device-width, initial-scale=1',
            name: "Shinobu Best Girl"
        }
    },
    generate: {
        fallback: '404.html'
    }
    /* serverMiddleware: [
        { path: '/', handler: '~/functions/index.js' }
    ] */
})
