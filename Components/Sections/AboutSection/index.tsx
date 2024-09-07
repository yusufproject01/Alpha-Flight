import { ButtonAboutContact } from "@/Components/Ui/Buttons/ButtonAbout"
import { AboutProps } from "@/types/interfaceAbout"
import Image from "next/image"

export const AboutSection = ({ image, imageAbsolute, alt, altAbsolute, title, text }: AboutProps) => {
    return (
        <main id="about" className="w-full max-h-[500px] h-full flex items-center sm:mb-10 mt-16 sm:mt-0">
            <section className="w-full flex flex-col sm:flex-row sm:justify-between items-center sm:gap-0 gap-4 sm:px-20 px-8">
                <div className="sm:w-1\2 flex sm:relative gap-4 sm:gap-0 h-full">
                    <Image
                        src={image}
                        alt={alt}
                        width={600}
                        height={600}
                        className="sm:object-cover object-fill 
                    sm:w-80 w-28 sm:h-80 h-28 shadow-lg hover:brightness-75"/>
                    <Image
                        src={imageAbsolute}
                        alt={altAbsolute}
                        width={600}
                        height={600}
                        className="sm:absolute sm:-bottom-10 -bottom-12 sm:-right-20 -right-8 sm:object-cover object-fill
                    sm:w-72 w-28 sm:h-72 h-28 shadow-lg hover:brightness-75"/>
                </div>
                <div className="sm:w-1/2 w-full flex flex-col items-center gap-4">
                    <h1 className="sm:text-3xl text-xl font-bold">{title}</h1>
                    <p className="sm:text-xl text-sm text-justify">
                        {text}
                    </p>
                    <ButtonAboutContact btnText="About More"/>
                </div>
            </section>
        </main>
    )
}