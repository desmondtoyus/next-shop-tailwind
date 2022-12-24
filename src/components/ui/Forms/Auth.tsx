import React, { FC } from 'react';
import { Button } from '../Buttons';
import { Field } from '../Field';
import { Input } from '../Input';

export interface AuthProps {
  email: string;
  password: string;
  cta?: string;
  error?: string | null;
  success?: boolean;
  isLoading?: boolean;
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
  onSubmit: (e?: React.FormEvent) => void;
}

const AuthForm: FC<AuthProps> = ({
  email,
  error = null,
  password,
  cta = 'Sign Up',
  success = false,
  isLoading = false,
  setPassword,
  setEmail,
  onSubmit,
}) => {
  return (
    <div className="md:w-96 sm:w-full">
      {error && <span className="text-red-600"> {String(error)} </span>}
      <form onSubmit={onSubmit}>
        <Field label="Email">
          <Input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required={true}
          />
        </Field>
        <Field label="Password">
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required={true}
          />
        </Field>
        <Button cta={cta} type="submit" disabled={isLoading} />
      </form>
      {success && (
        <span className="text-blue-600"> Account created successfully </span>
      )}
    </div>
  );
};

export default React.memo(AuthForm);
