import axios from 'axios'

axios.defaults.baseURL = isDev ? '/' : 'http://10.30.20.42/api/v1'
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.timeout = 10000

export const ajax = {
  get: (url: string) => axios.get(url),
  post: () => {},
  patch: () => {},
  delete: () => {},
}
