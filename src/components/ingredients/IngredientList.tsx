import { trpc } from "../../utils/trpc";
import Router from "next/router";
import { useState } from "react";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
        <div className="w-full flex flex-col justify-center items-center">
            <div className="flex w-full p-4 items-center justify-center gap-2 border-0 border-b-2 border-gray-600">
                <FontAwesomeIcon className="text-2xl text-white" icon={faMagnifyingGlass} />
                <input
                    className="bg-gray-800 text-white border rounded p-2.5 w-72"
                    type="text"
                    onChange={handleChange}
                    name='username'
                    placeholder="Search for ingredient..."
                    required
                />
            </div>
            {filteredList && <div className="flex flex-wrap gap-2 justify-center overflow-y-auto scrollbar-hide p-4 h-44 lg:h-64 md:w-9/12">
                {filteredList?.map((ing: string, idx: number) => {
                    return (
                        <div className="flex text-xs border rounded p-1 h-8 text-white" key={idx}>
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