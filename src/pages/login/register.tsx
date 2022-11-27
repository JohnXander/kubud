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
            <div className="flex flex-col gap-y-2.5">
                <h1 className="text-center text-3xl pb-4">Sign Up</h1>
                <label>Username</label>
                <input
                    className="bg-gray-800 border rounded p-2.5"
                    type="text"
                    onChange={handleChange}
                    name='username'
                    required
                />
                <label>Email</label>
                <input
                    className="bg-gray-800 border rounded p-2.5"
                    type="email"
                    onChange={handleChange}
                    name='email'
                    required
                />
                <label>Password</label>
                <input
                    className="bg-gray-800 border rounded p-2.5"
                    type="password"
                    onChange={handleChange}
                    name='password'
                    required
                />
                <span className="px-2"></span>
                <button
                    className='text-center text-white border rounded p-2.5 hover:bg-white hover:text-gray-800'
                    onClick={() => createNewUser()}
                    >
                        Create New User
                </button>
            </div>
        </div>
    )
}