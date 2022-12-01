import Router from "next/router";
import { trpc } from "../../utils/trpc";
import { faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function CupboardContents({ loggedInUser }: any) {
    const ingredientQuery = trpc.getIngredients.useQuery({ userId: Number(loggedInUser?.id) });
    const cupboardIngredients = ingredientQuery.data?.ingredients;
    const userMutation = trpc.deleteIngredient.useMutation();

    const deleteIngredient = (ing: string) => {
        userMutation.mutate({ name: ing });
        Router.reload();
    }

    return (
        <div className="flex justify-center flex-wrap gap-3 p-4 border-2 border-t-0 border-gray-600 overflow-y-auto scrollbar-hide h-44 lg:h-64 md:w-9/12">
            {cupboardIngredients?.length === 0 && <p className="text-gray-400">There is nothing in your cupboard.</p>}
            {cupboardIngredients?.map(ing => {
                return (
                    <div className="border-2 border-yellow-400 rounded w-64 h-16 flex items-center p-2 justify-between" key={ing.id}>
                        <p className="capitalize text-white">{ing.name}</p>
                        <button className="text-red-500" onClick={() => deleteIngredient(ing.name)}>
                            <FontAwesomeIcon icon={faX} />
                        </button>
                    </div>
                )
            })}
        </div>
    )
}