import { Header } from 'next/dist/lib/load-custom-routes'
import React from 'react'
import { Gutter } from '../../Gutter'
import Link from 'next/link'

const HeaderComponent = ({ header }: { header: Header}) => {
  return (
    <nav>
        <Gutter>
            <Link href='/'>
                <img src='../../logo-black.svg' alt='logo'/>
            </Link>
        </Gutter>
    </nav>
  )
}

export default HeaderComponent