import { ArrowRightIcon } from '@heroicons/react/24/outline'
import React, { Component } from 'react'

export default class index extends Component {
    state = {
        contact: [
            { name: 'Linkedin', link: 'https://www.linkedin.com/in/gedrichmohseni/' },
            { name: 'Email', link: 'mailto:gedrichmohseni@gmail.com' },
        ]
    }
    render() {
        return (
            <div className='bg-gray-50 dark:bg-gray-950'>
                <div className='max-w-5xl mx-auto py-16 px-5 lg:px-0'>
                    <div className='grid grid-cols-3 gap-32'>
                        <div className='col-span-1 hidden md:block'>
                            <div className='sticky top-36'>
                                <p className='text-xl font-PlayfairDisplay text-gray-900 dark:text-gray-100 italic'>About</p>
                                <p className='text-sm pt-2 text-gray-900 dark:text-gray-100'>thanks for snapping a look. Let's get in touch!</p>
                                <div className='mt-10'>
                                    {this.state.contact.map((prop, index) => {
                                        return (
                                            <button className='flexc w-full mb-5 group'>
                                                <ArrowRightIcon className='me-5 w-4 h-4 stroke-[1.5px] text-gray-950 dark:text-gray-50 group-hover:text-blue-600 group-hover:dark:text-blue-400' aria-hidden="true" />
                                                <a target='_blank' className='text-gray-950 dark:text-gray-50 group-hover:text-blue-600 group-hover:dark:text-blue-400 group-hover:underline' href={prop.link}>{prop.name}</a>
                                            </button>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className='col-span-3 md:col-span-2'>
                            <div className='bg-white dark:bg-gray-1000 p-8 rounded-3xl'>
                                <img className='rounded-xl h-96' src='/assets/resume/1.jpg' />
                                <p className='font-PlayfairDisplay text-3xl pt-10 text-gray-900 dark:text-gray-100'><span className='italic'>Hi there,</span> I'm Gedrich</p>
                                <p className='pt-4 text-sm text-gr text-gray-900 dark:text-gray-100'>Just a little bit about me — I'm a Graduated Student from Architectural Design, based in Toronto.</p>
                                <p className='pt-4 text-sm text-gr text-gray-900 dark:text-gray-100'>For the longest time, art has been a pillar of my life. From sketching to Architecture to graphics to photography and now product design, each of these mediums are linked by a common thread: the power of a story. While the creator’s story and emotion shape these art forms, product design enables me to illuminate stories of people across the world.</p>
                                <p className='pt-4 text-sm text-gr text-gray-900 dark:text-gray-100'>In my spare time, you can find me obsessing over many hobbies that satisfy my inner tinkerer and artist. These include custom mechanical keyboards, 3D Conceptual Designs, fashion, and street photography. I'm always on the lookout for another money trap... but these hobbies allow me to appreciate the little things while iterating until everything is just right.</p>
                            </div>
                            <div className='bg-white dark:bg-gray-1000 p-8 rounded-3xl mt-10'>
                                <p className='font-PlayfairDisplay text-3xl text-gray-900 dark:text-gray-100'>I Believe that... </p>
                                <p className='pt-4 text-sm text-gr text-gray-900 dark:text-gray-100'>Interfaces should effortlessly blend into the background. My passion lies in simplifying people's lives holistically, blending empathy with innovation and creativity. By merging aesthetics with functionality, I aim to declutter everyday experiences and empower people to complete the toughest chapters in their story.</p>
                            </div>
                            <div className='bg-white dark:bg-gray-1000 p-8 rounded-3xl mt-10'>
                                <img className='rounded-xl w-full object-cover aspect-square' src='/assets/resume/2.jpg' />
                                <p className='font-PlayfairDisplay text-3xl pt-10 text-gray-900 dark:text-gray-100'>Less is...</p>
                                <p className='pt-4 text-sm text-gr text-gray-900 dark:text-gray-100'>The biggest part of my design journey has been the inspiration and guidance that the world provides. From looking at nature and architecture for inspiration, to the people who participated in my first projects, and my mentors and friends along the way. I am eternally grateful.</p>
                                <p className='pt-4 text-sm text-gr text-gray-900 dark:text-gray-100'>The world is the catalyst for my personal story and identity. I am always looking forward to what my next chapter holds.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
