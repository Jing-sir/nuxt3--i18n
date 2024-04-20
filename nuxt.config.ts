import path from 'path';
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'

export default defineNuxtConfig({
    devtools: { enabled: true },
    app: {
        baseURL: process.env.VITE_PUBLIC_PATH,
    },
    srcDir: 'src/',
    alias: {
        '@': path.resolve(__dirname, 'src'),
    },
    modules: ['@element-plus/nuxt', '@nuxtjs/i18n',],
    i18n: {
        vueI18n: './i18n.config.ts' // if you are using custom path, default
    },
    typescript: {
        typeCheck: false,
    },
    vite: {
        plugins: [
            VueI18nPlugin({
                include: [path.resolve(__dirname, './src/lang/**')],
            }),
        ],
    },
});
