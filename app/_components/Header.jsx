import React from "react";
import Image from "next/image";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className='bg-white  shadow-sm' >

        <div className='flex flex-1 items-center justify-end md:justify-between p-2'>
          <NavBar />

          <div className='flex items-center gap-4'>
            <div className='sm:flex sm:gap-4'>
              <a
                className='block rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-600'
                href='/'>
                Login
              </a>

              <a
                className='hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-primary transition hover:text-blue-700 sm:block'
                href='/'>
                Register
              </a>
            </div>

            <button className='block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden'>
              <span className='sr-only'>Toggle menu</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </button>
          </div>
        </div>

    </header>
  );
};

export default Header;
