import { defineConfig } from 'dumi';

export default defineConfig({
  base: '/FED/',
  publicPath: '/FED/',
  exportStatic: {},
  title: 'FED Repository',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  navs: [
    null,
    { title: '设计规范', path: 'https://bici-fed.github.io/bici-design' },
    { title: '组件库', path: 'https://bici-fed.github.io/bici-design' },
    { title: 'Github', path: 'https://github.com/bici-fed' },
  ],
});
