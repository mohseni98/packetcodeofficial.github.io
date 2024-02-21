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
          <div className='grid grid-cols-3 gap-32'>
            <div className='col-span-1 hidden md:block'>
              <div className='sticky top-36'>
                <p className='text-xl font-PlayfairDisplay text-gray-900 dark:text-gray-100 italic'>Gallery</p>
                <p className='text-sm pt-2 text-gray-900 dark:text-gray-100'>a lens to remember the world's moments through.</p>
              </div>
            </div>
            <div className='col-span-3 md:col-span-2'>
              <div className='columns-2 md:columns-2 gap-5'>
                {this.state.gallery.map((prop, index) => {
                  return (
                    <img className='h-auto max-w-full mb-5 rounded-2xl' src={prop.img} />
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
