import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import legacy from '@vitejs/plugin-legacy';
import UnoCss from 'unocss/vite';
import { globbySync } from 'globby';
import svgLoader from 'vite-svg-loader';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import path from 'path';
import autoprefixer from 'autoprefixer';
import postcsspxtoviewport from 'postcss-px-to-viewport-8-plugin';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, 'index.html'),
        policy: path.resolve(__dirname, 'policy.html'),
        service: path.resolve(__dirname, 'service.html'),
        delete: path.resolve(__dirname, 'delete.html')
      }
    }
  },
  resolve: {
    alias: {
      '@lib': path.resolve('lib')
    },
    extensions: ['.js', '.vue', '.json', '.ts']
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "sass:map";
          @use "sass:math";
          @use "./lib/i18n/_lang.scss";
          @import "./lib/style/_mixin.scss";
        `
      }
    },
    postcss: {
      plugins: [
        autoprefixer(),
        postcsspxtoviewport({
          unitToConvert: 'px', // 要转化的单位
          viewportWidth: 375, // UI设计稿的宽度
          unitPrecision: 5, // 转换后的精度，即小数点位数
          propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
          viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
          fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
          selectorBlackList: [], // 指定不转换为视窗单位的类名，
          minPixelValue: 2, // 默认值1，小于或等于1px则不进行转换
          mediaQuery: false, // 是否在媒体查询的css代码中也进行转换，默认false
          replace: true, // 是否转换后直接更换属性值
          exclude: [/node_modules/, /css\/\D*\.css/, /home\/main\.scss/],
          landscape: false // 是否处理横屏情况
        })
      ]
    }
  },
  plugins: [
    UnoCss(),
    vue(),
    visualizer({ open: true }),
    svgLoader(),
    {
      name: 'freechat-server',
      configureServer(server) {
        return () => {
          server.middlewares.use((req, res, next) => {
            let referer = req.headers['referer'];

            if (referer && referer.includes('/freechat') && !req.url?.includes('freechat')) {
              let url = '/home/freechat' + req.originalUrl;
              res.writeHead(301, { Location: url });
              res.end();
            }
            next();
          });
        };
      }
    },
    AutoImport({
      dirs: [path.resolve('node_modules', 'element-plus/theme-chalk')],
      imports: ['vue', 'vue-router'],
      resolvers: [ElementPlusResolver()],
      dts: true
    }),
    Components({
      resolvers: [ElementPlusResolver()],
      globs: ['lib/components/**/*.vue', 'svg/**/icon-*.svg'],
      dts: true
    }),
    legacy()
  ],
  server: {
    port: 5000,
    hmr: true,
    proxy: {
      '/api': {
        target: 'http://api.sandbox.ringo.cool',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '/api'),
        bypass(req, res, options: any) {
          const proxyURL = options.target + options.rewrite(req.url);
          req.headers['x-req-proxyURL'] = proxyURL; // 设置未生效
          res.setHeader('x-req-proxyURL', proxyURL);
        }
      }
    }
  }
});
