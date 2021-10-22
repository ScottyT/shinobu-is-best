import { defineNuxtPlugin, useState } from "#app";
import shino from '@/composables/useShinobu'
export default defineNuxtPlugin((nuxt) => {
    nuxt.provide('headline', msg => `Breaking news!! Shinobu ${msg}`)
    nuxt.provide('shinobuMsg', msg => `Shinobu is ${msg}`)
    nuxt.provide('oshino', shino)
})