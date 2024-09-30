import React from 'react'
import Marquee from './magicui/marquee'
import Image from 'next/image'
import CarouselImg from '@/assets/svg/carousel.svg'

export default function Carousel() {
    return (
        <section className="relative flex bg-[#226CE6] carousel py-5 w-full border-t-2 border-b-2 border-white items-center justify-center overflow-hidden bg-background md:shadow-xl">
            <Marquee pauseOnHover repeat={20} className="[--duration:10s] h-full w-full">
                {
                    [80].map((items) => (
                        <Image
                            key={items}
                            src={CarouselImg}
                            alt='Carousel Image'
                            sizes='100%'
                            className='h-8 md:h-12 w-auto mx-4 md:mx-7'
                        />
                    ))
                }
            </Marquee>
        </section>
    )
}




