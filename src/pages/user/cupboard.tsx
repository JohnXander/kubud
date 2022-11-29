import { useRouter } from "next/router";
import { trpc } from "../../utils/trpc";
import Router from "next/router";
import IngredientList from "../../components/ingredients/IngredientList";
import Header from "../../components/Header";

export default function Cupboard() {
    const router = useRouter();
    const { query: { user } } = router;
    const props = { user };

    const userQuery = trpc.getUser.useQuery({ username: String(props.user) });
    const loggedInUser = userQuery?.data?.newUser[0];

    const ingredientQuery = trpc.getIngredients.useQuery({ userId: Number(loggedInUser?.id) });
    const cupboardIngredients = ingredientQuery.data?.ingredients;

    const userMutation = trpc.deleteIngredient.useMutation();

    const deleteIngredient = (ing: string) => {
        userMutation.mutate({ name: ing });
        Router.reload();
    }

    return (
        <div className='h-screen w-screen flex flex-col justify-center items-center text-white bg-gray-800 gap-y-2'>
            <Header loggedInUser={loggedInUser} />
            <h1 className="text-3xl mb-4">My Cupboard</h1>
            <div className="flex flex-wrap justify-center">
                {cupboardIngredients?.map(ing => {
                    return (
                        <div className="p-4 m-4 border rounded w-48 flex justify-between" key={ing.id}>
                            <p className="capitalize">{ing.name}</p>
                            <button className="text-red-500" onClick={() => deleteIngredient(ing.name)}>X</button>
                        </div>
                    )
                })}
            </div>
            <IngredientList loggedInUser={loggedInUser} />
        </div>
    )
}