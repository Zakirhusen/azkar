import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const audioQuran = () => {
  return (
    <div className="flex flex-col justify-center h-screen w-full items-center">
    <div className='text-gray-400 capitalize text-4xl'>Under process</div>
    <div className='text-gray-400 capitalize text-4xl'>Stay tuned for later</div>

    <Link href="/">
      <a className='underline text-blue-500 text-2xl'>Back</a>
    </Link>
    </div>
  )
}

export default audioQuran