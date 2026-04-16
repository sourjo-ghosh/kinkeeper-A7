import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className='min-h-screen bg-[#E9E9E9] p-10 flex flex-col justify-center items-center'>
            <p className='text-6xl font-bold text-[#244D3F]'>404</p>
            <h1 className='text-2xl'>The page you are try to visit is not available right now </h1>
            <Link href={"/"}>
            <button className='btn bg-[#244D3F] text-white text-xl mt-5 p-4'>Go To Home</button>
            </Link>
        </div>
    );
};

export default NotFoundPage;