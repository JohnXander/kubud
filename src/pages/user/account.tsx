import { useRouter } from "next/router";
import { trpc } from "../../utils/trpc";
import Router from "next/router";
import Header from "../../components/Header";

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
        <div className='bg-gray-800 h-screen flex flex-col items-center text-white'>
            <Header loggedInUser={loggedInUser} />
            <h1 className="text-3xl text-center pb-4 pt-2 border-0 border-b-2 border-gray-600 text-white w-full">
                Account Information
            </h1>
            <div className="flex justify-between w-full p-4 md:w-3/6 border-0 border-b-2 border-gray-600">
                <p>Username</p>
                <p>{loggedInUser?.username}</p>
            </div>
            <div className="flex justify-between w-full p-4 md:w-3/6 border-0 border-b-2 border-gray-600">
                <p>Joined</p>
                <p>{dateParts[1]} {dateParts[3]}</p>
            </div>
            <div className="flex justify-between w-full px-4 md:w-3/6 ">
                <button
                    className='text-center mt-4 text-red-500 border border-red-500 rounded p-2.5 hover:bg-red-500 hover:text-white'
                    onClick={() => Router.push({ pathname: "/" })}
                    >
                        Delete Account
                </button>
                <button
                    className='text-center mt-4 text-blue-500 border border-blue-500 rounded p-2.5 hover:bg-blue-500 hover:text-white'
                    onClick={deleteUser}
                    >
                        Sign Out
                </button>
            </div>
        </div>
    )
}