import Image from 'next/image';
import Link from 'next/link';

interface ProductCardInterface {
  product: ProductType;
}

export const ProductCard = ({ product }: ProductCardInterface) => {
  return (
    <Link
      href={`/product/${product.handle}?id=${product.id}`}
      className='text-white pointer'
    >
      <article className='relative flex flex-col'>
        <Image
          src={product.image}
          alt={product.title}
          quality={80}
          height={320}
          width={320}
          loading='eager'
        />
        <div className='p-1 pt-0 rounded-md'>
          <h3>{product.title}</h3>
        </div>
        <span className='absolute inline-block bg-red-500 text-white p-1 rounded-md transform -top-0.5 -right-1 rotate-5'>
          ${product.price} USD
        </span>
      </article>
    </Link>
  );
};
