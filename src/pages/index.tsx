import { trpc } from '../utils/trpc';

export default function IndexPage() {
  const userMutation = trpc.createUser.useMutation();

  const createNewUser = () => {
    userMutation.mutate({ username: 'Pizza', password: 'burger123' });
  }
  
  if (!createNewUser) <div>Loading...</div>;

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