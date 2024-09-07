'use client';

import { ButtonService } from '@/Components/Ui/Buttons/ButtonService';
import { tabContent } from '@/data/tabs/tabContent';
import { ServicesProps } from '@/types/interfaceService';
import Image from 'next/image';
import { useState } from 'react';

export const ServiceSection = ({img, alt}: ServicesProps) => {
    // State untuk menyimpan tab yang aktif
    const [activeTab, setActiveTab] = useState(0);

    // Data konten untuk setiap tab dengan judul

    return (
        <main id="service" className="w-full max-h-[400px] h-full bg-page2 flex sm:flex-row flex-col items-center">
            <section className="sm:w-1/2 w-full h-full flex flex-col items-center pt-8 px-8 gap-4">
                <h1 className="sm:text-3xl text-xl font-bold">Our Service</h1>

                {/* Pagination */}
                <div className="w-full h-80 flex flex-col gap-8">
                    {/* Tab Buttons */}
                    <div className="flex justify-center w-full gap-4">
                        {tabContent.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTab(index)}
                                className={`flex flex-col items-center sm:w-16 w-12 gap-2 ${activeTab === index ? 'text-secondary' : 'text-gray-500'}`}
                            >
                                <h1 className="text-lg font-bold hover:scale-110">{index + 1}</h1>
                                <div className={`w-full h-2 rounded-full ${activeTab === index ? 'bg-secondary' : 'bg-slate-700'} hover:scale-110`} />
                            </button>
                        ))}
                    </div>

                    {/* Active Tab Content */}
                    <div className="px-2">
                        <h2 className="sm:text-xl text-lg font-semibold mb-2">{tabContent[activeTab].title}</h2>
                        <p className="text-justify sm:text-lg text-sm">{tabContent[activeTab].content}</p>
                    </div>
                </div>
                <div>
                    <ButtonService btnText="Learn More" />
                </div>
                {/* Pagination */}
            </section>

            <section className="w-1/2 h-full sm:flex hidden flex-col items-center pt-8 relative">
                <Image
                    src={img}
                    alt={alt}
                    width={500}
                    height={500}
                    className="w-80 h-80 absolute -top-12 right-10"
                />
            </section>
        </main>
    );
};
