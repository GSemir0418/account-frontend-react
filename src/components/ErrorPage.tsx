import React from 'react'
import { useRouteError } from 'react-router-dom'

interface Props {}
export const ErrorPage: React.FC<Props> = () => {
  // 使用 useRouteError 捕获路由错误
  const error: any = useRouteError()
  return (
    <div>
      <p>不好意思，出现了一个错误</p>
      <p>{error.statusText || error.message}</p>
    </div>
  )
}
