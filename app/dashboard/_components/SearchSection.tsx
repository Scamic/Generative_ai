import { Search } from 'lucide-react'
import React from 'react'

function SearchSection({onSearchInput}:any) {
  return (
    <div className='flex justify-center flex-col text-white items-center p-10 bg-gradient-to-br from-purple-500 to-blue-600'>
        
        
        <h2 className='text-3xl font-bold'>Browse All templates</h2>

        <p>What will you like to create today?</p>
<div className='w-full flex justify-center '>
        <div className='flex gap-2 items-center p-2 border rounded-md bg-white my-5 w-[50%] '>
          <Search className='text-primary' />
          <input type='text' placeholder='Search...'
          onChange={(event) => onSearchInput(event.target.value)}
           className='bg-transparent w-full outline-none text-black'/>
        </div>
        </div>
</div>
  )
}

export default SearchSection