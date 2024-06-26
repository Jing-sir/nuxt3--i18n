module.exports = {
    output: { // 输出
        ext: '.yml', // 文件后缀
        dir: 'nuxt3_output', // 输出文件夹
    },
    input: { // 输入
        ext: '.vue', // 文件后缀
        dir: 'src', //输入文件夹
    },
    // isFlat: true, // 是否递归
    // sep = '.', // 片段分隔符
    extract: /<i18n>([\S\s]*)<\/i18n>/, // 需要提取的正则表达式
    // hasManifest, // 是否生成清单
    // rewrite, // 重写[exec Regex] 需要返回你处理的结果，这将覆盖程序处理结果
};
