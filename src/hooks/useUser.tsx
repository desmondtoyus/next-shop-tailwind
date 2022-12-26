import useSWR from 'swr';
import { isUserJWTAvailable } from '@/helper';

export const useUser = () => {
  const { data } = useSWR(
    isUserJWTAvailable() ? `${process.env.NEXT_PUBLIC_CMS_URL}/users/me` : '',
  );
  return data;
};
