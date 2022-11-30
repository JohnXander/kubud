import { useRouter } from "next/router";
import { trpc } from "../../utils/trpc";
import Header from "../../components/Header";
import Image from "next/image";

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

    const exactMatches = dbMealsArray?.filter(meal => {
        if (meal.ingredients.every(ing => cupboardIngredientNames?.includes(ing.toLowerCase()))) {
            return meal
        }
    })

    const atLeastOneMatchingIngredient = dbMealsArray?.filter(meal => {
        if (meal.ingredients.some(ing => cupboardIngredientNames?.includes(ing.toLowerCase()))) {
            return meal
        }
    })

    return (
        <div className='h-screen w-screen flex flex-col justify-center items-center text-white bg-gray-800 gap-y-2 '>
            <Header loggedInUser={loggedInUser} />
            <h1 className="text-2xl">Exact Matches</h1>
            <div className="flex justify-center border flex-wrap gap-2 overflow-y-auto h-64 p-4 w-full">
                {exactMatches?.map(meal => {
                    return (
                        <div key={meal.id} className="border w-32 p-2">
                            <img src={meal.img} alt={meal.name} />
                            <p className="text-center">{meal.name}</p>
                        </div>
                    )
                })}
            </div>
            <h1 className="text-2xl">At Least One Matching Ingredient</h1>
            <div className="flex justify-center border flex-wrap gap-2 overflow-y-auto h-64 p-4 w-full">
                {atLeastOneMatchingIngredient?.map(meal => {
                    return (
                        <div key={meal.id} className="border w-32 p-2">
                            <img src={meal.img} alt={meal.name} />
                            <p className="text-center">{meal.name}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}