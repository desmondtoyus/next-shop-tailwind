import { fetcher } from './helper';
const { NEXT_PUBLIC_CMS_URL } = process.env;

export const authApi = async (url: string, options: any) => {
  try {
    const user = await fetcher(`${NEXT_PUBLIC_CMS_URL}${url}`, options);
    return user;
  } catch (error) {
    return { error: String(error) };
  }
};

export const getProducts = async () => {
  const products = await fetcher(`${NEXT_PUBLIC_CMS_URL}/products`, null);
  return products;
};

export const getProduct = async (id: number) => {
  const product = await fetcher(`${NEXT_PUBLIC_CMS_URL}/products/${id}`, null);
  return product;
};
