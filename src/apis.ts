import { fetcher } from './helper';
const { NEXT_PUBLIC_CMS_URL } = process.env;

export const getProducts = async () => {
  const products = await fetcher(`${NEXT_PUBLIC_CMS_URL}/products`, null);
  return products;
};

export const getProduct = async (id: number) => {
  const product = await fetcher(`${NEXT_PUBLIC_CMS_URL}/products/${id}`, null);
  return product;
};
