import { Button } from '@/components/ui/Buttons';
import { Field } from '@/components/ui/Field';
import { Input } from '@/components/ui/Input';
import React, { FC } from 'react';

const SignIn = () => {
  return (
    <div className="p-6">
      <form className="md:w-96 sm:w-full">
        <Field label="Email">
          <Input type="text" />
        </Field>
        <Field label="Password">
          <Input type="password" />
        </Field>
        <Button cta="Sign Up" />
      </form>
    </div>
  );
};

export default React.memo(SignIn);
