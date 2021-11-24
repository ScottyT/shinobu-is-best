import { defineNuxtConfig } from '@nuxt/bridge'
import { resolve } from 'pathe'

export default {
    components: [
        '~/components'
    ],
    target: 'static',
    buildModules: [
        '@nuxtjs/pwa',
        '@nuxt/bridge'
    ],
    head: {
        titleTemplate: '%s - Shinobu is Best',
        meta: [
            {
                charset: 'utf-8',
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
        ],
        link: [
            {
                rel: 'icon',
                type: 'image/png',
                href: '/icon.png',
            },
        ]
    },
    css: ['@/assets/style/index.css', '@/assets/style/global.scss', '@/assets/style/variables.scss'],
    plugins: [
        '~/plugins/provide.js'
    ],
    pwa: {
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
    /* serverMiddleware: [
        { path: '/', handler: '~/functions/index.js' }
    ] */
}
