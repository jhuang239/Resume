import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { Facebook, Github, Linkedin, X } from "@/ui/social-media-icons/icons";
import icon from "@/public/icon.jpg";
import About from "./ui/about/About";
import Portfolio from "./ui/portfolio/Portfolio";

export default function Home() {
    return (
        <div>
            <div className="min-h-[600px] grid grid-cols-2 gap-4 py-12  items-center">
                <div className="md:col-span-1 col-span-2 md:order-1 order-2">
                    <div className="flex flex-col gap-4 sm:justify-center items-center md:items-start">
                        <div>
                            <span className="text-md font-bold text-white bg-[#82c6ba] py-2 px-4 rounded-tl-2xl rounded-r-2xl">
                                Hello, I'm
                            </span>
                        </div>
                        <h1 className="text-4xl font-bold">Kim Wong</h1>
                        <h4 className="font-bold text-xl capitalize">
                            web developer
                        </h4>
                        <div className="flex flex-row items-end gap-2">
                            <EnvelopeIcon className="size-4" />
                            <span className="text-sm">
                                jk.wong1118@gmail.com
                            </span>
                        </div>
                        <div className="flex flex-row items-end gap-2">
                            <PhoneIcon className="size-4" />
                            <span className="text-sm">+852 57100591</span>
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
                        <img
                            src={icon.src}
                            alt="Kim Wong"
                            className="w-80 h-80 rounded-full border-8 border-gray-300 shadow-2xl"
                        />
                    </div>
                </div>
            </div>
            <div className="w-screen relative left-[50%] right-[50%] mx-[-50vw] bg-[var(--background)] text-[var(--foreground)] py-12">
                <div className="container mx-auto px-6">
                    <About />
                </div>
            </div>
            <div className="w-screen relative left-[50%] right-[50%] mx-[-50vw] text-[var(--foreground)] py-12">
                <div className="container mx-auto px-6">
                    <Portfolio />
                </div>
            </div>
        </div>
    );
}
