import React from 'react';
import Image from 'next/image';

const getProducts = async () => {
  try {
    const res = await fetch(
      `${process.env.SHOPIFY_HOSTNAME}/admin/api/2023-10/products.json?`,
      {
        headers: {
          'X-Shopify-Access-Token': process.env.SHOPIFY_API_KEY || '',
        },
      }
    );
    const { products } = await res.json();
    return products;
  } catch (error) {
    console.log(error);
  }
};

export const MainProducts = async () => {
  const products = await getProducts();

  return (
    <section className='w-full'>
      <h3 className='text-center text-5xl font-bold'>
        ✨ New products released!
      </h3>
      <div className='grid grid-cols-2 grid-rows-2 w-full mt-14'>
        {products?.map((product: any) => {
          const imageSrc = product.images[0].src;
          return (
            <article className='relative z-10 min-h-[400px]' key={product.id}>
              <p className='absolute top-0 right-6 z-20 text-right font-bold text-lg max-w-screen-md '>
                {product.title}
              </p>
              <div className='relative w-full h-[400px] opacity-50	'>
                <Image
                  fill
                  objectFit='cover'
                  src={imageSrc}
                  alt={product.title}
                  loading='eager'
                />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
