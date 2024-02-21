import React, { Component } from 'react';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid';
import Collapsible from 'react-collapsible';

class Header extends Component {
  state = {

    products: [
      { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
      { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
      { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
      { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
      { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
    ],

    callsToAction: [
      { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
      { name: 'Contact sales', href: '#', icon: PhoneIcon },
    ],
    mobileMenuOpen: false,
  }

  toggleMobileMenu = () => {
    this.setState((prevState) => ({
      mobileMenuOpen: !prevState.mobileMenuOpen,
    }));
  };

  handleProductOpen = () => {
    this.setState({ productOpen: !this.state.productOpen })
  }

  render() {
    let { mobileMenuOpen, setMobileMenuOpen, callsToAction, products } = this.state;

    return (
      <header className='relative' >
        <div className='z-20 relative'>
          <nav className="mx-auto max-w-7xl flex items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" onClick={this.toggleMobileMenu}>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <Popover.Group className="hidden lg:flex lg:gap-x-4">
              <Popover className="relative">
                <Popover.Button className={"flexcb w-full px-5 py-2 text-sm font-semibold leading-6 text-gray-900 relative rounded-full outline-none " + (this.props.changeColor ? 'bg-gray-50' : 'bg-transparent')}>
                  <p className=''>Product</p>
                  <ChevronDownIcon className='h-5 w-5 ms-3' aria-hidden="true" />
                </Popover.Button>

                <Transition as={React.Fragment} enter="transition ease-out duration-200" enterFrom="opacity-0 translate-y-1" enterTo="opacity-100 translate-y-0" leave="transition ease-in duration-150" leaveFrom="opacity-100 translate-y-0" leaveTo="opacity-0 translate-y-1">
                  <Popover.Panel className="absolute -left-36 top-full z-30 mt-3 w-screen max-w-md overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5">
                    <div className="p-4">
                      {products.map((item) => (
                        <div key={item.name} className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                          <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                            <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                          </div>
                          <div className="flex-auto">
                            <a href={item.href} className="block font-semibold text-gray-900">
                              {item.name}
                              <span className="absolute inset-0" />
                            </a>
                            <p className="mt-1 text-gray-600">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                      {callsToAction.map((item) => (
                        <a key={item.name} href={item.href} className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100">
                          <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </Popover.Panel>
                </Transition>
              </Popover>

              <a href="#" className="text-sm font-semibold text-gray-900 relative flexcc">
                <div className={'absolute w-full h-full transition-all z-0 rounded-full ' + (this.props.changeColor ? 'bg-gray-50' : 'bg-transparent')}></div>
                <p className={'transition-all px-5 py-2 z-10 font-normal ' + (this.props.changeColor ? 'text-gray-950' : 'text-gray-950')} >Features</p>
              </a>
              <a href="#" className="text-sm font-semibold text-gray-900 relative flexcc">
                <div className={'absolute w-full h-full transition-all z-0 rounded-full ' + (this.props.changeColor ? 'bg-gray-50' : 'bg-transparent')}></div>
                <p className={'transition-all px-5 py-2 z-10 font-normal ' + (this.props.changeColor ? 'text-gray-950' : 'text-gray-950')}>Marketplace</p>
              </a>
              <a href="#" className="text-sm font-semibold text-gray-900 relative flexcc">
                <div className={'absolute w-full h-full transition-all z-0 rounded-full ' + (this.props.changeColor ? 'bg-gray-50' : 'bg-transparent')}></div>
                <p className={'transition-all px-5 py-2 z-10 font-normal ' + (this.props.changeColor ? 'text-gray-950' : 'text-gray-950')}>Company</p>
              </a>
            </Popover.Group>
            {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Log in <span aria-hidden="true">&rarr;</span>
              </a>
            </div> */}
          </nav>
          <div className={"lg:hidden transition-all "} open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <div className={"fixed inset-y-0 right-0 z-10 w-full sm:max-w-sm p-6 overflow-y-auto bg-white sm:ring-1 sm:ring-gray-900/10 transition-all duration-700 ease-out  " + (mobileMenuOpen ? 'translate-x-0 ' : 'translate-x-full')}>
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                </a>
                <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={this.toggleMobileMenu}>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    <div className="-mx-3">
                      <button className="flexcb w-full rounded-lg py-3 px-4 hover:bg-gray-50" onClick={() => this.handleProductOpen()}>
                        <p className='text-gray-900 text-base font-semibold'>Product</p>
                        <ChevronDownIcon className={'h-5 w-5 flex-none transition-all ' + (this.state.productOpen ? 'rotate-180' : '')} aria-hidden="true" />
                      </button>
                      <Collapsible className="" open={this.state.productOpen}>
                        {[...products, ...callsToAction].map((item) => (
                          <button key={item.name} as="a" href={item.href} className="w-full py-3 px-4 text-start rounded-lg text-sm font-normal text-gray-700 hover:bg-gray-50">
                            {item.name}
                          </button>
                        ))}
                      </Collapsible>
                    </div>
                    <a href="#" className="flexcb w-full rounded-lg py-3 px-4 hover:bg-gray-50">
                      <p className='text-gray-900 text-base font-semibold'>Features</p>
                    </a>
                    <a href="#" className="flexcb w-full rounded-lg py-3 px-4 hover:bg-gray-50">
                      <p className='text-gray-900 text-base font-semibold'>Marketplace</p>
                    </a>
                    <a href="#" className="flexcb w-full rounded-lg py-3 px-4 hover:bg-gray-50">
                      <p className='text-gray-900 text-base font-semibold'>Company</p>
                    </a>
                  </div>
                  <div className="py-6">
                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                      <p>Log in</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`w-full h-full bg-white bg-opacity-80 backdrop-blur-xl absolute left-0 top-0 z-10 `} style={{ opacity: `${this.props.isOnTop.opacity}%` }}></div>
      </header >
    );
  }
}

export default Header;
