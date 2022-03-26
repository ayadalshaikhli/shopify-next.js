import Link from 'next/link'
import React from 'react'

export default function Nav() {
  return (
    <header className="sticky top-0 z-20 border-b bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between pt-4 pb-2 lg:max-w-screen-xl"></div>
      <Link href="/" passHref>
        <a className="cursor-pointer">
          <span className="pt-1 text-lg font-bold">Shopify + next.js</span>
        </a>
      </Link>
      <a className="text-md cursor-pointer font-bold">cart</a>
    </header>
  )
}
