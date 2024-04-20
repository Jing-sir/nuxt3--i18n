// @ts-ignore
import enUS from '~/lang/en-US.json';
// @ts-ignore
import zhCN from '~/lang/zh-CN.json';

type MessageSchema = typeof enUS | typeof zhCN;

const messages: {
    [key in 'en-US' | 'zh-CN']: MessageSchema
} = { // 语言包
    'en-US': enUS,
    'zh-CN': zhCN,
};

const isProduction: boolean = process.env.NODE_ENV === 'production';

const localeDefault: string = 'zh-CN';

const languages = Object.keys(messages);

const fallbackLocale/* FallbackLocale */ = (languages.includes(localeDefault)
    ? localeDefault
    : languages.find((lan: string) => lan.indexOf(localeDefault.split('-')[0]) > -1) ?? localeDefault) as keyof typeof messages;

const i18n = defineI18nConfig(() => ({
    isGlobal: true,
    locale: fallbackLocale, // 设置语言环境
    fallbackLocale, // 如果未找到key,需要回溯到语言包的环境
    silentTranslationWarn: isProduction, // 警告信息
    messages, // 设置语言环境信息
    legacy: false // 是否不使用 composition-api 模式
}));

export default i18n;
