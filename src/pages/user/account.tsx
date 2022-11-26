import { useRouter } from "next/router"
import { useState } from "react";
import { trpc } from "../../utils/trpc"

export default function Account() {
    const router = useRouter();
    const { query: { user } } = router;
    const props = { user };

    const userQuery = trpc.getUser.useQuery({ username: String(props.user) });
    const loggedInUser = userQuery?.data?.newUser[0];

    const dateParts = String(new Date(String(loggedInUser?.createdAt))).split(' ')

    return (
        <div className='h-screen w-screen flex flex-col justify-center items-center text-white bg-gray-800 gap-y-2'>
            <h1 className="text-3xl pb-2">Account Info</h1>
            <p>Username: {loggedInUser?.username}</p>
            <p>Joined: {dateParts[1]} {dateParts[3]}</p>
        </div>
    )
}