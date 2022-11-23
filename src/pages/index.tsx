import { trpc } from '../utils/trpc';

export default function IndexPage() {
  const hello = trpc.hello.useQuery({ text: 'client' });
  
  if (!hello.data) {
    return <div>Loading...</div>;
  }

  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center text-white bg-gray-800'>
      <p className='text-3xl'>{hello.data.greeting}</p>
    </div>
  );
}
