"use client";
import React, { useEffect, useState } from "react";
import { getProviders, signIn } from "next-auth/react";
import Header from "@/app/components/Header";

function SignIn() {
  const [providers, setProviders] = useState({});
  useEffect(() => {
    async function getProv() {

      const providers = await getProviders();
      setProviders(providers);
    }
    getProv();
  }, []);
  
  return (
    <div>
      <Header/>
      <div
        className="flex items-center justify-evenly flex-col min-h-[85vh]
      py-2 px-14 text-center"
      >
        
       
        <div className="">
          {providers.length !== -1 && Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="bg-blue-500 p-3 text-white rounded-lg"
                onClick={() => signIn(provider.id, { callbackUrl: "/" })}
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SignIn;