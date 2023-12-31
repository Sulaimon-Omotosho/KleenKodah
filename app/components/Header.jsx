import React from 'react'

import Link from 'next/link'
import { textVariant } from './utils/motion'

// const categories = [
//   { name: 'React', slug: 'react' },
//   { name: 'Web Development', slug: 'web-dev' },
// ]

const Header = () => {
  return (
    <div className='mx-auto px-10 mb-8 container '>
      <div className='border-b w-full inline-block border-blue-400 py-8'>
        <div variants={textVariant()} className='block md:float-left'>
          <Link href='/'>
            <span className='cursor-pointer font-bold text-4xl text-white'>
              Kleen Kodah
            </span>
          </Link>
        </div>
        {/* <div className='hidden md:float-left md:contents'>
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className='mt-2 align-middle text-white ml-4 md:float-right font-semibold cursor-pointer'>
                {category.name}
              </span>
            </Link>
          ))}
        </div> */}
      </div>
    </div>
  )
}

export default Header
