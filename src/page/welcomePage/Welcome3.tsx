import React from 'react'
import { NavLink } from 'react-router-dom'

interface Props {}
export const Welcome3: React.FC<Props> = () => {
  return (
    <div>
      Welcome3
      <NavLink to="/welcome/4">Next</NavLink>
    </div>
  )
}
