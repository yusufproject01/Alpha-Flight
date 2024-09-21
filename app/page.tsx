
import { AboutSection } from "@/Components/Sections/AboutSection";
import { HeroSection } from "@/Components/Sections/HeroSection";
import { ServiceSection } from "@/Components/Sections/ServiceSection";
import heroData from "@/data/content/herotext.json";
import aboutData from "@/data/content/abouttext.json";
import serviceData from "@/data/content/serviceContent.json"
import locationData from "@/data/content/locationData.json"
import partner from "@/data/content/partnership2.json"
import { LocationSection } from "@/Components/Sections/Location";
import { PartnershipSection } from "@/Components/Sections/Partnership";
import { Footer } from "@/Components/Layouts/Footer";


export default function Home() {
  return (
    <main id="home" className="h-auto">
      <HeroSection
        brand={heroData.title}
        text={heroData.text}
        image={heroData.image}
      />
      <AboutSection
        image={aboutData.image}
        imageAbsolute={aboutData.imageAbsolute}
        alt={aboutData.alt}
        altAbsolute={aboutData.altAbsolute}
        title={aboutData.title}
        text={aboutData.text}
      />
      <ServiceSection
        img={serviceData.img}
        alt={serviceData.alt}
      />
      <LocationSection
        srcLocation={locationData.srcLocation}
        imageOffice={locationData.imageOffice}
        altOffice={locationData.altOffice}
      />
      <PartnershipSection
        content={partner.content}
      />
      <Footer/>
    </main>
  );
}
