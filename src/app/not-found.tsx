'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const bgGradient = 'bg-gradient-to-br from-pink-500 to-blue-500';

export default function NotFound() {
  return (
    <main className='flex-center flex-col mt-8'>
      <h1
        className={`text-5xl font-extrabold bg-clip-text text-transparent ${bgGradient}`}
      >
        404
      </h1>
      <div className='relative w-[500px] h-[500px]'>
        <Image src='/images/404.png' alt='error' objectFit='cover' fill />
      </div>
      <h2
        className={`text-3xl font-extrabold bg-clip-text text-transparent ${bgGradient}`}
      >
        Uy!, parece que el enlace se escondio!
      </h2>
      <p className='text-xl font-semibold mt-4'>
        Pero nuestra tienda esta abierta las 24/7
      </p>
      <Link
        className={`block font-bold py-2 px-4 border-none rounded-md mt-8 hover:text-lg  ${bgGradient}`}
        href='/store'
      >
        !Vamos de compras!
      </Link>
    </main>
  );
}
