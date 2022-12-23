import React, { useState } from 'react';
import { AuthForm } from '@/components/ui/Forms';
import { authApi } from '@/apis';
import Link from 'next/link';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const onSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    setError(null);
    const options = {
      method: 'POST',
      body: JSON.stringify({ username: email, email, password }),
    };
    const user = await authApi(`/auth/local/register`, options);
    const { error } = user;
    if (error) {
      setError(error);
    }
    console.log('onSubmit User = ', user);
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
      />
      <Link href="/auth/signin" className="text-blue-300 underline text-center">
        Signin
      </Link>
    </div>
  );
};

export default React.memo(SignUp);
