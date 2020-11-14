# react-next-github
react-next-github

1. nextjs默认不支持css文件的import, 要将全局样式表添加到您的应用程序中，请在 pages/_app.js 文件中导入（import）CSS 文件。https://www.nextjs.cn/docs/basic-features/built-in-css-support;
   Next.js 通过 [name].module.css 文件命名约定来支持 CSS 模块 。

2. redis操作使用ioredis;

3. 关于antd的按需加载，在antd v4.0版本中JS 代码已默认支持基于 ES modules 的 tree shaking, 所以babel-plugin-import引入的意义只有css样式按需加载, 但nextjs默认不支持css文件的import, 只能在 pages/_app.js 文件中导入, 因此还是建议全局引入样式表。