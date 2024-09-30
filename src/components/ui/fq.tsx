import React from "react";
import Plus from "@/assets/icon/plus.png";
import Image from "next/image";
import { AccordionContent, AccordionItem, AccordionTrigger } from "./accordion";

interface Props {
    question: string,
    answer: string
    index: number
}

export default function Accoridion(props: Props) {
    return (
        <AccordionItem value={'item-' + props.index} className="bg-gradient-to-br to-[#1E64BD] from-[#2670E5] mb-4 p-1.5 rounded-3xl md:rounded-[30px] pl-6 border-[6px] border-white">
            <AccordionTrigger className="flex items-center justify-between w-full p-3 md:p-5">
                <h4 className="text-white text-base md:text-lg lg:text-xl text-left">
                    {props.question}
                </h4>
                <Image
                    src={Plus}
                    alt={'icon'}
                    sizes="100%"
                    className={`h-8 transition-transform ease-in-out duration-500 w-auto`}
                />

            </AccordionTrigger>
            <AccordionContent>
                <div
                    className='px-5 rounded-3xl'
                >
                    <p className="text-white text-lg text-left max-w-md">
                        {props.answer}
                    </p>
                </div>
            </AccordionContent>
        </AccordionItem>
    );
}