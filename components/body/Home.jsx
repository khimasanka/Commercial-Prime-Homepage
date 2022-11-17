import React from "react";
import Navbar from '../navbar/Navbar';
import './styles.css'

function Home() {

    return (
        <div className='flex flex-col h-screen'>
            <div>
                <Navbar />
            </div>

            <div className='w-full flex flex-col bg-[#151515]'>
                <div className='flex h-36 w-full'>
                    <div className='greeting-wrap flex items items-center sm:my-4 my-20 xl:mx-40 lg:mx-28 md:mx-20 sm:mx-10 justify-between w-full'>
                        <div className='flex justify-center items-center flex-shrink-0'>
                            <h1 className="font-bold sm:text-xl min-[425px]:text-md min-[425px]:mx-4 text-x1 font-['Inter'] lg:text-2xl xl:text-2xl">
                                <span className='text-white'>Hello, </span>
                                <span style={{ color: '#DBB659' }}>Mayushan!
                                </span>
                            </h1>
                            <button type="button" className="btn-active bg-[#2DAF32] xl:m-8 2xl:m-8 lg:m8 md:m-8 hover:bg-green-700 w-20 h-8 text-white font-bold  px-4 rounded min-[425px]:m-2"><h1>Active</h1></button>
                        </div>
                        <div className=' md:block'>
                            <div className='long-wrap ml-10 flex items-baseline space-x-4 '>
                                <button type="button" className="long-btn bg-[#343333] m-8 hover:bg-[#6D6C6C] w-50 h-8 text-[#B0B0B0] text-xs px-4 xl:rounded md:rounded lg:rounded sm:rounded rounded-full">
                                    <h1 className="min-[425px]:hidden lg:block md:block sm:block max-[320px]:hidden">+ Create New Profile</h1>
                                    <h1 className="plus-mark xl:hidden lg:hidden md:hidden sm:hidden">+</h1>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full flex-grow  bg-[#151515]'>
                <div className='flex item-center w-full'>
                    <div id='cardWrapper' className='flex lg:flex-row xl:flex-row md:flex-col sm:flex-col items items-center gap-12 xl:mx-44 lg:mx-32 w-full max-[905px]:flex-col'>

                        <div id='card1' className='flex flex-item items gap-2'>
                            <div className='flex justify-center items-center'>
                                <div className='w-[335px] h-[200px] rounded-xl shadow-black shadow-lg mx-auto  p-[2px] border-[#DBB659] border-2'>
                                    <div className="bg-[#060B05] flex flex-col justify-between h-full rounded-xl">
                                        <div className="bg-[url('https://res.cloudinary.com/db0ntoydi/image/upload/v1668565282/logo_lhmf15.png')] w-full h-full bg-no-repeat bg-right">
                                            <div className='flex justify-center items-center my-6 gap-28'>
                                                <div >
                                                    <img src="https://res.cloudinary.com/db0ntoydi/image/upload/v1668565281/eye_lkyiir.png" alt="view" />
                                                </div>
                                                <div>
                                                    <button className='rounded-l-md border-stone-500 pb-1 border-2 w-20 h-7 text-sm font-medium  text-[#898989]'>Inactive</button>
                                                    <button className='rounded-r-md pb-1 h-7 w-16 text-sm font-medium  bg-[#DBB659] hover:bg-[#E3C783]'>Active</button>
                                                </div>
                                            </div>
                                            <div className='flex justify-center flex-col mx-6 pt-8'>
                                                <h1 className='flex text-[#DBB659] text-xl font-semibold'>Supun Mayushan</h1>
                                                <h1 className='text-[#DBB659] text-xs font-medium'>CEO & Head of Innovation</h1>
                                                <h1 className='text-[#DBB659] text-[10px]'>Commercial Technologies Plus</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id='card2' className='flex flex-item items gap-2'>
                            <div className='flex justify-center items-center'>
                                <div className='w-[335px] h-[200px] rounded-xl shadow-black shadow-lg mx-auto  bg-gradient-to-r p-[2px] from-[#595B58] via-[#282B27] to-[#282B27]'>
                                    <div className="bg-[#060B05] flex flex-col justify-between h-full rounded-xl">
                                        <div className="bg-[url('https://res.cloudinary.com/db0ntoydi/image/upload/v1668565282/logo_lhmf15.png')] w-full h-full bg-no-repeat bg-right">
                                            <div className='flex justify-center items-center my-6 gap-28'>
                                                <div >
                                                    <img src="https://res.cloudinary.com/db0ntoydi/image/upload/v1668565281/eye_lkyiir.png" alt="view" />
                                                </div>
                                                <div>
                                                    <button className='rounded-l-md bg-[#898989] border-stone-500 pb-1  w-20 h-7 text-sm font-medium '>Inactive</button>
                                                    <button className='rounded-r-md pb-1 h-7 w-16 text-sm font-medium text-[#898989] border-2 border-stone-500'>Active</button>
                                                </div>
                                            </div>
                                            <div className='flex justify-center flex-col mx-6 pt-8'>
                                                <h1 className='flex text-[#C6C6C6] text-xl font-semibold'>Supun Mayushan</h1>
                                                <h1 className='text-[#C6C6C6] text-xs font-medium'>Product Manager</h1>
                                                <h1 className='text-[#C6C6C6] text-[10px]'>Billable Pvt. Ltd.</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home