"use client"

import { LocationProps } from "@/types/interfaceLocation"
import Image from "next/image"

export const LocationSection = ({srcLocation, imageOffice, altOffice}: LocationProps) => {
    return (
        <main className="w-full sm:max-h-[500px] h-full flex sm:flex-row flex-col sm:gap-0 gap-4 sm:py-0 py-2">
            {/* location */}
            <section className="sm:w-1/2 w-full h-full flex flex-col justify-center items-center gap-4 pt-4">
                <h1 className="sm:text-3xl text-2xl font-bold">Location <span>Alpha Flight</span></h1>
                <div className="sm:w-full w-96 sm:max-h-[500px] h-96 flex items-center justify-center">
                    <iframe
                        src={srcLocation}
                        width="80%"  // Sesuaikan lebar dengan kontainer
                        height="100%" // Sesuaikan tinggi dengan kontainer
                        style={{ border: "0", }}
                        allowFullScreen
                        loading="lazy"
                    />
                </div>
            </section>

            <section className="sm:w-1/2 w-full h-full flex flex-col justify-center items-center">
                <div className="sm:w-full w-80 sm:h-full h-80 flex items-center justify-center">
                    <Image
                        src={imageOffice}
                        alt={altOffice}
                        width={600}
                        height={600}
                        className="w-full h-full object-cover"
                    />
                </div>
            </section>
        </main>
    )
}
