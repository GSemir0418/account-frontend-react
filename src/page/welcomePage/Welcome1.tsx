import React from 'react'
import { NavLink } from 'react-router-dom'

interface Props {}
export const Welcome1: React.FC<Props> = () => {
  return (
    <div>
      Welcome1
      <NavLink to="/welcome/2">Next</NavLink>
    </div>
  )
}
