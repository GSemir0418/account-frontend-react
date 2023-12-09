import React from 'react'
import useSWR from 'swr'
import axios from 'axios'
import { useHomeStore } from '@/store/useHomeStore'

interface Props {}
export const HomePage: React.FC<Props> = () => {
  const { data, isLoading, error } = useSWR('/api/v1/me', async (path) => {
    return (await axios.get(path)).data
  })
  console.log(data, isLoading, error)
  const { count, setCount } = useHomeStore()
  return <div onClick={() => { setCount() }} className=" text-rose-400">{count}</div>
}
