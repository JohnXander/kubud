import { useRouter } from 'next/router';
import { trpc } from "../../utils/trpc";
import { faChevronLeft, faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Meal() {
    const router = useRouter();
    const { query: { meal } } = router;
    const props = { meal };

    const mealQuery = trpc.getMeal.useQuery({ name: String(props.meal) });
    const currentMeal = mealQuery?.data?.foundMeal[0];
    
    return (
        <div className='h-screen w-screen bg-gray-800'>
            <div className='p-5 lg:pl-64'>
                <button
                    className='text-center text-yellow-400 border border-yellow-400 rounded p-1 hover:bg-yellow-400 hover:text-white flex items-center gap-x-2'
                    onClick={() => router.back()}
                >
                    <FontAwesomeIcon icon={faChevronLeft} />
                    <p>Go back</p>
                </button>
            </div>
            <div className='flex flex-col justify-center items-center text-white bg-gray-800 gap-y-2 '>
                <img src={currentMeal?.img} alt={currentMeal?.name} className="w-64 rounded" />
                <h1 className='text-3xl my-3 text-center'>{currentMeal?.name}</h1>
                <a
                    href={currentMeal?.youtube}
                    className='text-center text-green-500 border border-green-500 rounded p-2.5 hover:bg-green-500 hover:text-white flex items-center gap-x-2'
                >
                    <FontAwesomeIcon icon={faVideo} />
                    <p>Instructional Video</p>
                </a>
                <div className="flex flex-wrap gap-2 justify-center overflow-y-auto scrollbar-hide p-4 h-44 lg:h-64 md:w-9/12">
                    {currentMeal?.ingredients.map((ing, idx) => {
                        return (
                            <p className='capitalize text-xs border-2 border-yellow-800 rounded p-1 h-8 text-white' key={idx}>{ing}</p>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}