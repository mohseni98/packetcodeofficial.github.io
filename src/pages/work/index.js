import { ArrowRightCircleIcon } from '@heroicons/react/24/outline'
import React, { Component } from 'react'

export default class index extends Component {
    state = {
        works: [
            { name: 'Yonnect, Total management system', link: '/yonnect', des: 'Yonnect, the flagship project of Eletive, was a groundbreaking startup initiative. Our primary goal was to create a robust and consistent platform from scratch, given the immense scale of the project.', img: '/assets/work/yonnect.png' },
            { name: 'Zitop, O2O fashion App', link: '/zitop', des: 'I worked with an Elitive company team on a two-month project to design an app aimed at solving fashion industry challenges, especially for buyers. We focused on creating both aesthetically pleasing and practical solutions to improve the experience for stakeholders and consumers.', img: '/assets/work/zitop.png' },
            { name: '3Dot Plus, e-commerce marketplace', link: '/3dotplus', des: 'An app for Iranian-Canadian citizens to connect with their heritage and community, offering a guide to Persian cultural events and a directory of Iranian-Canadian businesses. It enables users to discover, connect, and support cultural and entrepreneurial activities, enhancing their community and cultural identity.', img: '/assets/3dotplus/1.png' },
        ]
    }
    render() {
        return (
            <div className='bg-gray-50 dark:bg-gray-950'>
                <div className='max-w-5xl mx-auto py-16 px-5 lg:px-0'>
                    <div className='grid grid-cols-3 gap-32'>
                        <div className='col-span-3 md:col-span-1 hidden md:block'>
                            <div className='sticky top-32'>
                                <p className='text-xl font-PlayfairDisplay text-gray-900 dark:text-gray-100 italic'>Work</p>
                                <p className='text-gray-900 text-sm pt-2 dark:text-gray-100'>giving back to the world, one solution at a time.</p>
                            </div>
                        </div>
                        <div className='col-span-3 md:col-span-2'>
                            {this.state.works.map((prop, index) => {
                                return (
                                    <a href={prop.link}>
                                        <div className='mb-16 group'>
                                            <div className='rounded-3xl w-full aspect-[3/2] overflow-hidden bg-gray-100 dark:bg-gray-900'>
                                                <img className='group-hover:scale-[1.02] transition-all duration-700' draggable='false' src={prop.img} />
                                            </div>
                                            <div className='flexcb mt-5'>
                                                <p className='text-gray-900 dark:text-gray-100 text-3xl font-bold select-none tracking-wide font-PlayfairDisplay leading-relaxed'>{prop.name}</p>
                                                <button>
                                                    <ArrowRightCircleIcon className='text-gray-700 dark:text-gray-400 h-10 w-10 stroke-[1px] group-hover:text-blue-600 group-hover:dark:text-blue-400 transition-all' aria-hidden='true' />
                                                </button>
                                            </div>
                                            <p className='text-gray-700 dark:text-gray-400 text-base font-light select-none leading-relaxed'>{prop.des}</p>
                                        </div>
                                    </a>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
