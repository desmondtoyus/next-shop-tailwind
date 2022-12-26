import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { AuthForm } from '@/components/ui/Forms';
import { useSignInOrSignUp } from '@/hooks/useUser';

const SignIn = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [err, setErr] = useState('');
  const [password, setPassword] = useState('');

  const { trigger, error, isMutating } = useSignInOrSignUp('/auth/local');

  console.log('isMutating == ', isMutating);
  console.log('error == ', error);

  const onSubmit = async (e?: React.FormEvent) => {
    try {
      e?.preventDefault();
      const { jwt } = await trigger(
        { identifier: email, password },
        {
          rollbackOnError: true,
        },
      );
      if (jwt) {
        window.localStorage.setItem('userjwt', jwt);
        return router.push(`/dashboard`);
      }
      return setErr('Signin unsuccessful');
    } catch (err) {
      return setErr(String(err));
    }
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
