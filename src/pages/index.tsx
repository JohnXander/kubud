import Head from "next/head";
import Router from "next/router";
import { useState } from "react";

export default function IndexPage() {
  const handleNavigate = () => Router.push({ pathname: "/login/register" });

  const [user, setUser] = useState({ username: '', password: '' });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUser(prevUser => {
        return { ...prevUser, [name]: value };
    })
  }

  const loginUser = () => console.log('Under construction...')
  
  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center text-white bg-gray-800'>
      <Head>
        <title>Kubud</title>
      </Head>
      <h1 className="text-7xl">kubud</h1>
      <div className="flex flex-col justify-center gap-y-2 my-8">
        <input
          type="text"
          placeholder="Username"
          className="p-2 border rounded bg-gray-800"
          name="username"
          disabled
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 border rounded bg-gray-800"
          name="password"
          disabled
          onChange={handleChange}
        />
        <button
          className='text-center text-blue-500 border border-blue-500 rounded p-2.5 hover:bg-blue-500 hover:text-white'
          onClick={loginUser}
          >
            Login
        </button>
      </div>
      <div className="flex flex-col justify-center gap-y-2">
        <p className="text-gray-400">Don&apos;t have an account?</p>
        <button
            className='text-center text-green-500 border border-green-500 rounded p-2.5 hover:bg-green-500 hover:text-white'
            onClick={handleNavigate}
            >
              Sign Up
        </button>
      </div>
    </div>
  );
}