import React, { useState } from 'react';
import { AuthForm } from '@/components/ui/Forms';
import { POST_REQUEST_CONFIG } from '@/constants';
import { authApi } from '@/apis';

const SignUp = () => {
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
    const user = await authApi(`/auth/local`, requestConfig);
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
        cta="Login"
        onSubmit={onSubmit}
        error={error}
      />
    </div>
  );
};

export default React.memo(SignUp);
