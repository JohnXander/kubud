import { trpc } from "../../utils/trpc";
import Router from "next/router";
import { useState } from "react";

export default function IngredientList({ loggedInUser }: any) {
    const [filteredList, setFilteredList] = useState<string[]>()
    const ingredientMutation = trpc.createIngredient.useMutation();
    const backFillIngredientQuery = trpc.getBackFillIngredients.useQuery();
    const dbIngredientsArray = backFillIngredientQuery.data?.ingredients;
    const dbIngredientNames = dbIngredientsArray?.map(ing => ing.name).sort();
    
    const addIngredient = (ing: string) => {
        ingredientMutation.mutate({ name: ing, userId: Number(loggedInUser?.id) });
        Router.reload();
    }

    const handleChange = (e: any) => {
        const filteredIngredients = dbIngredientNames?.filter(ing => {
            if (e.target.value !== '') {
                return ing.includes(e.target.value)
            }
        })
        setFilteredList(filteredIngredients)
    }

    return (
        <div className="border-bottom flex flex-col items-center p-4 gap-y-4">
            <input
                className="bg-gray-800 border rounded p-2.5 w-96"
                type="text"
                onChange={handleChange}
                name='username'
                placeholder="Search for ingredient..."
                required
            />
            {filteredList && <div className="flex flex-wrap gap-2 justify-center overflow-y-auto h-64">
                {filteredList?.map((ing: string, idx: number) => {
                    return (
                        <div className="flex text-xs border rounded p-1 h-8" key={idx}>
                            <button
                                className="capitalize"
                                onClick={() => addIngredient(ing)}
                            >
                                {ing}
                            </button>
                        </div>
                    )
                })}
            </div>}
        </div>
        
    )
}