import { useRouter } from "next/router";
import { trpc } from "../../utils/trpc";
import Router from "next/router";

export default function Account() {
    const router = useRouter();
    const { query: { user } } = router;
    const props = { user };

    const userQuery = trpc.getUser.useQuery({ username: String(props.user) });
    const loggedInUser = userQuery?.data?.newUser[0];
    const dateParts = String(new Date(String(loggedInUser?.createdAt))).split(' ')

    const userMutation = trpc.deleteUser.useMutation();

    const deleteUser = () => {
        userMutation.mutate({ username: String(props.user) });
        handleNavigate();
    }

    const handleNavigate = () => Router.push({ pathname: "/" });

    if (!userQuery) <div className="text-3xl">Loading...</div>;

    return (
        <div className='h-screen w-screen flex flex-col justify-center items-center text-white bg-gray-800 gap-y-2'>
            <h1 className="text-3xl mb-2">Account Info</h1>
            <p>Username: {loggedInUser?.username}</p>
            <p>Joined: {dateParts[1]} {dateParts[3]}</p>
            <button
                className='text-center mt-4 text-red-500 border border-red-500 rounded p-2.5 hover:bg-red-500 hover:text-white'
                onClick={deleteUser}
                >
                    Delete Account
            </button>
        </div>
    )
}