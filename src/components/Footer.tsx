'use client'
import Link from 'next/link'
import React from 'react'
import { FaDiscord, FaRegCopyright, FaTelegramPlane } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

export default function Footer() {
    const date: number = new Date().getFullYear()
    return (
        <footer className='bg-[#E4D6A9] -mt-2 z-20 relative py-10'>
            <div className="flex flex-col gap-4 items-center justify-center">
                <div className="flex items-center justify-center gap-10 text-2xl text-black md:text-3xl">
                    <Link href={'/'}><FaTelegramPlane /></Link>
                    <Link href={'/'}> <FaDiscord /></Link>
                    <Link href={'/'}><FaXTwitter /></Link>
                </div>
                <p className='text-sm'> <FaRegCopyright className='inline-block text-black' />{' '} {date} {' '} $BRAIN</p>
            </div>
        </footer>
    )
}
