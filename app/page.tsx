
import { AboutSection } from "@/Components/Sections/AboutSection";
import { HeroSection } from "@/Components/Sections/HeroSection";
import { ServiceSection } from "@/Components/Sections/ServiceSection";
import heroData from "@/data/content/herotext.json";
import aboutData from "@/data/content/abouttext.json";
import serviceData from "@/data/content/serviceContent.json"


export default function Home() {
  return (
    <main id="home" className="h-screen mb-20 gap-20">
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
    </main>
  );
}
