import React from 'react'
import Link from 'next/link';

const page = () => {
  return (
    <div>
        <div>SELECT YOUR NUMBER</div>
        <Link href='/post/1'>1</Link>
        <br />
        <Link href='/post/2'>2</Link>
        <br />
        <Link href='/post/3'>3</Link>
    </div>
  )
}

export default page