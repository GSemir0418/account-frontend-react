import React from 'react'
import { Outlet } from 'react-router-dom'

interface Props {}
export const WelcomeLayout: React.FC<Props> = () => {
  return <div><Outlet /></div>
}
