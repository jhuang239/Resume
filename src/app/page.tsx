import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { Facebook, Github, Linkedin, X } from "@/ui/social-media-icons/icons";
import icon from "@/public/icon.jpg";
import About from "@/ui/about/About";
import Portfolio from "@/ui/portfolio/Portfolio";
import SkillComponent from "@/ui/skills/SkillComponent";
import EWComponent from "@/ui/experiences/EWComponent";
import Image from "next/image";

export default function Home() {
    return (
        <div>
            <div className="min-h-[600px] grid grid-cols-2 gap-4 py-12 px-6 items-center">
                <div className="md:col-span-1 col-span-2 md:order-1 order-2 justify-self-center">
                    <div className="flex flex-col gap-4 items-center md:items-start sm:mt-4 mt-0">
                        <div>
                            <span className="text-md font-bold text-white bg-[#2dd4bf] py-2 px-4 rounded-tl-2xl rounded-r-2xl">
                                Hello, I&apos;m
                            </span>
                        </div>
                        <h1 className="text-4xl font-bold">Kim Wong</h1>
                        <h4 className="font-bold text-xl capitalize">
                            Software Engineer
                        </h4>
                        <div className="flex flex-row items-end gap-2">
                            <EnvelopeIcon className="size-4" />
                            <span className="text-sm">
                                jk.wong1118@gmail.com
                            </span>
                        </div>
                        <div className="flex flex-row items-end gap-2">
                            <MapPinIcon className="size-4" />
                            <span className="text-sm">Kownloon, Hong Kong</span>
                        </div>
                        <div className="flex flex-row gap-6 mt-4">
                            <a
                                href="https://www.facebook.com/jk.wong1118/"
                                target="_blank"
                                className="hover:opacity-80"
                            >
                                <Facebook />
                            </a>
                            <a
                                href="https://github.com/jhuang239"
                                target="_blank"
                                className="hover:opacity-80"
                            >
                                <Github />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/kim-wong-ab47a220a/"
                                target="_blank"
                                className="hover:opacity-80"
                            >
                                <Linkedin />
                            </a>
                            <a href="#" className="hover:opacity-80">
                                <X />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="md:col-span-1 col-span-2 md:order-2 order-1">
                    <div className="flex justify-center">
                        <Image
                            src={icon.src}
                            width={icon.width}
                            height={icon.height}
                            alt="Kim Wong"
                            className="w-80 h-80 rounded-full border-8 border-gray-300 shadow-2xl"
                        />
                    </div>
                </div>
            </div>
            <div
                id="about"
                className="w-screen relative left-[50%] right-[50%] mx-[-50vw] bg-[var(--background)] text-[var(--foreground)] py-12"
            >
                <div className="container mx-auto px-6">
                    <About />
                </div>
            </div>
            <div
                id="portfolio"
                className="w-screen relative left-[50%] right-[50%] mx-[-50vw] text-[var(--foreground)] py-4"
            >
                <div className="container mx-auto px-6">
                    <Portfolio />
                </div>
            </div>
            <div
                id="skills"
                className="w-screen relative left-[50%] right-[50%] mx-[-50vw] bg-[var(--background)] text-[var(--foreground)] py-12"
            >
                <div className="container mx-auto px-6">
                    <SkillComponent />
                </div>
            </div>
            <div
                id="experiences"
                className="w-screen relative left-[50%] right-[50%] mx-[-50vw] text-[var(--foreground)] pt-4 pb-24"
            >
                <div className="container mx-auto px-6">
                    <EWComponent />
                </div>
            </div>
        </div>
    );
}
