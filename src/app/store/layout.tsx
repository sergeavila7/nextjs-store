import React, { ReactNode } from 'react';
import { getCollections } from 'app/services/shopify/collections';
import Link from 'next/link';

export default async function Layout({ children }: { children: ReactNode }) {
  const collections = await getCollections();

  return (
    <main>
      <nav>
        {collections.map((collection: any) => (
          <Link key={collection.id} href={'/store/' + collection.handle}>
            {collection.title}
          </Link>
        ))}
      </nav>
      {children}
    </main>
  );
}
