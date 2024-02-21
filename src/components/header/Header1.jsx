import { MoonIcon, SunIcon } from '@heroicons/react/20/solid';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React, { Component } from 'react';
import Modal from '../basic/Modal';

class Header1 extends Component {
  state = {
  }

  openMenuModal = () => {
    
    this.menuModal.showModal()
  }



  render() {
    return (
      <div className='bg-gray-50 dark:bg-gray-950'>
        <div className='max-w-5xl mx-auto px-5 lg:px-0'>
          <div className='grid grid-cols-2 py-5'>
            <div className='col-span-1'>
              <div className='flexc'>
                <a href='/' className='text-xl font-PlayfairDisplay font-semibold uppercase text-gray-950 dark:text-gray-50 select-none'>GM.</a>
                <button className='ms-5 flexc' onClick={this.props.toggleMode}>
                  <div className='w-[38px] h-[20px] bg-gray-300 dark:bg-gray-800 relative rounded-full me-2'>
                    <div className={'w-[18px] h-[18px] bg-gray-800 dark:bg-gray-300 absolute top-[1px] rounded-full  transition-all duration-700 ' + (this.props.isDarkMode ? 'right-[1px]' : 'right-[19.5px]')}></div>
                  </div>
                  <MoonIcon className='w-5 h-5 text-gray-950 dark:text-gray-50 ' aria-hidden='true' />
                </button>
              </div>
            </div>
            <div className='col-span-1'>
              <div className='flex justify-end'>
                <Link href='/work' className='group sm:flex sm:justify-center sm:items-center sm:flex-col transition-all hidden'>
                  <p className='text-gray-950 dark:text-gray-50 px-5 text-sm select-none group-hover:text-blue-600 group-hover:dark:text-blue-400'>Work</p>
                </Link>
                <Link href='/gallery' className='group sm:flex sm:justify-center sm:items-center sm:flex-col transition-all hidden'>
                  <p className='text-gray-950 dark:text-gray-50 px-5 text-sm select-none group-hover:text-blue-600 group-hover:dark:text-blue-400'>Gallery</p>
                </Link>
                <Link href='/about' className='group sm:flex sm:justify-center sm:items-center sm:flex-col transition-all hidden'>
                  <p className='text-gray-950 dark:text-gray-50 px-5 text-sm select-none group-hover:text-blue-600 group-hover:dark:text-blue-400'>About</p>
                </Link>
                <Link href='/resume' className='group flexcc flex-col transition-all ms-5 rounded-full py-1 hover:bg-blue-600 hover:border-transparent hover:dark:border-transparent border border-gray-950 dark:border-gray-50'>
                  <p className='text-gray-950 dark:text-gray-50 px-5 text-sm select-none group-hover:text-gray-50'>Resume</p>
                </Link>
                <button href='/menu' className='group flex justify-center items-center flex-col transition-all sm:hidden ms-5' onClick={this.openMenuModal}>
                  <Bars3Icon className='w-6 h-6 text-gray-950 dark:text-gray-50' aria-hidden='true' />
                </button>
              </div>
            </div>
          </div>
        </div>
        <Modal ref={el => this.menuModal = el} maxWidth={300}>
          <div className='flexcc flex-col p-10 h-full'>
            <Link href='/work' className='group flexcc transition-all mb-16'>
              <p className='text-gray-950 dark:text-gray-50 font-semibold text-2xl select-none group-hover:text-blue-600 group-hover:dark:text-blue-400'>Work</p>
            </Link>
            <Link href='/gallery' className='group flexcc transition-all mb-16'>
              <p className='text-gray-950 dark:text-gray-50 font-semibold text-2xl select-none group-hover:text-blue-600 group-hover:dark:text-blue-400'>Gallery</p>
            </Link>
            <Link href='/about' className='group flexcc transition-all mb-16'>
              <p className='text-gray-950 dark:text-gray-50 font-semibold text-2xl select-none group-hover:text-blue-600 group-hover:dark:text-blue-400'>About</p>
            </Link>
            <Link href='/resume' className='group flexcc flex-col transition-all px-16 rounded-full py-4 hover:bg-blue-600 hover:border-transparent hover:dark:border-transparent border border-gray-950 dark:border-gray-50'>
              <p className='text-gray-950 dark:text-gray-50 font-semibold text-2xl select-none group-hover:text-gray-50'>Resume</p>
            </Link>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Header1;
