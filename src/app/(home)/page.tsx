import { MainProducts } from 'app/components';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '✨Future world',
  description: 'World to the future world, an ecommerce from other century',
  keywords: ['ecommere', 'future', 'world', 'technology'],
};

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between py-24'>
      <MainProducts />
    </main>
  );
}
