import { useParams } from 'react-router-dom';

import { ProductsDetail } from '@/components/features/Products/ProductsDetail';

export const ProductsPage = () => {
  const { productId = '' } = useParams<{ productId: string }>();

  return (
    <div>
      <ProductsDetail productId={productId}></ProductsDetail>
    </div>
  );
};
