import React from 'react'
import { TEMPLATE } from './TemplateListSection'
import Image from 'next/image'
import Link from 'next/link'

function TemplateCard(item:TEMPLATE) {
  return (
    <Link href={'/dashboard/content/'+item?.slug}>
    <div className='flex flex-col  gap-2 p-5 border rounded-md bg-white shadow-md cursor-pointer hover:scale-105 tranistion-all'>
      <Image src={item.icon} width={50} height={50} alt='icon' />
      <h2 className='font-medium text-lg'>{item.name}</h2>
      <p className='text-gray-500 line-clamp-3'>{item.desc}</p>

    </div>
    </Link>
  )
}

export default TemplateCard