import { useState } from "react";
import { trpc } from "../../utils/trpc"
import Router from "next/router";

export default function Register() {
    const [user, setUser] = useState({ username: '', email: '', password: '' });
    const userMutation = trpc.createUser.useMutation();

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setUser(prevUser => {
            return { ...prevUser, [name]: value };
        })
    }

    const createNewUser = () => {
        const { username, email, password } = user;
        userMutation.mutate({ username, email, password });
        handleNavigate(username)
    }

    const handleNavigate = (user: any) => {
        Router.push({ pathname: "/user/cupboard", query: { user } });
    }

    if (!createNewUser) <div className="text-3xl">Loading...</div>;

    return (
        <div className='h-screen w-screen flex flex-col justify-center items-center text-white bg-gray-800'>
            <h1 className="text-3xl mb-4">Create an account</h1>
            <div className="flex flex-col justify-center gap-y-4">
                <input
                    type="text"
                    placeholder="Username"
                    className="p-2 border rounded bg-gray-800"
                    name="username"
                    onChange={handleChange}
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="p-2 border rounded bg-gray-800"
                    name="email"
                    onChange={handleChange}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="p-2 border rounded bg-gray-800"
                    name="password"
                    onChange={handleChange}
                />
                <button
                    className='text-center text-green-500 border border-green-500 rounded p-2.5 hover:bg-green-500 hover:text-white'
                    onClick={() => createNewUser()}
                    >
                        Sign Up
                </button>
            </div>
        </div>
    )
}