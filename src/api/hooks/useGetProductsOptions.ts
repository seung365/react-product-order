import { useQuery } from '@tanstack/react-query';

import type { ProductsOptionsResponseData } from '@/types';

import { fetchInstance } from '../instance';
const getProductsOptionsPath = (product: string) => `/v1/products/${product}/options`;

export const getProductsOptions = async (product: string) => {
  const response = await fetchInstance.get<ProductsOptionsResponseData>(
    getProductsOptionsPath(product),
  );
  return response.data.options;
};

export const useGetProductsOptions = (productId: string) =>
  useQuery({
    queryKey: [getProductsOptionsPath(productId)],
    queryFn: () => getProductsOptions(productId),
  });
