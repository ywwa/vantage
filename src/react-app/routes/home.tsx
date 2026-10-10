import About from "@/components/home/about";
import Contact from "@/components/home/contact";
import Experience from "@/components/home/experience";
import Hero from "@/components/home/hero";
import Projects from "@/components/home/projects";
import Skills from "@/components/home/skills";
import Work from "@/components/home/work";

export default function HomePage() {
    return (
        <div className="w-full">
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Work />
            <Skills />
            <Contact />
        </div>
    );
}
