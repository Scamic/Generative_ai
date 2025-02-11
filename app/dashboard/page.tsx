'use client'
import { useState } from 'react'
import React from 'react'
import SearchSection from './_components/SearchSection'
import TemplateListSection from './_components/TemplateListSection'

function Dashboard()  {
  const [userSearchInput, setUserSearchInput] = useState<string>(); 
  return (
    <div>
      {/* Search section */}
<SearchSection onSearchInput={(value:string)=>setUserSearchInput(value)}  />
      {/* template list section */}
      <TemplateListSection  userSearchInput={userSearchInput}/>
    </div>
  )
}

export default Dashboard