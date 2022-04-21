import {defineNuxtConfig} from 'nuxt'

export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        configPath: '~/config/tailwind.config.js',
        exposeConfig: true,
        config: {},
        injectPosition: 0,
        viewer: true,
    },
    plugins: [

    ],
})

