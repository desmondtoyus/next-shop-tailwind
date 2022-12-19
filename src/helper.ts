import { API_ENDPOINT } from './constants';

export class ErrorHandler extends Error {
  status: number | null;
  constructor(url: string, status: number | null) {
    super(`'${url} returned ${status}`);
    this.name = 'ErrorHandler';
    this.status = status;
  }
}

const fetcher = async (url: string) => {
  const response = await fetch(url);
  console.log(`Status: ${response.status}`);
  if (response.ok) {
    return response.json();
  }
  throw new ErrorHandler(url, response.status);
};

export const getProducts = async () => {
  const products = await fetcher(`${API_ENDPOINT}/products`);
  return products;
};

export const getProduct = async (id: number) => {
  const product = await fetcher(`${API_ENDPOINT}/products/${id}`);
  return product;
};
