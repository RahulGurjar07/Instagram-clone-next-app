'use client';

import Link from 'next/link';
import Image from 'next/image';
import { signIn, signOut,useSession } from 'next-auth/react';

export default function Header() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div className='shadow-sm border-b sticky top-0 bg-white z-30 p-3'>
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo */}

        <Link href='/' className='hidden lg:inline-flex'>
          <Image
          src='/Instagram_logo_black.webp'
          width={96} height={96}
          />
          
        </Link>

        <Link href='/' className='lg:hidden '>
          <Image
          src='/800px-Instagram_logo_2016.webp'
          width={40} height={40}
          />
          
        </Link>

        {/* serch input */}

        <input 
        type='text' placeholder='Search' className='bg-gray-50 border border-gray-200 rounded text-sm w-full py-2 px-4 max-w-[210px]' />

        {/* menu items */}

        {session ? (
          <img src={session.user.image} alt={session.user.name}
          className='h-10 w-10 rounded-full cursor-pointer'
          onClick={signOut} />
        ) : (
          <button onClick={signIn} className='text-sm font-semibold text-blue-500'>Log In</button>
        )}
      </div>
    </div>
  )
}
