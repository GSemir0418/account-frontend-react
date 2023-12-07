import type React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

interface Props {}
export const RedirectRoute: React.FC<Props> = () => {
  const nav = useNavigate()
  useEffect(() => {
    nav('/')
  }, [])
  return null
}
