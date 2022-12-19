import { API_ENDPOINT } from './constants';

const fetcher = async (url: string) => {
  try {
    const response = await fetch(url);
    console.log(`Status: ${response.status}`);
    if (response.status === 200) {
      return response.json();
    }
    return null;
  } catch (error) {
    console.error(`Caught Error: ${error}`);
    return null;
  }
};

export const getProducts = async () => {
  const products = await fetcher(`${API_ENDPOINT}/products`);
  return products;
};

export const getProduct = async (id: number) => {
  const product = await fetcher(`${API_ENDPOINT}/products/${id}`);
  return product;
};
