import { CardPartnershipProps } from "@/types/interfaceCardpartnership"
import Image from "next/image"

export const CardPartnership = ({img, alt, name, content}: CardPartnershipProps) => {
    return (
        <main className="sm:max-w-72 max-w-40 w-full sm:max-h-28 max-h-24 h-full flex gap-4 items-center px-2 bg-white shadow-md">
            <div className="sm:w-40 w-20 sm:h-24 h-20 shadow-sm rounded-sm">
                <Image
                    src={img}
                    alt={alt}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="flex flex-col gap-2">
                <h1>{name}</h1>
                <p className="text-xs">{content}</p>
            </div>
        </main>
    )
}