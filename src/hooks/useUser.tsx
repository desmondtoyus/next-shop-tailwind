import useSWR from 'swr';
import { API_ENDPOINT } from '@/constants';
import { isUserJWTAvailable } from '@/helper';

export const useUser = () => {
  const { data } = useSWR(
    isUserJWTAvailable() ? `${API_ENDPOINT}/users/me` : '',
  );
  return data;
};
