import React, { useState } from 'react';
import { AuthForm } from '@/components/ui/Forms';
import Link from 'next/link';
import { useSignInOrSignUp } from '@/hooks/useUser';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');
  const [success, setSuccess] = useState(false);
  const { trigger, error, isMutating } = useSignInOrSignUp(
    '/auth/local/register',
  );

  const onSubmit = async (e?: React.FormEvent) => {
    try {
      e?.preventDefault();
      setSuccess(false);
      const { jwt } = await trigger(
        { email, password, username: email },
        {
          rollbackOnError: true,
        },
      );
      if (jwt) {
        setSuccess(true);
      }
      return setErr('Signup unsuccessful');
    } catch (err) {
      return setErr(String(err));
    }
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
        error={error || err}
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
