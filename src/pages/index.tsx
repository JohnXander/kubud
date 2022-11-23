import { trpc } from '../utils/trpc';

export default function IndexPage() {
  const hello = trpc.hello.useQuery({ text: 'client' });

  const createUserMutation = trpc.createUser.useMutation();

  const createNewUser = () => {
    createUserMutation.mutate({username: 'Test 1'})
  }
  
  if (!hello.data) {
    return <div>Loading...</div>;
  }

  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center text-white bg-gray-800'>
      <p className='text-3xl'>{hello.data.greeting}</p>
      <button
        className='text-center text-white border rounded p-2.5 hover:bg-white hover:text-gray-800'
        onClick={() => createNewUser()}
      >
        Create New User
      </button>
    </div>
  );
}
