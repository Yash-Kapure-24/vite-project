import React, { Fragment, useContext, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { BsFillCloudSunFill } from "react-icons/bs";
import { FiSun } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import myContext from "../../context/data/myContext";
import allproduct from "../../pages/admin/allproduct/allproduct";
import { useSelector } from "react-redux";

const Navbar = () => {
  const context = useContext(myContext);
  const { mode, toggleBtn } = context;

  const [open, setOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.clear("user");
    window.location.href = "/login";
  };

  const cartItems = useSelector((state) => state.cart)

  return (
    <div className='bg-white sticky top-0 z-50'>
      {/* Mobile Menu Transition */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as='div' className='relative z-40 lg:hidden' onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter='transition-opacity ease-linear duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity ease-linear duration-300'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 z-40 flex'>
            <Transition.Child
              as={Fragment}
              enter='transition ease-in-out duration-300 transform'
              enterFrom='-translate-x-full'
              enterTo='translate-x-0'
              leave='transition ease-in-out duration-300 transform'
              leaveFrom='translate-x-0'
              leaveTo='-translate-x-full'
            >
              <Dialog.Panel
                className={`relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl ${
                  mode === "dark" ? "bg-gray-800 text-white" : ""
                }`}
              >
                {/* Close Button */}
                <div className='flex px-4 pb-2 pt-28'>
                  <button
                    type='button'
                    className='inline-flex items-center justify-center rounded-md p-2 text-gray-400'
                    onClick={() => setOpen(false)}
                  >
                    <span className='sr-only'>Close menu</span>
                    <RxCross2 />
                  </button>
                </div>

                {/* Navigation Links */}
                <div className='space-y-6 border-t border-gray-200 px-4 py-6'>
                  <Link to='/allproduct' className='block text-sm font-medium'>
                    All Products
                  </Link>
                  
                  {user ?  <Link to='/order' className='text-sm font-medium'>
                    Order
                  </Link>: ""}

                  {user?.email === "yashkapure@gmail.com" ? (
                    <Link to='/dashboard' className='block text-sm font-medium'>
                      Admin
                    </Link>
                  ) : (
                    " "
                  )}

                  {user ? (
                    <button
                      onClick={logout}
                      className='block text-sm font-medium cursor-pointer'
                    >
                      Logout
                    </button>
                  ) : (
                    ""
                  )}

                  <Link to={'/'} className='flex items-center'>
                    <img
                      className='w-10 h-10 rounded-full'
                      src='https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg'
                      alt='Profile'
                    />
                  </Link>
                </div>

                {/* Footer */}
                <div className='border-t border-gray-200 px-4 py-6'>
                  <a href='#' className='flex items-center'>
                    <img
                      src='img/indiaflag.png'
                      alt='India Flag'
                      className='h-5 w-5'
                    />
                    <span className='ml-3 text-base font-medium'>INDIA</span>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Header */}
      <header
        className={`relative ${
          mode === "dark" ? "bg-gray-800 text-white" : "bg-white"
        }`}
      >
        <p
          className={`flex h-10 items-center justify-center text-sm font-medium ${
            mode === "dark" ? "bg-gray-700" : "bg-pink-600 text-white"
          }`}
        >
          Get free delivery on orders over ₹300
        </p>

        <nav
          aria-label='Top'
          className={`shadow-xl ${
            mode === "dark" ? "bg-gray-900 text-white" : "bg-gray-100"
          }`}
        >
          <div className='px-4 sm:px-6 lg:px-8'>
            <div className='flex h-16 items-center'>
              {/* Mobile Menu Button */}
              <button
                type='button'
                className={`lg:hidden p-2 rounded-md ${
                  mode === "dark"
                    ? "bg-gray-700 text-white"
                    : "bg-white text-gray-400"
                }`}
                onClick={() => setOpen(true)}
              >
                <span className='sr-only'>Open menu</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth={1.5}
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                  />
                </svg>
              </button>

              {/* Logo */}
              <div className='ml-4 flex lg:ml-0'>
                <Link to='/' className='text-2xl font-bold'>
                  E-Bharat
                </Link>
              </div>

              {/* Desktop Menu */}
              <div className='ml-auto flex items-center'>
                <div className='hidden lg:flex lg:items-center lg:space-x-6'>
                  <Link to='/allproducts' className='text-sm font-medium'>
                    All Products
                  </Link>

                {user ?  <Link to='/order' className='text-sm font-medium'>
                    Order
                  </Link>: ""}


                  {user?.email === "yashkapure@gmail.com" ? (
                    <Link to='/dashboard' className='block text-sm font-medium'>
                      Admin
                    </Link>
                  ) : (
                    " "
                  )}
                  {user ? (
                    <button
                      onClick={logout}
                      className='text-sm font-medium cursor-pointer'
                    >
                      Logout
                    </button>
                  ) : (
                    ""
                  )}
                </div>

                {/* Profile & Theme Toggle */}
                <div className='hidden lg:flex lg:ml-8 items-center space-x-4'>
                  <a href='#' className='flex items-center'>
                    <img
                      className='w-5 h-5'
                      src='https://ecommerce-sk.vercel.app/img/indiaflag.png'
                      alt='India Flag'
                    />
                    <span className='ml-3 text-sm font-medium'>INDIA</span>
                  </a>
                  <img
                    className='inline-block w-10 h-10 rounded-full'
                    src='https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg'
                    alt='Profile'
                  />
                  <button onClick={toggleBtn}>
                    {mode === "light" ? (
                      <FiSun size={30} />
                    ) : (
                      <BsFillCloudSunFill size={30} />
                    )}
                  </button>
                </div>

                {/* Cart */}
                <Link to='/cart' className='ml-4 flex items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-6 h-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
                    />
                  </svg>
                  <span className='ml-2 text-sm font-medium'>{cartItems.length}</span>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
