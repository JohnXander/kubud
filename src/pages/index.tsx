import { trpc } from '../utils/trpc';

export default function IndexPage() {
  // const createUserMutation = trpc.createUser.useMutation();
  // const createTestMutation = trpc.createTest.useMutation();

  // const createNewUser = () => {
  //   createUserMutation.mutate({username: 'bb'})
  // }

  // const createNewTest = () => {
  //   createTestMutation.mutate({testOne: 'test5', testTwo: 'test6'})
  // }

  const voteMutation = trpc.createMeal.useMutation();

  const voteForRoundest = () => {
      voteMutation.mutate({ name: 'Pizza', img: 'PizzaImage' });
  }
  
  if (!voteForRoundest) {
    return <div>Loading...</div>;
  }

  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center text-white bg-gray-800'>
      <button
        className='text-center text-white border rounded p-2.5 hover:bg-white hover:text-gray-800'
        onClick={() => voteForRoundest()}
      >
        Create New User
      </button>
    </div>
  );
}