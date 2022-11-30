import { useRouter } from "next/router";
import { trpc } from "../../utils/trpc";
import IngredientList from "../../components/ingredients/IngredientList";
import Header from "../../components/Header";
import CupboardContents from "../../components/ingredients/CupboardContents";

export default function Cupboard() {
    const router = useRouter();
    const { query: { user } } = router;
    const props = { user };

    const userQuery = trpc.getUser.useQuery({ username: String(props.user) });
    const loggedInUser = userQuery?.data?.newUser[0];

    return (
        <div className='h-screen w-screen flex flex-col justify-center items-center text-white bg-gray-800 gap-y-2'>
            <Header loggedInUser={loggedInUser} />
            <h1 className="text-3xl mb-4">My Cupboard</h1>
            <CupboardContents loggedInUser={loggedInUser} />
            <IngredientList loggedInUser={loggedInUser} />
        </div>
    )
}