import React, { useState } from 'react';
import useSWRMutation from 'swr/mutation';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { AuthForm } from '@/components/ui/Forms';
import { fetcher } from '@/helper';

const SignIn = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
      console.error(`Error Happen: ${error}`);
    }
  }

  const { error, isMutating, trigger } = useSWRMutation(
    `${process.env.NEXT_PUBLIC_CMS_URL}/auth/local`,
    loginUser,
  );

  const onSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    trigger(
      { email, password },
      {
        rollbackOnError: true,
      },
    );
  };

  return (
    <div className="p-6 md:w-96 sm:w-full">
      <AuthForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        cta="Login"
        onSubmit={onSubmit}
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
