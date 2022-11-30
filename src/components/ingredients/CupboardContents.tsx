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
        <div className="flex justify-center flex-wrap gap-3 py-4 px-2 border-0 border-b-2 border-gray-600 lg:w-9/12">
                {cupboardIngredients?.map(ing => {
                    return (
                        <div className="border rounded w-64 flex items-center p-2 justify-between" key={ing.id}>
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