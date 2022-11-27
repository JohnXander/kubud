import { useRouter } from "next/router";
import { useState } from "react";
import { trpc } from "../../utils/trpc";

export default function Cupboard() {
    const router = useRouter();
    const { query: { user } } = router;
    const props = { user };

    const userQuery = trpc.getUser.useQuery({ username: String(props.user) });
    const loggedInUser = userQuery?.data?.newUser[0];

    const [ingredient, setIngredient] = useState('');
    const handleChange = (e: any) => setIngredient(e.target.value);
    const ingredientMutation = trpc.createIngredient.useMutation();

    const ingredientQuery = trpc.getIngredients.useQuery({ userId: Number(loggedInUser?.id) });
    const cupboardIngredients = ingredientQuery.data?.ingredients;

    const addIngredient = () => {
        ingredientMutation.mutate({ name: ingredient, userId: Number(loggedInUser?.id)});
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
            <div className="flex">
                {cupboardIngredients?.map(ing => {
                    return (
                        <p
                            className="capitalize p-4 m-4 border rounded w-48 text-center"
                            key={ing.id}
                        >
                            {ing.name}
                        </p>
                    )
                })}
            </div>
        </div>
    )
}