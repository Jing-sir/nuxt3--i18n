<script setup lang="ts">
import zhCN from 'element-plus/dist/locale/zh-cn.mjs';
import enUS from 'element-plus/dist/locale/en.mjs';
import arEG from 'element-plus/dist/locale/ar.mjs';
import ruRU from 'element-plus/dist/locale/ru.mjs';

// 获取语言key
const getLangKey = computed(() => useNuxtApp().$i18n.locale.value);

// 静态刷新dom
const renderKey = computed(() => `app-key-${getLangKey.value}-${Math.random()}`);

const currLang = computed(() => {
    const lang = useNuxtApp().$i18n.locale.value;
    const langMap: Record<string, typeof zhCN | typeof enUS | typeof arEG | typeof ruRU> = {
        'zh-CN': zhCN,
        'en-US': enUS,
        'ar-EG': arEG,
        'ru-RU': ruRU, // 如果需要添加更多语言，请在这里继续添加
    };
    return langMap[lang] || enUS; // 如果未匹配到相应语言，则默认返回 enUS
});
</script>

<template>
    <NuxtLayout>
        <el-config-provider :locale="currLang">
            <NuxtPage :key="renderKey" />
        </el-config-provider>
    </NuxtLayout>
</template>
