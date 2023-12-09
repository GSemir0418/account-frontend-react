import type React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

interface Props {}
export const Root: React.FC<Props> = () => {
  const nav = useNavigate()
  useEffect(() => {
    nav('/welcome/1')
  }, [])
  return null
}
