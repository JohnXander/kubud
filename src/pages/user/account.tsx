import { useRouter } from "next/router"

export default function Account() {
    const router = useRouter();
    console.log(router.query)
    const { query: { user } } = router;
    const props = { user };

    return (
        <div className='h-screen w-screen flex flex-col justify-center items-center text-white bg-gray-800'>
            <h1>Hello {props.user}</h1>
        </div>
    )
}