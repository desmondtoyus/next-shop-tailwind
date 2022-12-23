export class ErrorHandler extends Error {
  status: number | null;
  constructor(url: string, status: number | null) {
    super(`'${url} returned ${status}`);
    this.name = 'ErrorHandler';
    this.status = status;
  }
}

export const fetcher = async (url: string, options: any | null) => {
  const defaultOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization:
        typeof window !== 'undefined' &&
        window?.localStorage?.getItem('userjwt')
          ? `Bearer ${window?.localStorage?.getItem('userjwt')}`
          : null,
    },
  };
  const response = await fetch(url, { ...defaultOptions, ...options });
  if (response.ok) {
    return response.json();
  }
  throw new ErrorHandler(url, response.status);
};
