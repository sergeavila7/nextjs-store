'use client';

import React, { useEffect } from 'react';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
 
 useEffect(() => {
console.log(error);

 }, [])
 
    return (
    <div className='p-5'>
      <h1>:c</h1>
      <p>Error</p>
      <button onClick={reset}>Intentar de nuevo</button>
    </div>
  );
}
