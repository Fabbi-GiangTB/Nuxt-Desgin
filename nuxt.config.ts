import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss','@nuxtjs/color-mode'],
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        configPath: '~/config/tailwind.config.js',
        exposeConfig: true,
        config: {},
        injectPosition: 0,
        viewer: true,
    }
})
