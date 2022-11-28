import { useRouter } from "next/router";
import { useState } from "react";
import { trpc } from "../../utils/trpc";
import Router from "next/router";

export default function Cupboard() {
    const router = useRouter();
    const { query: { user } } = router;
    const props = { user };

    const userQuery = trpc.getUser.useQuery({ username: String(props.user) });
    const loggedInUser = userQuery?.data?.newUser[0];

    const [ingredient, setIngredient] = useState('');
    const handleChange = (e: any) => setIngredient(e.target.value);
    const ingredientMutation = trpc.createIngredient.useMutation();
    
    const addIngredient = () => {
        ingredientMutation.mutate({ name: ingredient, userId: Number(loggedInUser?.id) });
        Router.reload();
    }

    const ingredientQuery = trpc.getIngredients.useQuery({ userId: Number(loggedInUser?.id) });
    const cupboardIngredients = ingredientQuery.data?.ingredients;

    const userMutation = trpc.deleteIngredient.useMutation();

    const deleteIngredient = (ing: string) => {
        userMutation.mutate({ name: ing });
        Router.reload();
    }

    return (
        <div className='h-screen w-screen flex flex-col justify-center items-center text-white bg-gray-800 gap-y-2'>
            <h1 className="text-3xl mb-2">My Cupboard</h1>
            <div className="flex gap-x-2 items-center">
                <input
                    className="bg-gray-800 border rounded p-2.5"
                    type="text"
                    onChange={handleChange}
                    name='username'
                    placeholder="Add ingredient..."
                    required
                />
                <button
                    className='text-center text-green-500 border border-green-500 rounded p-2.5 hover:bg-green-500 hover:text-white'
                    onClick={addIngredient}
                    >
                        +
                </button>
            </div>
            <div className="flex flex-wrap justify-center">
                {cupboardIngredients?.map(ing => {
                    return (
                        <div className="p-4 m-4 border rounded w-48 flex justify-between" key={ing.id}>
                            <p
                                className="capitalize"
                            >
                                {ing.name}
                            </p>
                            <button className="text-red-500" onClick={() => deleteIngredient(ing.name)}>X</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}