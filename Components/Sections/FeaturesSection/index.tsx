import Link from "next/link"
import { BsChatLeftText } from "react-icons/bs"
import { FaRegUser } from "react-icons/fa"
import { IoAirplaneOutline } from "react-icons/io5"
import { MdOutlineLoyalty, MdOutlinePlace } from "react-icons/md"


export const FeaturesSection = () => {
    return (
        <section className="w-full sm:h-36 h-20 absolute sm:-bottom-20 -bottom-10 flex justify-center">
            <div
                className="sm:max-w-4xl max-w-sm w-full h-full 
                            flex justify-around items-center bg-white shadow-md rounded-md">
                <Link
                    href={'/'}
                    className="flex justify-center items-center 
                                sm:w-28 w-16 sm:h-28 h-16 text-secondary 
                                border-2 border-slate-300 bg-white hover:brightness-75 rounded-sm group"
                >
                    <IoAirplaneOutline className="text-2xl sm:text-5xl sm:group-hover:hidden group-focus:hidden transition-all ease-in-out duration-500" />
                    <h1 className="hidden sm:group-hover:block text-xs sm:text-lg font font-semibold group-focus:block transition-all ease-in-out duration-500">Booking</h1>
                </Link>
                <Link
                    href={'/'}
                    className="flex justify-center items-center 
                                sm:w-28 w-16 sm:h-28 h-16 text-secondary 
                                border-2 border-slate-300 bg-white hover:brightness-75 rounded-sm group"
                >
                    <MdOutlinePlace className="text-2xl sm:text-5xl sm:group-hover:hidden group-focus:hidden transition-all ease-in-out duration-500" />
                    <h1 className="hidden sm:group-hover:block text-xs sm:text-lg font font-semibold group-focus:block transition-all ease-in-out duration-500">Place</h1>
                </Link>
                <Link
                    href={'/'}
                    className="flex justify-center items-center 
                                sm:w-28 w-16 sm:h-28 h-16 text-secondary 
                                border-2 border-slate-300 bg-white hover:brightness-75 rounded-sm group"
                >
                    <MdOutlineLoyalty className="text-2xl sm:text-5xl sm:group-hover:hidden group-focus:hidden transition-all ease-in-out duration-500" />
                    <h1 className="hidden sm:group-hover:block text-xs sm:text-lg font font-semibold group-focus:block transition-all ease-in-out duration-500">Loyality</h1>
                </Link>
                <Link
                    href={'/'}
                    className="flex justify-center items-center 
                                sm:w-28 w-16 sm:h-28 h-16 text-secondary 
                                border-2 border-slate-300 bg-white hover:brightness-75 rounded-sm group"
                >
                    <BsChatLeftText className="text-2xl sm:text-5xl sm:group-hover:hidden group-focus:hidden transition-all ease-in-out duration-500" />
                    <h1 className="hidden sm:group-hover:block text-xs sm:text-lg font font-semibold group-focus:block transition-all ease-in-out duration-500">Support</h1>
                </Link>
                <Link
                    href={'/'}
                    className="flex justify-center items-center 
                                sm:w-28 w-16 sm:h-28 h-16 text-secondary 
                                border-2 border-slate-300 bg-white hover:brightness-75 rounded-sm group"
                >
                    <FaRegUser className="text-2xl sm:text-5xl sm:group-hover:hidden group-focus:hidden transition-all ease-in-out duration-500" />
                    <h1 className="hidden sm:group-hover:block text-xs sm:text-lg font font-semibold group-focus:block transition-all ease-in-out duration-500">Showcase</h1>
                </Link>
            </div>
        </section>
    )
}