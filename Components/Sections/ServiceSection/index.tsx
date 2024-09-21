'use client';

import { ButtonService } from '@/Components/Ui/Buttons/ButtonService';
import { tabContent } from '@/data/tsContent/tabContent';
import { ServicesProps } from '@/types/interfaceService';
import Image from 'next/image';
import { useState } from 'react';

export const ServiceSection = ({img, alt}: ServicesProps) => {
    // State untuk menyimpan tab yang aktif
    const [activeTab, setActiveTab] = useState(0);

    // Data konten untuk setiap tab dengan judul

    return (
        <main id="service" className="w-full max-h-[500px] sm:h-full h-96 bg-page2 flex sm:flex-row flex-col items-center pb-16">
            <section className="sm:w-1/2 w-full h-full flex flex-col items-center pt-8 px-8 gap-4">
                <h1 className="sm:text-3xl text-xl font-bold">Our Service</h1>

                {/* Pagination */}
                <div className="w-full sm:h-80 h-56 flex flex-col mb-4 gap-8">
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
                    <div className="px-2 sm:h-60 h-52">
                        <h2 className="sm:text-xl text-lg font-semibold mb-2">{tabContent[activeTab].title}</h2>
                        <p className="text-justify sm:text-lg text-sm">{tabContent[activeTab].content}</p>
                    </div>
                </div>
                <div className='w-full flex justify-center'>
                    <ButtonService btnText="Learn More" />
                </div>
                {/* Pagination */}
            </section>

            <section className="sm:w-1/2 w-full h-full relative">
                <Image
                    src={img}
                    alt={alt}
                    width={500}
                    height={500}
                    className="w-96 h-96 object-cover hidden sm:block absolute sm:-top-80 sm:right-24"
                />
            </section>
        </main>
    );
};
