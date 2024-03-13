import { ProductCard } from 'app/components';

interface ProductsWrapperProps {
  products: ProductType[];
}

export const ProductsWrapper = ({ products }: ProductsWrapperProps) => {
  return (
    <div className='grid grid-cols-auto-fill gap-x-12 gap-y-8 justify-items-center justify-center mt-12'>
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
