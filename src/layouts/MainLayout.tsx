import React from 'react'
import { Outlet } from 'react-router-dom'

interface Props {}
export const MainLayout: React.FC<Props> = () => {
  return <div className=" flex items-center justify-center w-screen h-screen"><Outlet /></div>
}
