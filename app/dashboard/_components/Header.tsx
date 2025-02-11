import { UserButton } from '@clerk/nextjs';
import { Search } from 'lucide-react'
import React from 'react'

function Header() {
  return (
    <div className='p-5 bg-white sm:p-5 shadow-sm border-b-2 flex flex-col sm:flex-row justify-between items-center gap-4'>
      <div className='flex items-center gap-2 p-2 border rounded-md w-full sm:max-w-lg bg-white'>
        <Search />
        <input
          type='text'
          placeholder='Search...'
          className='outline-none w-full'
        />
      </div>
      <div className='flex items-center gap-5'>
        <h2 className='bg-primary p-1 rounded-full text-xs text-white px-2 text-center'>
          🚀Join Membership just for $9.99/Month
        </h2>
        <UserButton/>

      </div>
    </div>
  );
}

export default Header