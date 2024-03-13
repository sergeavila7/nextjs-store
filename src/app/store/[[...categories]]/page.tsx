import { ProductsWrapper } from 'app/components';
import {
  getCollections,
  getCollectionsProducts,
} from 'app/services/shopify/collections';
import { getProducts } from 'app/services/shopify/products';
import React from 'react';

interface CategoriesProps {
  params: {
    categories: string[];
    searchParams: string;
  };
}

export default async function Categories(props: CategoriesProps) {
  const { categories } = props.params;

  let products = [];
  const collections = await getCollections();

  if (categories?.length > 0) {
    const selectedCollection = collections.find(
      (collection: any) => collection.handle === categories[0]
    );
    const selectedCollectionId = selectedCollection
      ? selectedCollection.id
      : null;
    products = await getCollectionsProducts(selectedCollectionId);
  } else {
    products = await getProducts();
  }

  return <ProductsWrapper products={products} />;
}
