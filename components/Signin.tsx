"use server"
import React from 'react'
import Image from "next/image";
import { signIn } from "@/auth";

const Signin = () => {
  return (
    <div><form
    action={async () => {
      "use server"
      await signIn("reddit")
    }}
  >
    <div className="hidden lg:flex items-center border-gray-100 p-2 cursor-pointer space-x-2">
      <div className="relative h-5 w-5 flex-shrink-0">
        <Image
          src="https://links.papareact.com/23l"
          layout="fill"
          alt=""
          objectFit="contain"
        />
      </div>
      <button className="text-gray-400">Sign in</button>
    </div>
    </form></div>
  )
}

export default Signin