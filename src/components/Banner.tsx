'use client'
import React from 'react'
import Brain from "@/assets/svg/brain.svg";
import Image from 'next/image';
import ShinyButton from './magicui/shiny-button';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default function Banner() {
    const wen: string = 'WEN?'
    return (
        <section className='banner md:min-h-[600px] pt-[20vh] md:pt-[30vh] px-6 md:px-14 lg:px-24 md:pb-48 pb-20'>
            <div className='relative z-10'>
                <Image
                    sizes='100%'
                    alt='Brain'
                    src={Brain}
                    className='h-auto md:h-48 w-full md:w-auto'
                />
                <p className='text-xl md:text-4xl leading-[1.5] text-white md:leading-[1.5] mt-5 mb-10 md:mb-20'>
                    An ugly mfer with a really fat head & low <br className='hidden md:block' />
                    brain compute power.
                </p>
                <CopyToClipboard text={wen}>
                    <ShinyButton className='text-black md:text-xl bg-white lg:py-6 lg:px-12 py-4 px-10 rounded-3xl border-[6px] border-[#2169D5]' >
                        CA:{' '}{wen}
                    </ShinyButton>
                </CopyToClipboard>
            </div>
        </section>
    )
}

