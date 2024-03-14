import { ProductView } from 'app/components';
import { getProducts } from 'app/services/shopify/products';
import { redirect } from 'next/navigation';

interface ProductPageProps {
  searchParams: {
    id: string;
  };
}

export default async function ProductPage({ searchParams }: ProductPageProps) {
  const id = searchParams.id;
  const products = await getProducts(id);
  const product = products ? products[1] : null;

  if (!id) {
    redirect('/store');
  }

  return <>{product && <ProductView product={product} />}</>;
}
