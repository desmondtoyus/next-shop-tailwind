import { API_ENDPOINT } from './constants';

export class ErrorHandler extends Error {
  status: number | null;
  constructor(url: string, status: number | null) {
    super(`'${url} returned ${status}`);
    this.name = 'ErrorHandler';
    this.status = status;
  }
}

export const fetcher = async (url: string, requestConfig: any | null) => {
  const response = await fetch(url, requestConfig);
  console.log(`Status: ${response.status}`);
  if (response.ok) {
    return response.json();
  }
  throw new ErrorHandler(url, response.status);
};
