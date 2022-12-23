import React, { useState } from 'react';
import { AuthForm } from '@/components/ui/Forms';
import { POST_REQUEST_CONFIG } from '@/constants';
import { authApi } from '@/apis';
import Link from 'next/link';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  // console.log('CMS URL = ', process.env.NEXT_PUBLIC_CMS_URL);

  const onSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    setError(null);
    const options = {
      ...POST_REQUEST_CONFIG,
      body: JSON.stringify({ identifier: email, password }),
    };
    const userResponse = await authApi(`/auth/local`, options);
    const { error, jwt, user } = userResponse;
    if (error) {
      return setError(error);
    }
    window.localStorage.setItem('userjwt', jwt);
    console.log('onSubmit User = ', user);
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
      />
      <Link href="/auth/signup" className="text-blue-300 underline text-center">
        Signup
      </Link>
    </div>
  );
};

export default React.memo(SignIn);
