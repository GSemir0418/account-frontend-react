import type { ReactNode } from 'react'
import React, { useRef } from 'react'
import { useLocation, useOutlet } from 'react-router-dom'
import { animated, useTransition } from '@react-spring/web'

interface Props {}
export const WelcomeLayout: React.FC<Props> = () => {
  const outletCache = useRef<Record<string, ReactNode>>({})
  const { pathname } = useLocation()
  // 缓存 outlet 组件
  const outlet = useOutlet()
  outletCache.current[pathname] = outlet
  const transitions = useTransition(pathname, {
    // 进入态(welcome1没有进入态)
    from: {
      transform: pathname === '/welcome/1' ? 'translateX(0%)' : 'translateX(100%)',
    },
    // 稳定态
    enter: { transform: 'translateX(0%)' },
    // 离开态
    leave: { transform: 'translateX(-100%)' },
    config: { duration: 500 },
  })
  return transitions((style, pathname) => {
    return (
      <animated.div style={style} key={pathname}>
        {outletCache.current[pathname]}
      </animated.div>
    )
  })
}
