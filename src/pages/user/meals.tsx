import { useRouter } from "next/router";
import { trpc } from "../../utils/trpc";
import Header from "../../components/Header";

export default function Meals() {
    const router = useRouter();
    const { query: { user } } = router;
    const props = { user };

    const userQuery = trpc.getUser.useQuery({ username: String(props.user) });
    const loggedInUser = userQuery?.data?.newUser[0];

    // Different component

    const backFillMealQuery = trpc.getBackFillMeals.useQuery();
    const dbMealsArray = backFillMealQuery.data?.ingredients;

    const ingredientQuery = trpc.getIngredients.useQuery({ userId: Number(loggedInUser?.id) });
    const cupboardIngredients = ingredientQuery.data?.ingredients;
    const cupboardIngredientNames = cupboardIngredients?.map(ing => ing.name);

    console.log('test', dbMealsArray, cupboardIngredientNames)

    return (
        <div className='h-screen w-screen flex flex-col justify-center items-center text-white bg-gray-800 gap-y-2'>
            <Header loggedInUser={loggedInUser} />
            <h1 className="text-3xl">Meals</h1>
        </div>
    )
}