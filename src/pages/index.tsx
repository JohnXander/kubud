import { trpc } from '../utils/trpc';

export default function IndexPage() {
  const createUserMutation = trpc.createUser.useMutation();

  const createNewUser = () => {
    createUserMutation.mutate({
      username: 'Test 9'
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
      {createUserMutation.error && <p>Something went wrong! {createUserMutation.error.message}</p>}
    </div>
  );
}
