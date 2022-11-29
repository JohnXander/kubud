import { trpc } from "../../utils/trpc";
import Router from "next/router";

export default function IngredientList({ loggedInUser }: any) {
    const ingredientMutation = trpc.createIngredient.useMutation();
    const backFillIngredientQuery = trpc.getBackFillIngredients.useQuery();
    const dbIngredientsArray = backFillIngredientQuery.data?.ingredients;
    const dbIngredientNames = dbIngredientsArray?.map(ing => ing.name).sort();
    
    const addIngredient = (ing: string) => {
        ingredientMutation.mutate({ name: ing, userId: Number(loggedInUser?.id) });
        Router.reload();
    }

    return (
        <div className="flex flex-wrap border gap-2 justify-center overflow-y-auto h-64 p-4">
                {dbIngredientNames?.map((ing: string, idx: number) => {
                    return (
                        <div className="flex text-xs border rounded p-1" key={idx}>
                            <button
                                className="capitalize"
                                onClick={() => addIngredient(ing)}
                            >
                                {ing}
                            </button>
                        </div>
                    )
                })}
            </div>
    )
}