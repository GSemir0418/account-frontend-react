> https://vitejs.dev/guide/
 
> https://github.com/antfu/eslint-config

> https://reactrouter.com/en/main
 
> https://tailwindcss.com/docs/guides/vite
 
> https://github.com/pmndrs/zustand

> https://github.com/axios/axios

> https://lesscss.org/

> https://react-icons.github.io/react-icons/

> useSWR

# axios 封装与 Mock 系统搭建

使用 vite 插件，利用 vite 开发服务器搭建 Mock 服务

> https://github.com/vbenjs/vite-plugin-mock

- 安装 `pnpm add mockjs` `pnpm add vite-plugin-mock -D`
- 使用
  - 创建 mock/text.ts
  ```typescript
  import type { MockMethod } from 'vite-plugin-mock'
  export default [
    {
      url: '/api/v1/me',
      method: 'get',
      response: () => {
        return {
          resource: {
            id: 1,
            email: '845@qq.com'
          }
        }
      }
    }
  ] as MockMethod[]
  ```
  - vite.config.ts 引入并配置
  ```typescript
  import { defineConfig } from 'vite'
  import react from '@vitejs/plugin-react'
  import { viteMockServe } from 'vite-plugin-mock'

  // https://vitejs.dev/config/
  export default defineConfig(({ command }) => ({
    plugins: [
      react(),
      viteMockServe(),
    ],
  }))
  ```

- vite 定义环境变量判断环境，axios 配置
- define: { isDev: command === 'serve' }
- define 定义的变量会被绑定到 window 作为全局变量，同时要告诉 ts 这个变量的类型
- 定义类型 global.d.ts let isDev: boolean
- axios 根据这个变量定义baseUrl axios.defaults.baseURL = isDev ? '/' : 'http://10.30.20.42/api/v1'

Form 表单组件封装

# useSWR 源码及原理

> https://swr.vercel.app/zh-CN/docs/getting-started
- 安装 `pnpm add swr`

zustand 源码及原理

尽量不要将子路由都放到 / 下面，不利于 router 的匹配机制。比如要处理重定向跳转时，容易进入死循环