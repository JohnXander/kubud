import { useState } from "react";
import { trpc } from "../utils/trpc"

export default function Register() {
    const [user, setUser] = useState('')
    const userMutation = trpc.createUser.useMutation();

    const handleChange = (e: any) => setUser(e.target.value)

    const createNewUser = () => {
        userMutation.mutate({ username: user, password: 'burger123' });
    }
  
    if (!createNewUser) <div>Loading...</div>;
    
    return (
        <div>
            <h1 className="text-center text-3xl pb-4">Sign Up</h1>
            <input className="bg-gray-800 border rounded p-2.5" type="text" onChange={handleChange} name='username' required />
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