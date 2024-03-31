import { ArrowRightIcon } from '@heroicons/react/24/outline'
import React, { Component } from 'react'

export default class index extends Component {
    state = {
        gallery: [
            { img: '/assets/test/g1.jpg' },
            { img: '/assets/test/g2.jpg' },
            { img: '/assets/test/g3.jpg' },
            { img: '/assets/test/g4.jpg' },
            { img: '/assets/test/g5.jpg' },
            { img: '/assets/test/g6.jpg' },
            { img: '/assets/test/g7.jpg' },
            { img: '/assets/test/g8.jpg' },
            { img: '/assets/test/g9.jpg' },
            { img: '/assets/test/g10.jpg' },
        ]
    }
    render() {
        return (
            <div className='bg-gray-50 dark:bg-gray-950'>
                <div className='max-w-5xl mx-auto py-16 px-5 lg:px-0'>
                    <div className='bg-white dark:bg-gray-1000 p-8 rounded-3xl'>
                        <div className='flex flex-col md:items-center md:flex-row md:justify-between'>
                            <p className='text-4xl font-PlayfairDisplay font-semibold text-gray-950 dark:text-gray-50'>Gedrich Mohseni</p>
                            <div className='flex flex-col mt-10 md:mt-0'>
                                <a className='text-sm text-gray-950 dark:text-gray-50 mb-1' target='_blank' href='https://www.gedrichmohseni.com'>GedrichMohseni.com</a>
                                <a className='text-sm text-gray-950 dark:text-gray-50 mb-1' target='_blank' href='mailto:Gedrichmohseni@gmail.com'>GedrichMohseni@gmail.com</a>
                                <a className='text-sm text-gray-950 dark:text-gray-50 mb-1' target='_blank' href='https://www.linkedin.com/in/gedrichmohseni/'>linkedin.com/in/gedrichmohseni</a>
                                <a className='text-sm text-gray-950 dark:text-gray-50' target='_blank' href='tel:+14167178283'>+1 416 717 8283</a>
                            </div>
                        </div>
                        <div className='grid grid-cols-5 mt-14 gap-10 md:gap-36'>
                            <div className='col-span-5 md:col-span-1'>
                                <p className='font-light text-gray-950 dark:text-gray-50 text-lg'>EXPERIENCE</p>
                            </div>
                            <div className='col-span-5 md:col-span-4'>
                                <div className=''>
                                    <div className='flexc'>
                                        <div className='w-2 h-2 bg-gray-950 dark:bg-gray-300 rounded-full me-4'></div>
                                        <p className=' text-gray-950 dark:text-gray-50 text-lg'>Elitive</p>
                                    </div>
                                    <div className='border-l ps-5 pt-5 pb-10 ms-[2.5px] border-gray-700'>
                                        <div className='flexc'>
                                            <div className='w-2 h-2 bg-gray-950 dark:bg-gray-300 rounded-full me-4'></div>
                                            <p className='font-semibold text-gray-950 dark:text-gray-50 text-lg'>Product Designer</p>
                                        </div>
                                        <p className='font-light text-gray-700 text-sm'>Nov 2022 - Dec 2023 | 1 yr 2 mos</p>
                                        <p className=' text-gray-950 dark:text-gray-50 text-sm mt-4'>1.Lead the development of accessible interfaces, conducting user research to ensure designs meet diverse needs.</p>
                                        <p className=' text-gray-950 dark:text-gray-50 text-sm mt-4'>2.Work with engineers, product managers, and accessibility experts to align designs with project goals.</p>
                                        <p className=' text-gray-950 dark:text-gray-50 text-sm mt-4'>3.Innovate and iterate on design solutions that enhance adaptability and personalization for users.</p>
                                        <p className=' text-gray-950 dark:text-gray-50 text-sm mt-4'>4.Develop and implement design strategies, ensuring timely delivery of high-quality design deliverables.</p>
                                    </div>
                                    <div className='border-l ps-5 pt-5 ms-[2.5px] border-gray-700'>
                                        <div className='flexc'>
                                            <div className='w-2 h-2 bg-gray-950 dark:bg-gray-300 rounded-full me-4'></div>
                                            <p className='font-semibold text-gray-950 dark:text-gray-50 text-lg'>UI/UX Designer</p>
                                        </div>
                                        <p className='font-light text-gray-700 text-sm'>Oct 2021 - Nov 2022 | 2 yr 3 mos</p>
                                        <p className=' text-gray-950 dark:text-gray-50 text-sm mt-4'>1.Led UI/UX design projects, creating wireframes, interactive prototypes, and high-fidelity designs using Figma and Adobe suite, enhancing user experience and interface design.</p>
                                        <p className=' text-gray-950 dark:text-gray-50 text-sm mt-4'>2.Collaborated with cross-functional teams to refine and implement design concepts, focusing on user-centered design processes and responsive design principles.</p>
                                        <p className=' text-gray-950 dark:text-gray-50 text-sm mt-4'>3.Maintained and applied design documentation, ensuring consistency and coherency across all product interfaces.</p>
                                    </div>
                                </div>
                                <div className='mt-20'>
                                    <div className='flexc'>
                                        <div className='w-2 h-2 bg-gray-950 dark:bg-gray-300 rounded-full me-4'></div>
                                        <p className=' text-gray-950 dark:text-gray-50 text-lg'>BoldZee</p>
                                        <div className='w-2 h-2 bg-gray-950 dark:bg-gray-300 rounded-full mx-4'></div>
                                        <p className='font-semibold text-gray-950 dark:text-gray-50 text-lg'>Web User Interface Designer</p>
                                    </div>
                                    <div className='border-l ps-5 ms-[2.5px] border-gray-700'>
                                        <p className='font-light text-gray-700 text-sm'>Sep 2020 - Oct 2021 | 1 yr 2 mos</p>
                                        <p className=' text-gray-950 dark:text-gray-50 text-sm mt-10'>1.Spearheaded the development of a cohesive branding strategy through the design of graphical frames for social media and web interfaces.</p>
                                        <p className=' text-gray-950 dark:text-gray-50 text-sm mt-5'>2.Designed responsive UIs that adapt to various screen sizes, improving accessibility and user engagement.</p>
                                        <p className=' text-gray-950 dark:text-gray-50 text-sm mt-5'>3.Contributed to team knowledge sharing by staying abreast of the latest UI/UX trends, techniques, and best practices.</p>
                                    </div>
                                </div>
                                <div className='mt-20'>
                                    <div className='flexc'>
                                        <div className='w-2 h-2 bg-gray-950 dark:bg-gray-300 rounded-full me-4'></div>
                                        <p className=' text-gray-950 dark:text-gray-50 text-lg'>Fanavaran</p>
                                        <div className='w-2 h-2 bg-gray-950 dark:bg-gray-300 rounded-full mx-4'></div>
                                        <p className='font-semibold text-gray-950 dark:text-gray-50 text-lg'>Intern Architect</p>
                                    </div>
                                    <div className='border-l ps-5 ms-[2.5px] border-gray-700'>
                                        <p className='font-light text-gray-700 text-sm'>Aug 2019 - Sep 2020 | 1 yr 2 mos</p>
                                        <p className=' text-gray-950 dark:text-gray-50 text-sm mt-10'>1.Supported the architectural team in the design development phase by creating detailed drawings, 3D models, and renderings using AutoCAD and 3Ds Max.</p>
                                        <p className=' text-gray-950 dark:text-gray-50 text-sm mt-5'>2.Assisted in conducting site visits to document existing conditions and gather essential data for ongoing projects.</p>
                                        <p className=' text-gray-950 dark:text-gray-50 text-sm mt-5'>3.Contributed to the preparation of design presentations for clients, effectively communicating design concepts through visual aids and verbal communication.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-5 mt-14 gap-10 md:gap-36 border-gray-300'>
                            <div className='col-span-5 md:col-span-1'>
                                <p className='font-light text-gray-950 dark:text-gray-50 text-lg'>EDUCATION</p>
                            </div>
                            <div className='col-span-5 md:col-span-4'>
                                <p className='font-semibold text-gray-950 dark:text-gray-50 text-lg'>IAU University <span className='text-sm'>(South Branch)</span></p>
                                <p className='font-light text-gray-700 text-sm'>Sep 2016 - Mar 2021 | 3.57 / 4.00 GPA</p>
                                <p className=' text-gray-950 dark:text-gray-50 text-sm mt-5'>B.Eng Architectural Engineering</p>
                            </div>
                        </div>
                        <div className='grid grid-cols-5 mt-24 gap-10 md:gap-36'>
                            <div className='col-span-5 md:col-span-1'>
                                <p className='font-light text-gray-950 dark:text-gray-50 text-lg'>SKILLSET</p>
                            </div>
                            <div className='col-span-2'>
                                <p className='font-semibold text-gray-950 dark:text-gray-50 text-lg'>Design</p>
                                <p className=' text-gray-950 dark:text-gray-50 text-sm mt-5'>UI/UX Design, Interaction Design, Product Design, UX Research, Prototyping, Testing Methodologies, Product Thinking, Wireframing, Visual Design</p>
                            </div>
                            <div className='col-span-2'>
                                <p className='font-semibold text-gray-950 dark:text-gray-50 text-lg'>Tools</p>
                                <p className=' text-gray-950 dark:text-gray-50 text-sm mt-5'>Figma ,Figjam ,Sketch ,Photoshop, Illustrator, Lightroom, Webflow, JavaScript, HTML, CSS, SQL, Tailwind, React</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
