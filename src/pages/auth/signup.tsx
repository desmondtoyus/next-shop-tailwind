import React, { useState } from 'react';
import useSWRMutation from 'swr/mutation';
import { AuthForm } from '@/components/ui/Forms';
import Link from 'next/link';
import { fetcher } from '@/helper';
import { API_ENDPOINT } from '@/constants';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);

  const logoutUser = async (url: string, { arg }: any) => {
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
  };

  const { trigger, error, isMutating } = useSWRMutation(
    `${API_ENDPOINT}/auth/local/register`,
    logoutUser,
  );

  return (
    <div className="p-6">
      <AuthForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        cta="Signup"
        onSubmit={(e) => {
          e?.preventDefault();
          trigger({ email, password });
        }}
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
