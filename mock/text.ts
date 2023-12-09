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
