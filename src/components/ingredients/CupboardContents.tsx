import Router from "next/router";
import { trpc } from "../../utils/trpc";

export default function CupboardContents({ loggedInUser }: any) {
    const ingredientQuery = trpc.getIngredients.useQuery({ userId: Number(loggedInUser?.id) });
    const cupboardIngredients = ingredientQuery.data?.ingredients;
    const userMutation = trpc.deleteIngredient.useMutation();

    const deleteIngredient = (ing: string) => {
        userMutation.mutate({ name: ing });
        Router.reload();
    }

    return (
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
    )
}