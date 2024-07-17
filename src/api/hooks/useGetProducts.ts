import { useQuery } from '@tanstack/react-query';

import type { ProductsResponseData } from '@/types';

import { fetchInstance } from '../instance';

const getProductsPath = (product: string) => `/v1/products/${product}/detail`;

export const getProducts = async (product: string) => {
  const response = await fetchInstance.get<ProductsResponseData>(getProductsPath(product));
  return response.data.detail;
};

export const useGetProducts = (productId: string) =>
  useQuery({
    queryKey: [getProductsPath(productId)],
    queryFn: () => getProducts(productId),
  });
