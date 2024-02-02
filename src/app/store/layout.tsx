import React, { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main>
      <nav>Navegacion de las categorias</nav>
      {children}
    </main>
  );
}
