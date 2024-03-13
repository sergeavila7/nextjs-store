import Image from 'next/image';
import { ProductViewItemsOrder } from './ProductViewItemsOrder';
interface ProductViewProps {
  product: ProductType;
}

export const ProductView = ({ product }: ProductViewProps) => {
  return (
    <main className='max-w-1200 mx-auto grid grid-cols-2 gap-y-20 mt-20'>
      <section className='justify-self-end rounded-lg'>
        <Image
          loading='eager'
          src={product.image}
          width={500}
          height={500}
          quality={80}
          alt={product.title}
        />
      </section>
      <section>
        <h1>{product.title}</h1>
        <p>{product.tags}</p>
        <p>{product.description}</p>
        <span>$ {product.price}</span>
        <ProductViewItemsOrder maxQuantity={product.quantity} />
      </section>
    </main>
  );
};
