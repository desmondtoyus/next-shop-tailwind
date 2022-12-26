import React, { useState } from 'react';
import useSWRMutation from 'swr/mutation';
import { AuthForm } from '@/components/ui/Forms';
import Link from 'next/link';
import { fetcher } from '@/helper';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);

  const logoutUser = async (url: string, { arg }: any) => {
    try {
      const { email, password } = arg;
      const options = {
        method: 'POST',
        body: JSON.stringify({ username: email, email, password }),
      };
      const { user } = await fetcher(url, options);
      if (user) {
        return setSuccess(!!user);
      }
      console.log('onSubmit User = ', user);
    } catch (error) {
      console.error(`Error Happen: ${error}`);
    }
  };

  const { trigger, error, isMutating } = useSWRMutation(
    `${process.env.NEXT_PUBLIC_CMS_URL}/auth/local/register`,
    logoutUser,
  );

  const onSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    trigger({ email, password }, { rollbackOnError: true });
  };

  return (
    <div className="p-6">
      <AuthForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        cta="Signup"
        onSubmit={onSubmit}
        error={error}
        success={success}
        isLoading={isMutating}
      />
      <Link href="/auth/signin" className="text-blue-300 underline text-center">
        Signin
      </Link>
    </div>
  );
};

export default React.memo(SignUp);
