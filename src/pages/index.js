import { ArrowRightCircleIcon } from '@heroicons/react/24/outline'
import React, { Component } from 'react'


export default class index extends Component {
  state = {
    states: [
      { name: 'Work', des: "I've got a handful of pieces of work that I'm genuinely proud of." },
      { name: 'About', des: "Everything's right here; take a look and get to know me better." },
      { name: 'Fun', des: "Some of my fun activites during my own time." },
    ],
    works: [
      { name: 'Yonnect, Total management system', link: '/yonnect', des: 'Yonnect, the flagship project of Eletive, was a groundbreaking startup initiative. Our primary goal was to create a robust and consistent platform from scratch, given the immense scale of the project.', img: '/assets/work/yonnect.png' },
      { name: 'Zitop, O2O fashion App', link: '/zitop', des: 'I worked with an Elitive company team on a two-month project to design an app aimed at solving fashion industry challenges, especially for buyers. We focused on creating both aesthetically pleasing and practical solutions to improve the experience for stakeholders and consumers.', img: '/assets/work/zitop.png' },
      { name: '3Dot Plus, e-commerce marketplace', link: '/3dotplus', des: 'An app for Iranian-Canadian citizens to connect with their heritage and community, offering a guide to Persian cultural events and a directory of Iranian-Canadian businesses. It enables users to discover, connect, and support cultural and entrepreneurial activities, enhancing their community and cultural identity.', img: '/assets/3dotplus/1.png' },
    ]
  }

  render() {
    return (

      <div className=''>
        <div className='bg-gray-50 dark:bg-gray-950'>
          <div className='max-w-5xl mx-auto px-5 lg:px-0'>
            <div className='py-24'>
              <p className='text-gray-900 dark:text-gray-100 text-4xl font-thin tracking-wide select-none font-PlayfairDisplay leading-relaxed'>Hello!</p>
              <p className='text-gray-900 dark:text-gray-100 text-4xl font-thin tracking-wide select-none font-PlayfairDisplay leading-relaxed'>This is <span className='italic'>Gedrich,</span></p>
              <p className='text-gray-900 dark:text-gray-100 text-4xl font-thin tracking-wide select-none font-PlayfairDisplay leading-relaxed'>I'm a Product designer.</p>
              <p className='text-gray-900 dark:text-gray-100 text-base tracking-wide select-none leading-relaxed my-10'>Gedrich is a product designer driven by a passion for collaborative workspaces, equipped with an impressive skill set that seamlessly blends design and development. With over three years of valuable experience in the field, Gedrich thrives in the intersection of creativity and functionality. Currently based in the city of Toronto, Gedrich is ready to bring innovation and a fresh perspective to any project.</p>
              <p className='text-gray-700 dark:text-gray-400 pt-5 border-t'>Incoming designs <a target='_blank' href='https://www.linkedin.com/in/gedrichmohseni/' className='hover:text-blue-600 hover:dark:text-blue-400'>@ Linkedin</a></p>
            </div>
          </div>
        </div>
        <div className='bg-white dark:bg-gray-1000'>
          <div className='max-w-5xl mx-auto py-24 px-5 lg:px-0'>
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
                        <div className='rounded-3xl w-full aspect-[3/2] overflow-hidden bg-gray-50 dark:bg-gray-950'>
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
      </div>
    )
  }
}
