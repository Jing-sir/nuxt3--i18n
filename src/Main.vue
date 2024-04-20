<script setup lang="ts">
const value1 = ref();

const { t, setLocale } = useI18n();

const onLange = (val: string): void => {
    setLocale(val);
};

</script>
<i18n>
zh-CN:
  text: '测试'
en-US:
  text: 'test'
</i18n>

<template>
    <div>
        <div @click.stop="onLange('zh-CN')">
            中文
        </div>
        <div @click.stop="onLange('en-US')">
            英文
        </div>
        <div @click.stop="onLange('ar-EG')">
            阿拉伯
        </div>
        主页
        {{ $t('xhrError') }}
        {{ t('text') }}
    </div>
</template>

<style scoped>

</style>
