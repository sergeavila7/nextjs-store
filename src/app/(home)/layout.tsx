import { Description, Hero } from 'app/components';
import React from 'react';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Hero />
      <Description />
      {children}
    </div>
  );
}
