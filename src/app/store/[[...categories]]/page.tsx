import { ProductsWrapper } from 'app/components';
import { getProducts } from 'app/services/shopify/indext';
import React from 'react';

interface CategoriesProps {
  params: {
    categories: string[];
    searchParams: string;
  };
}

export default async function Categories(props: CategoriesProps) {
  const products = await getProducts();
  const { categories } = props.params;

  return <ProductsWrapper products={products} />;
}
