import { trpc } from '../utils/trpc';

export default function IndexPage() {
  const createUserMutation = trpc.createUser.useMutation();

  const createNewUser = () => {
    createUserMutation.mutate({
      username: 'Test 4',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKr5wT7rfkjkGvNeqgXjBmarC5ZNoZs-H2uMpML8O7Q4F9W-IlUQibBT6IPqyvX45NOgw&usqp=CAU'
    })
  }
  
  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center text-white bg-gray-800'>
      <button
        className='text-center text-white border rounded p-2.5 hover:bg-white hover:text-gray-800'
        onClick={() => createNewUser()}
      >
        Create New User
      </button>
    </div>
  );
}
