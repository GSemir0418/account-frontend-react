import React from 'react'
import { FaCalculator } from 'react-icons/fa6'

interface Props {}
export const LoginPage: React.FC<Props> = () => {
  return (
    <div className="h-full w-full border-4 border-[#3579F6] flex flex-col">
      <header className="h-20 flex flex-row justify-center items-center">
        <FaCalculator size="1.5rem" />
        <span className="text-xl pl-2 uppercase font-bold tracking-widest">Account</span>
      </header>
      <main className="flex-1 border-[6px] border-[#3579F6] flex justify-center items-center flex-col">
        <div className="h-20 text-xl uppercase flex items-center">Login</div>
        <form className="flex-1 w-full p-4">
          <div className="p-2 flex flex-row h-14">
            <span className="pr-2 uppercase w-16 shrink-0 leading-10">Email</span>
            <input type="text" className="border-2 flex-1" />
          </div>
          <div className="p-2 flex flex-row h-14">
            <span className="uppercase w-16 shrink-0 leading-10">Code</span>
            <input type="text" className=" border-2 flex-1 w-full" />
            <button className="ml-2 border-2 uppercase shrink-0 w-14">send</button>
          </div>
          <div className="mt-6">
            <button type="submit" className="border-2 h-12 w-full uppercase">submit</button>
          </div>
        </form>
      </main>
    </div>
  )
}
