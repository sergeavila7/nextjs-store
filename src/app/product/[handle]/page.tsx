import { ProductView } from 'app/components';
import { getProducts } from 'app/services/shopify/products';
interface ProductPageProps {
  searchParams: {
    id: string;
  };
}

export default async function ProductPage({ searchParams }: ProductPageProps) {
  const id = searchParams.id;
  const products = await getProducts(id);
  const product = products ? products[0] : null;

  return <>{product && <ProductView product={product} />}</>;
}
