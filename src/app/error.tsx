'use client';

import React from 'react';
import Image from 'next/image';

const bgGradient = ' bg-gradient-to-br from-pink-500 to-blue-500';

export default function Error({ reset }: ErrorPageProps) {
  return (
    <main className='flex-center flex-col mt-8'>
      <h1
        className={`text-5xl font-extrabold bg-clip-text text-transparent ${bgGradient}`}
      >
        Ha ocurrido un error
      </h1>
      <div className='relative w-[500px] h-[500px]'>
        <Image src='/images/error.png' alt='error' objectFit='cover' fill />
      </div>
      <p className='text-xl font-semibold'>
        Al parecer ha ocurrido un error, pero no te sientas mal.
      </p>
      <button
        className={`block font-bold py-2 px-4 border-none rounded-md mt-8 hover:text-lg ${bgGradient}`}
        onClick={reset}
      >
        Volver a intentar
      </button>
    </main>
  );
}
