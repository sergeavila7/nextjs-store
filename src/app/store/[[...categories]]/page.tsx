import React from 'react';

interface CategoriesProps {
  params: {
    categories: string[];
    searchParams: string;
  };
}

export default function Categories(props: CategoriesProps) {
  const { categories } = props.params;
  console.log(props);

  return (
    <div>
      <h1>Categoria dinamica: {categories}</h1>
    </div>
  );
}
