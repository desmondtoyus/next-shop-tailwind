import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';
import { fetcher, isUserJWTAvailable } from '@/helper';

export const useUser = () => {
  const { data } = useSWR(
    isUserJWTAvailable() ? `${process.env.NEXT_PUBLIC_CMS_URL}/users/me` : '',
  );
  return data;
};

export const useSignInOrSignUp = (endpoint: string) => {
  const loginUser = async (url: string, { arg }: any) => {
    try {
      const options = {
        method: 'POST',
        body: JSON.stringify({ ...arg }),
      };
      return await fetcher(url, options);
    } catch (err) {
      throw new Error(String(err));
    }
  };

  const { error, isMutating, trigger } = useSWRMutation(
    `${process.env.NEXT_PUBLIC_CMS_URL}${endpoint}`,
    loginUser,
  );

  return {
    trigger,
    error,
    isMutating,
  };
};
