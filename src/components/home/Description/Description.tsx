'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { PLACEHOLDER_IMAGE } from 'app/constants';
import cn from 'classnames';

export const Description = () => {
  const [hasBorder, setBorder] = useState(false);

  const handleClick = () => setBorder(!hasBorder);

  const buttonStyles = cn('rounded-lg', {
    'shadow-lg shadow-blue-500/50': hasBorder,
  });

  return (
    <section className='grid grid-cols-2 gap-8 max-w-[1100px] mx-auto my-24 p-8'>
      <button onClick={handleClick}>
        <div className='relative w-[500px] h-[300px]'>
          <Image
            className={buttonStyles}
            fill
            src='/images/description.jpeg'
            alt='products marketplace'
            objectFit='cover'
            placeholder='blur'
            blurDataURL={PLACEHOLDER_IMAGE}
            priority={false}
            quality={100}
          />
        </div>
      </button>
      <div className='text-2xl'>
        <h3 className='text-3xl font-bold mb-5'>Bring the future today</h3>
        <p>
          Future world: Your Gateway to Tomorrow&lsquo;s Tech! Dive into a world
          of cutting-edge gadgets and gear. Stay ahead of the curve and redefine
          your digital lifestyle with us.
        </p>
      </div>
    </section>
  );
};
