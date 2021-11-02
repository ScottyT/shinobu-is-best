/* import { defineNuxtPlugin, useState } from "nuxt3"; */
import shino from '@/composables/useShinobu'
export default ({app}, inject) => {
    app.setup = () => {
        provide(shino, 'oshino')
    }
    inject('headline', msg => `Breaking news!! Shinobu ${msg}`)
    inject('oshino', shino)
}

/* export default defineNuxtPlugin((nuxt) => {
    nuxt.provide('headline', msg => `Breaking news!! Shinobu ${msg}`)
    nuxt.provide('shinobuMsg', msg => `Shinobu is ${msg}`)
    nuxt.provide('oshino', shino)
}) */