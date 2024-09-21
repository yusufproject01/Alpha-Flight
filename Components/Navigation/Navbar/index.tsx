"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { FaPlus } from "react-icons/fa"
import { FiPlus } from "react-icons/fi"
import { GiHamburgerMenu } from "react-icons/gi"
import { IoClose } from "react-icons/io5"

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [rotate, setRotate] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY > 10;
            setScrolled(offset)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const handleClick = () => {
        setIsOpen(!isOpen)
        setRotate(true)
        setTimeout(() => {
            setRotate(false)
        }, 100)
    }

    const handleMenu = () => {

    }

    return (
        <nav
            id="navbar"
            className={`w-full h-14 sm:h-14 xl:h-20
            flex items-center justify-between
            sm:px-12 pr-6 fixed z-50 text-brand
            ${scrolled || isOpen ?
                    'bg-primary transition-all duration-500 ease-in-out' :
                    'bg-transparent'
                }`}>
            <Link
                href={'/'}
                className="h-full text-center flex items-center
                "
            >
                <Image
                    src="/logo/logo3.png"
                    alt="logo"
                    width={100}
                    height={100}
                    className="relative w-[80px] sm:w-[100px] h-[65px] sm:h-[80px]" />
            </Link>
            <div>
                {isOpen ?
                    <button
                        onClick={() => handleClick()}
                        className={`transition-all duration-500 ease-in
                            ${rotate ? 'rotate-10' : 'rotate-45'}`}
                    >
                        <FiPlus size={30} />
                    </button> :
                    <button
                        onClick={() => handleClick()}
                        className={`md:hidden transition-all duration-500 ease-in
                        ${rotate ? 'rotate-45' : 'rotate-10'}`}>
                        <GiHamburgerMenu size={30} />
                    </button>
                }
                <div
                    className={`sm:h-full xl:w-96 text-base font-semibold
                sm:flex xl:flex-row items-center xl:justify-between gap-6
                ${isOpen ? 'flex flex-col bg-secondary h-64 w-80 mx-auto rounded-md top-14 right-0 left-0 pt-4 absolute transition-all duration-500 ease-in-out' : 'hidden'}`}>
                    <Link
                        href="/"
                        className="hover:scale-110 hover:font-semibold hover:text-textHover">
                        <button onClick={() => setIsOpen(false)}>Home</button>
                    </Link>
                    <Link
                        href="/"
                        className="hover:scale-110 hover:font-semibold hover:text-textHover">Order</Link>
                    <Link
                        href="#about"
                        className="hover:scale-110 hover:font-semibold hover:text-textHover">
                        <button onClick={() => setIsOpen(false)}>About</button>
                    </Link>
                    <Link
                        href="#service"
                        className="hover:scale-110 hover:font-semibold hover:text-textHover">
                        <button onClick={() => setIsOpen(false)}>Service</button>
                    </Link>
                    <Link
                        href="#contact"
                        className="hover:scale-110 hover:font-semibold hover:text-textHover">
                        <button onClick={() => setIsOpen(false)}>Contact</button>
                    </Link>
                </div>
            </div>
        </nav>
    )
}