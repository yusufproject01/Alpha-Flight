import Image from "next/image"
import { ButtonHeroContact, ButtonHeroMore } from "@/Components/Ui/Buttons/ButtonHero"
import { FeaturesSection } from "../FeaturesSection"
import { HeroProps } from "@/types/interfaceHero"
import { fontBrand } from "@/public/fonts/heroFont"


export const HeroSection = ({ brand, text, image }: HeroProps) => {
    return (
        <section id="hero" className="w-full sm:max-h-[600px] max-h-[500px] h-full z-0 relative sm:mb-28 mb-12 overflow-hidden">
            <Image
                src={image}
                alt="hero"
                width={900}
                height={900}
                className="sm:object-cover object-fill sm:max-h-[600px] h-full w-full brightness-50 "
            />
            <div
                className="absolute top-1/2 left-1/2 transform
                sm:max-w-5xl max-w-xs w-full flex flex-col gap-3
                -translate-x-1/2 -translate-y-1/2 hover:cursor-pointer">
                <p className="sm:text-xl text-sm font-semibold text-brand text-center">WELCOME TO</p>
                <h1 className={`${fontBrand.className} text-3xl sm:text-6xl sm:text-brand text-textHover sm:hover:text-textHover hover:text-brand font-bold text-center`}>
                    {brand}
                </h1>
                <p className="sm:text-base text-sm font-semibold text-brand text-justify">
                    {text}
                </p>
                <div className="w-full flex justify-center mt-4 gap-20">
                    <ButtonHeroContact btnText="Contact Us" />
                    <ButtonHeroMore btnText="Learn More" />
                </div>
            </div>
        </section>
    )
}