import React from 'react';
import { Transition } from '@headlessui/react';

function Navbar() {
    return (
        <div>
            <div>
                <nav className="shadow-sm w-full">
                    <div className="w-full bg-[#2D2D2D]">
                        <div className='flex item-center h-20 w-full'>
                            <div className='flex items items-center mx-20 justify-between w-full'>
                                <div className='flex justify-center items-center flex-shrink-0 cursor-pointer'>
                                    <img style={{ width: 176 }} className='logo-img w-100' src="https://res.cloudinary.com/db0ntoydi/image/upload/v1668565282/primeLogo_yhuxlg.png" alt="logo" />
                                </div>
                                <div className='hidden md:block'>
                                    <div className='ml-10 flex items-baseline space-x-4'>
                                        <img className="w-12 h-12 cursor-pointer rounded-full" src="https://res.cloudinary.com/db0ntoydi/image/upload/v1668573809/profile_uzm1cl.png" alt="Rounded avatar" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <div>
                    <nav className="shadow-sm w-full">
                        <div className="w-full bg-[#222222]">
                            <div className='flex item-center h-14 w-full'>
                                <div className='flex items justify-center w-full'>
                                    <div className='hidden md:flex justify-center items-center'>
                                        <div className='flex flex-row text-white mx-8 w-24 h-14 justify-center items-center border-b-[3px] border-slate-400 cursor-pointer'>
                                            <img className='w-5 h-5  mr-2' src="https://res.cloudinary.com/db0ntoydi/image/upload/v1668565281/home_iis9rc.png" alt="home" />
                                            <h1 className='text-[14px] font-medium'>Home</h1>
                                        </div>
                                        <div className='text-[#DBB659] mx-8 w-24 h-14 flex flex-row items-center cursor-pointer'>
                                            <img className='w-5 h-5 mt-1 mr-2' src="https://res.cloudinary.com/db0ntoydi/image/upload/v1668565281/analysis_sywump.png" alt="Analytics" />
                                            <h1 className='text-[14px] font-medium'>Analytics</h1>
                                        </div>
                                        <div className='text-[#DBB659] mx-8 w-24 h-14 flex flex-row items-center cursor-pointer'>
                                            <img className='w-5 h-5  mr-2' src="https://res.cloudinary.com/db0ntoydi/image/upload/v1668565281/contacts_p1pdfl.png" alt="Contacts" />
                                            <h1 className='text-[14px] font-medium'>Contacts</h1>
                                        </div>
                                        <div className='text-[#DBB659] mx-8 w-24 h-14 flex flex-row items-center cursor-pointer'>
                                            <img className='w-5 h-5  mr-2 ' src="https://res.cloudinary.com/db0ntoydi/image/upload/v1668565281/linc_zy0hii.png" alt="Link" />
                                            <h1 className='text-[14px] font-medium'>Link</h1>
                                        </div>
                                        <div className='text-[#DBB659] mx-2 w-24 h-14 flex flex-row items-center cursor-pointer'>
                                            <img className='w-6 h-6 mr-2' src="https://res.cloudinary.com/db0ntoydi/image/upload/v1668565281/account_skoulq.png" alt="Account" />
                                            <h1 className='text-[14px] font-medium'>Account</h1>
                                        </div>
                                    </div>
                                    <button className='block md:hidden py-5  px-4 mx-2 rounded focus:outline-none hover:bg-gray-200 group'>
                                        <div className='w-5 h-1 bg-gray-600 mb-1'></div>
                                        <div className='w-5 h-1 bg-gray-600 mb-1'></div>
                                        <div className='w-5 h-1 bg-gray-600'></div>
                                        <div className='absolute top-20 right-full h-screen w-full bg-[#151515]
                        opacity-0 group-focus:right-0 group-focus:opacity-100 transition-all duration-300 z-10'>
                                            <ul className='flex flex-col items-center w-full text-base cursor-pointer pt-10'>
                                                <li className='hover:bg-gray-200 hover:text-black text-white py-4 px-6 w-full'>Home</li>
                                                <li className='hover:bg-gray-200 hover:text-black text-white py-4 px-6 w-full'>Analytics</li>
                                                <li className='hover:bg-gray-200 hover:text-black text-white py-4 px-6 w-full'>Contacts</li>
                                                <li className='hover:bg-gray-200 hover:text-black text-white py-4 px-6 w-full'>Link</li>
                                                <li className='hover:bg-gray-200 hover:text-black text-white py-4 px-6 w-full'>Account</li>
                                            </ul>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Navbar