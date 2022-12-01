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
        <div className='bg-gray-800 h-screen flex flex-col items-center'>
            <Header loggedInUser={loggedInUser} />
            <h1 className="text-3xl text-center pb-4 pt-2 border-0 border-b-2 border-gray-600 text-white w-full">
                Cupboard
            </h1>
            <CupboardContents loggedInUser={loggedInUser} />
            <IngredientList loggedInUser={loggedInUser} />
        </div>
    )
}