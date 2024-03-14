import { ProductView } from 'app/components';
import { getProducts } from 'app/services/shopify/products';
import { redirect } from 'next/navigation';

interface ProductPageProps {
  searchParams: {
    id: string;
  };
}

export async function generateMetadata({ searchParams }: ProductPageProps) {
  const id = searchParams.id;
  const products = await getProducts(id);
  const product = products ? products[1] : null;

  return {
    title: product?.title,
    description: product?.description,
    keywords: product?.tags,
    openGraph: {
      images: [product?.image],
    },
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
