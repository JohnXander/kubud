import Router from "next/router";

export default function IndexPage() {
  const handleNavigate = () => Router.push({ pathname: "/login/register" });

  // env connections updated
  
  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center text-white bg-gray-800'>
      <button
          className='text-center text-white border rounded p-2.5 hover:bg-white hover:text-gray-800'
          onClick={handleNavigate}
          >
            Register
      </button>
    </div>
  );
}