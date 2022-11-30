import { useRouter } from 'next/router';
import { trpc } from "../../utils/trpc";

export default function Meal() {
    const router = useRouter();
    const { query: { meal } } = router;
    const props = { meal };

    const mealQuery = trpc.getMeal.useQuery({ name: String(props.meal) });
    const currentMeal = mealQuery?.data?.foundMeal[0];
    
    return (
        <div className='h-screen w-screen flex flex-col justify-center items-center text-white bg-gray-800 gap-y-2 '>
            <h1 className='text-4xl'>{currentMeal?.name}</h1>
            <img src={currentMeal?.img} alt={currentMeal?.name} className="w-64" />
            <a href={currentMeal?.youtube} className="text-3xl underline">Youtube Video</a>
            <h2 className='text-2xl'>Ingredients:</h2>
            <div className="flex gap-x-1">
                {currentMeal?.ingredients.map((ing, idx) => {
                    if (idx !== currentMeal.ingredients.length - 1) {
                        return <p className='capitalize' key={idx}>{ing},</p>
                    } else {
                        return <p className='capitalize' key={idx}>{ing}</p>
                    }
                })}
            </div>
        </div>
    )
}