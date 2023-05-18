import React from 'react';
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { RiMenuFill, RiCloseFill, RiShoppingCart2Fill, RiShoppingCart2Line, RiFacebookCircleFill, RiTwitterFill, RiInstagramLine, RiLinkedinBoxFill, RiBehanceFill, RiPhoneFill, RiMailSendLine } from "react-icons/ri";
import { Link, NavLink } from 'react-router-dom';



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const NavigationBar = () => {
  const user = null;
  return (

    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className='bg-[#26a8df] py-2 lg:block hidden'>
            <div className='boxed-container flex justify-between items-center'>
              <div className='flex items-center text-white space-x-3'>
                <RiFacebookCircleFill className='text-xl'></RiFacebookCircleFill>
                <RiTwitterFill className='text-xl'></RiTwitterFill>
                <RiInstagramLine className='text-xl'></RiInstagramLine>
                <RiLinkedinBoxFill className='text-xl'></RiLinkedinBoxFill>
                <RiBehanceFill className='text-xl'></RiBehanceFill>
              </div>
              <div className='flex items-center text-white space-x-4'>
                  <div className='flex items-center space-x-1'>
                  <RiPhoneFill></RiPhoneFill>
                  <p>+8801868061206</p>
                  </div>
                  <div className='flex items-center space-x-1'>
                  <RiMailSendLine></RiMailSendLine>
                  <p>devsajid@gmail.com</p>
                  </div>
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 lg:py-2">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <RiCloseFill className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <RiMenuFill className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center ">
                <div className="flex  items-center">
                  <img
                    className="block h-12  w-auto lg:hidden"
                    src="https://i.ibb.co/W6nzzCV/Gaming-4.png"
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-16 w-auto lg:block"
                    src="https://i.ibb.co/W6nzzCV/Gaming-4.png"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:block mx-auto">
                  <div className="flex space-x-4 items-center">

                    <NavLink to='/'
                      className={({ isActive }) =>
                        isActive ? 'text-[#26A5DA] py-2 px-3' : 'text-white py-2 px-3'
                      }>Home</NavLink>
                    <NavLink to='/all-toys'
                      className={({ isActive }) =>
                        isActive ? ' text-[#26A5DA] py-2 px-3' : 'text-white  py-2 px-3'
                      }>All Toys</NavLink>
                    <NavLink to='/my-toys'
                      className={({ isActive }) =>
                        isActive ? 'text-[#26A5DA] py-2 px-3' : 'text-white  py-2 px-3'
                      }>My Toys</NavLink>
                    <NavLink to='/blog'
                      className={({ isActive }) =>
                        isActive ? ' text-[#26A5DA] py-2 px-3' : 'text-white  py-2 px-3'
                      }>Blog</NavLink>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* <button
                    type="button"
                    className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button> */}

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3 flex items-center">
                  <RiShoppingCart2Line className='text-white text-2xl'></RiShoppingCart2Line>
                  <div title='Sajidur Rahman'>
                    {user ? (<Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 ml-4">
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>) : (
                      <Link to='/login' className='bg-[#26A8DF] sm:px-6 px-3 md:px-8 text-white md:py-2 rounded-sm sm:leading-6 leading-8 sm:block hidden ml-4 hover:text-[#26A8DF] border border-[#26A8DF]  hover:bg-[#1F2937] duration-500'>Login</Link>
                    )}

                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 top-12 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>

                        <a
                          href="#"
                          className='block px-4 py-2 text-sm text-gray-700'
                        >
                          Sajidur Rahman
                        </a>
                      </Menu.Item>
                      <Menu.Item>

                        <a
                          href="#"
                          className='block px-4 py-2 text-sm text-gray-700'
                        >
                          Sign out
                        </a>
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="  pb-5 pt-5 flex flex-col ">
              {/* {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))} */}
              <NavLink to='/'
                className={({ isActive }) =>
                  isActive ? 'bg-[#445165] text-[#26A5DA] py-2 px-3' : 'py-2 px-3 text-white '
                }>Home</NavLink>
              <NavLink to='/all-toys'
                className={({ isActive }) =>
                  isActive ? 'bg-[#445165] text-[#26A5DA] py-2 px-3' : 'py-2 px-3 text-white '
                }>All Toys</NavLink>
              <NavLink to='/my-toys'
                className={({ isActive }) =>
                  isActive ? 'bg-[#445165] text-[#26A5DA] py-2 px-3' : 'py-2 px-3 text-white '
                }>My Toys</NavLink>
              <NavLink to='/blog'
                className={({ isActive }) =>
                  isActive ? 'bg-[#445165] text-[#26A5DA] py-2 px-3' : 'py-2 px-3 text-white '
                }>Blog</NavLink>
              {user ? '' : (<NavLink to='/login'
                className={({ isActive }) =>
                  isActive ? 'bg-[#445165] text-[#26A5DA] py-2 px-3' : 'py-2 px-3 text-white '
                }>Login</NavLink>)}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default NavigationBar;