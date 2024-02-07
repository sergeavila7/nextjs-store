import Link from 'next/link';
import React from 'react';

const items = [
  {
    href: '/',
    title: 'Home',
  },
  {
    href: '/store',
    title: 'Store',
  },
];

interface Item {
  href: string;
  title: string;
}

export const Header = () => {
  return (
    <header className='mt-10'>
      <nav>
        <ul className='flex-center gap-8'>
          {items.map((item, index) => (
            <li className='text-2xl font-semibold text-blue-400' key={index}>
              <Link href={item.href} scroll={false}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
