import React, { useState } from 'react';
import useSWRMutation from 'swr/mutation';
import { useRouter } from 'next/router';
import { AuthForm } from '@/components/ui/Forms';
import Link from 'next/link';
import { fetcher } from '@/helper';
import { API_ENDPOINT } from '@/constants';

const SignIn = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // console.log('CMS URL = ', process.env.NEXT_PUBLIC_CMS_URL);

  async function loginUser(url: string, { arg }: any) {
    try {
      const { email, password } = arg;
      const options = {
        method: 'POST',
        body: JSON.stringify({ identifier: email, password }),
      };
      const { jwt } = await fetcher(url, options);
      if (jwt) {
        window.localStorage.setItem('userjwt', jwt);
        router.push(`/dashboard`);
      }
    } catch (error) {
      throw new Error(String(error));
    }
  }

  const { data, error, isMutating, trigger } = useSWRMutation(
    `${API_ENDPOINT}/auth/local`,
    loginUser,
  );

  console.log('useSWRMutation data ', data);
  console.log('useSWRMutation error ', error);
  console.log('useSWRMutation isMutating ', isMutating);

  return (
    <div className="p-6 md:w-96 sm:w-full">
      <AuthForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        cta="Login"
        onSubmit={(e) => {
          e?.preventDefault();
          trigger({ email, password });
        }}
        error={error}
        isLoading={isMutating}
      />
      <Link href="/auth/signup" className="text-blue-300 underline text-center">
        Signup
      </Link>
    </div>
  );
};

export default React.memo(SignIn);
