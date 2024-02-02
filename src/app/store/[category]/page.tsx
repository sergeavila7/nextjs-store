import React from 'react';

interface CategoryProps {
  params: {
    category: string;
  };
}

export default function Category(props: CategoryProps) {
  const { category } = props.params;

  return (
    <div>
      <h1>{category}</h1>
    </div>
  );
}
