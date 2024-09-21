import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
    return (
        <main className="w-full sm:h-80 h-36 flex flex-col justify-between items-center bg-secondary">
            <section className="w-full h-1/3 flex justify-center items-center">
                <Image
                    src="/logo/logo3.png"
                    alt="logo"
                    width={100}
                    height={100}
                    className="w-[80px] sm:w-[100px] h-[65px] sm:h-[80px]"
                />
            </section>
            <section className="w-full h-1/3 flex justify-center items-center text-white sm:text-lg text-xs sm:gap-8 gap-2">
                <Link href={'/'}>Home</Link>
                <Link href={'/'}>Order</Link>
                <Link href={'/'}>About</Link>
                <Link href={'/'}>Service</Link>
                <Link href={'/'}>Partnership</Link>
                <Link href={'/'}>Contact</Link>
            </section>
            <section className="w-full h-1/3 flex justify-center items-center">
                <h1 className="text-white sm:text-lg text-xs italic">
                    Alpha Flight &copy; 2024 All Rights Reserved
                </h1>
            </section>
        </main>
    );
};