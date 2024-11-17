"use client"
import Link from "next/link"
import {usePathname} from 'next/navigation'

function Nav() {
  const path = usePathname()
  return (
    <nav className="flex p-4 bg-gray-500" >
        <Link   className={`p-3 ${path === '/'? 'text-cyan-200':''}`}   href='/'>Home</Link>
        <Link  className={`p-3 ${path === '/about'? 'text-cyan-200':''}`} href='/about'>About</Link>
        <Link className={`p-3 ${path === '/contact'? 'text-cyan-200':''}`} href='/contact'>Contact</Link>
        <Link className={`p-3 ${path === '/users'? 'text-cyan-200':''}`} href='/users'>Users</Link>
    </nav>
  )
}

export default Nav