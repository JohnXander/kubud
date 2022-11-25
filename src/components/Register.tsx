import { useState } from "react";
import { trpc } from "../utils/trpc"

export default function Register() {
    const [user, setUser] = useState({ username: '', password: '' });

    const userMutation = trpc.createUser.useMutation();

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setUser(prevUser => {
            return {
                ...prevUser,
                [name]: value
            }
        })
    }

    const createNewUser = () => {
        const { username, password } = user;
        userMutation.mutate({ username, password });
    }
  
    if (!createNewUser) <div>Loading...</div>;
    
    return (
        <div className="flex flex-col">
            <h1 className="text-center text-3xl pb-4">Sign Up</h1>
            <label>Username</label>
            <input
                className="bg-gray-800 border rounded p-2.5"
                type="text"
                onChange={handleChange}
                name='username'
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
    )
}