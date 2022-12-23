import { API_ENDPOINT } from './constants';
import { fetcher } from './helper';

export const authApi = async (url: string, options: any) => {
  try {
    const user = await fetcher(`${API_ENDPOINT}${url}`, options);
    return user;
  } catch (error) {
    return { error: String(error) };
  }
};

export const getProducts = async () => {
  const products = await fetcher(`${API_ENDPOINT}/products`, null);
  return products;
};

export const getProduct = async (id: number) => {
  const product = await fetcher(`${API_ENDPOINT}/products/${id}`, null);
  return product;
};
