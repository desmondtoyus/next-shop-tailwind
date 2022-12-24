import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';
import { useUser } from '@/hooks/useUser';

const Navbar = () => {
  const router = useRouter();
  const data = useUser();

  console.log('data == ', data);

  const onSignOut = async (e?: React.FormEvent) => {
    e?.preventDefault();
    window.localStorage.removeItem('userjwt');
    router.push('/');
  };

  return (
    <nav className="px-2 py-1 text-sm">
      <ul className="flex gap-2">
        <li className="text-lg font-extrabold">
          <Link href="/">Next Shop</Link>
        </li>
        <li role="separator" className="flex-1"></li>
        <li>
          {data ? (
            <>
              <span className="pr-4"> Welcome, {data?.username} </span>
              <button className="text-lg text-blue-600" onClick={onSignOut}>
                Sign out
              </button>
            </>
          ) : (
            <Link href="/auth/signin" className="text-blue-600">
              Sign In
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default React.memo(Navbar);
