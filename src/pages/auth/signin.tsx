import React, { useState } from 'react';
import { AuthForm } from '@/components/ui/Forms';
import { POST_REQUEST_CONFIG } from '@/constants';
import { authApi } from '@/apis';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const onSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    setError(null);
    const requestConfig = {
      ...POST_REQUEST_CONFIG,
      body: JSON.stringify({ identifier: email, password }),
    };
    const userResponse = await authApi(`/auth/local`, requestConfig);
    const { error, jwt, user } = userResponse;
    if (error) {
      return setError(error);
    }
    window.localStorage.setItem('userjwt', jwt);
    console.log('onSubmit User = ', user);
  };

  return (
    <div className="p-6">
      <AuthForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        cta="Login"
        onSubmit={onSubmit}
        error={error}
      />
    </div>
  );
};

export default React.memo(SignIn);
