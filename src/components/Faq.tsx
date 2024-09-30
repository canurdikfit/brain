import {
    Accordion,
} from "@/components/ui/accordion"
import Accoridion from './ui/fq'

export default function Faq() {
    return (
        <section className='px-5 md:px-12 lg:px-16 xl:px-24 py-20 md:min-h-[600px] flex items-center relative' id='faq'>
            <div className="grid relative z-10 md:grid-cols-2 w-full max-w-screen-2xl items-end justify-between">
                <div />
                <div className="flex items-center justify-end">
                    <div className='space-y-7 pb-14 max-w-lg w-full'>
                        <h3 className='text-3xl lg:text-4xl text-white'>Frequently asked questions</h3>
                        <Accordion type="single" collapsible className="w-full">
                            {
                                Questions.map((item, index) => (
                                    <Accoridion index={index} key={index} question={item.label} answer={item.answer} />
                                ))
                            }
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    )
}



const Questions = [
    {
        label: 'is this like other meme coins?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ex itaque harum eligendi tempore sunt dolorum id quos. Deleniti, ex.'
    },
    {
        label: 'is this like other meme coins?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ex itaque harum eligendi tempore sunt dolorum id quos. Deleniti, ex.'
    },
    {
        label: 'is this like other meme coins?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ex itaque harum eligendi tempore sunt dolorum id quos. Deleniti, ex.'
    },
    {
        label: 'is this like other meme coins?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ex itaque harum eligendi tempore sunt dolorum id quos. Deleniti, ex.'
    },
]