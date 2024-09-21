"use client";

import { ButtonPartnership } from "@/Components/Ui/Buttons/ButtonPartnership";
import { CardPartnership } from "@/Components/Ui/Cards/CardPartnership";
import { partnershipContent as content } from "@/data/tsContent/partnershipContent";
import partnership from "@/data/content/partnership.json";
import { PartnershipProps } from "@/types/interfacepartnership";

export const PartnershipSection = ({content}: PartnershipProps) => {
    return (
        <main className="w-full sm:h-[500px] h-full flex sm:flex-row flex-col sm:gap-0 gap-4 sm:py-12 py-6 sm:mt-2 mt-4 bg-page2">
            <section className="sm:w-1/2 w-full h-full flex flex-col pt-4 items-center sm:gap-6 gap-2">
                <h1 className="sm:text-3xl text-xl font-bold">Partnership</h1>
                <p className="text-justify px-6 w-full sm:h-64 h-24">
                    {content}
                </p>
                <ButtonPartnership btnText="Partnership" />
            </section>

            <section className="sm:w-1/2 w-full h-full grid place-items-center justify-items-center grid-cols-2 gap-4">
                {partnership.map((partner) => (
                    <CardPartnership
                        key={partner.id}  // Pastikan partner memiliki id unik untuk digunakan sebagai key
                        img={partner.image}
                        alt={partner.alt}
                        name={partner.Name}
                        content={partner.content}
                    />
                ))}
            </section>
        </main>
    );
};
