import React from 'react'
import Link from "next/link"
import { FaPhoneAlt } from "react-icons/fa"
import { AiFillMail } from "react-icons/ai"
import Image from "next/image"


const Data = [
    {
        key: 1,
        label: "Home",
        link: "/",
    },

    {
        key: 2,
        label: "About",
        link: "/About",

    },

    {
        key: 3,
        label: "Practice area",
        link: "/Practice"
    },


    {
        key: 4,
        label: "Blog",
        link: "/Blog"
    },

    {
        key: 5,
        label: "Contacto",
        link: "/Contact"
    },
]

const Navbar = () => {
    return (
        <nav>
            <div className="bg-[#1A1C2E] h-28 lg:w-full lg:h-9 lg:px-44 ">
                <div className="flex flex-col lg:flex lg:flex-row justify-between">
                    <div className="flex flex-col lg:flex lg:flex-row lg:space-x-52 ">
                        <div className="flex flex-row text-white">
                            <FaPhoneAlt className="text-Dorado" />
                            <p>1234567890</p>
                        </div>
                        <div className="flex flex-row text-white">
                            <AiFillMail className="text-Dorado" />
                            <p>Mesadeabogados@gmail.com</p>
                        </div>
                    </div>
                    <div className="bg-Dorado hover:drop-shadow-lg text-center pt-1 text-white hover:text-gray h-9 w-40">
                        Lorem ipsums
                    </div>
                </div>
            </div>
            <div className='relative '>
                <Image src="/images/background.svg" width={1604} height={783} alt="Image" className="w-full" />
                <div className="absolute inset-0 flex text-white text-xl lg:px-44">
                    <div className="bg-transparent border-gray-200 px-2 sm:px-4 py-2.5 rounded ">
                        <div className="container flex flex-wrap items-center justify-between mx-auto">
                            <a href="https://flowbite.com/" className="flex items-center">
                                <span className="self-center  font-semibold whitespace-nowrap text-4xl text-Dorado">LOGO</span>
                            </a>
                            <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400  dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                            </button>
                            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                                <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0   dark:border-gray-700">
                                    {Data.map((item) => (
                                        <li key={item.key}>
                                            <Link href={item.link} className="block py-2 pl-3 pr-4 text-white" aria-current="page">
                                                {item.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar