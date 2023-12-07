import React from 'react'
import { NavLink } from 'react-router-dom'

interface Props {}
export const Welcome2: React.FC<Props> = () => {
  return (
    <div>
      Welcome2
      <NavLink to="/welcome/3">Next</NavLink>
    </div>
  )
}
