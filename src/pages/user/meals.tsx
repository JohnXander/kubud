import { useRouter } from "next/router";
import { trpc } from "../../utils/trpc";
import Header from "../../components/Header";
import Router from "next/router";

export default function Meals() {
    const router = useRouter();
    const { query: { user } } = router;
    const props = { user };

    const userQuery = trpc.getUser.useQuery({ username: String(props.user) });
    const loggedInUser = userQuery?.data?.newUser[0];

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

    const handleNavigate = (meal: string) => {
        Router.push({ pathname: "/user/meal", query: { meal } });
    }

    return (
        <div className='bg-gray-800 h-screen flex flex-col items-center text-white'>
            <Header loggedInUser={loggedInUser} />
            <h1 className="text-3xl text-center pb-4 pt-2 border-0 border-b-2 border-gray-600 text-white w-full">
                Exact Matches
            </h1>
            <div className="flex justify-center flex-wrap gap-3 p-4 border-0 border-b-2 border-gray-600 overflow-y-auto scrollbar-hide h-44 lg:h-64 md:w-9/12">
                {exactMatches?.length === 0 && <p className="text-gray-400">There are no matches.</p>}
                {exactMatches?.map(meal => {
                    return (
                        <div
                            key={meal.id}
                            className="border-2 border-green-400 rounded w-32 h-44 cursor-pointer"
                            onClick={() => handleNavigate(meal.name)}
                        >
                            <img className="w-full" src={meal.img} alt={meal.name} />
                            <p className="text-center truncate p-2.5">{meal.name}</p>
                        </div>
                    )
                })}
            </div>
            <h1 className="text-3xl text-center pb-4 pt-2 border-0 border-b-2 border-gray-600 text-white w-full">
                At Least One <br/> Matching Ingredient
            </h1>
            <div className="flex justify-center flex-wrap gap-3 p-4 border-0 border-b-2 border-gray-600 overflow-y-auto scrollbar-hide h-44 lg:h-64 md:w-9/12">
                {atLeastOneMatchingIngredient?.length === 0 && <p className="text-gray-400">There are no matches.</p>}
                {atLeastOneMatchingIngredient?.map(meal => {
                    return (
                        <div key={meal.id} className="border-2 border-green-800 rounded w-32 h-44 cursor-pointer" onClick={() => handleNavigate(meal.name)}>
                            <img className="w-full" src={meal.img} alt={meal.name} />
                            <p className="text-center truncate p-2.5">{meal.name}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}