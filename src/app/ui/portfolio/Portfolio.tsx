"use client";
import { Carousel, ThemeProvider, createTheme } from "flowbite-react";
import shopco from "@/public/shopco.jpeg";
import eLearning from "@/public/E-learning.png";
import natours from "@/public/natours.jpeg";
import Image from "next/image";

const customTheme = createTheme({
    carousel: {
        root: {
            base: "relative h-full w-full xl:px-24 px-12 py-6",
            leftControl:
                "absolute left-0 top-0 flex h-full items-center justify-center px-2 focus:outline-none",
            rightControl:
                "absolute right-0 top-0 flex h-full items-center justify-center px-2 focus:outline-none",
        },
        indicators: {
            active: {
                off: "bg-white/50 hover:bg-white dark:text-gray-600 dark:bg-white cursor-pointer dark:hover:bg-white/50",
                on: "bg-white dark:bg-gray-400",
            },
            base: "h-3 w-3 rounded-full",
            wrapper:
                "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3",
        },
        item: {
            base: "absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2 cursor-auto",
            wrapper: {
                off: "w-full shrink-0 transform cursor-default snap-center",
                on: "w-full shrink-0 transform cursor-grab snap-center",
            },
        },
        control: {
            base: "cursor-pointer inline-flex h-8 w-8 items-center justify-center rounded-full group-focus:outline-none group-focus:ring-0 group-focus:ring-white sm:h-10 sm:w-10 dark:text-gray-600 dark:bg-white dark:group-hover:bg-white/50",
            icon: "h-5 w-5 sm:h-6 sm:w-6",
        },
        scrollContainer: {
            base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-hidden scroll-smooth rounded-lg",
            snap: "snap-x",
        },
    },
});

const Portfolio: React.FC = () => {
    return (
        <ThemeProvider theme={customTheme}>
            <h1 className="text-2xl font-bold text-center">
                Featured Portfolio
            </h1>
            <div className="w-full md:h-120 sm:h-180 h-220">
                <Carousel slideInterval={3000}>
                    <div className="flex h-full">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="md:col-span-1 col-span-2 justify-self-center">
                                <Image
                                    src={shopco.src}
                                    alt=""
                                    className="object-cover md:h-100 h-85"
                                    width={shopco.width} // Provide any reasonable base width
                                    height={shopco.height} // Provide any reasonable base height
                                />
                            </div>
                            <div className="h-full w-full md:col-span-1 col-span-2">
                                <div className="flex flex-col gap-2">
                                    <span className="text-[#0BCEAF] uppercase font-bold text-md">
                                        web development
                                    </span>
                                    <h1 className="text-2xl font-bold">
                                        Shopco
                                    </h1>
                                    <p className="text-md font-bold">
                                        Backend & Frontend Development,
                                        Deployment
                                    </p>
                                    <p className="text-sm text-justify">
                                        ShopCo is an e-commerce platform
                                        designed for small businesses,
                                        specializing in clothing and fashion. It
                                        uses Node.js for the backend, PostgreSQL
                                        for the database, and React.js for the
                                        frontend, featuring a user-friendly
                                        interface built with Tailwind CSS, React
                                        Query for performance, and React Router
                                        for seamless navigation.
                                    </p>
                                    <div>
                                        <button
                                            className="bg-[#0BCEAF] py-2 px-4 rounded-4xl flex flex-row gap-3 cursor-pointer capitalize"
                                            onClick={() => {
                                                window.open(
                                                    "https://shopco.codemonkeykim.dev/",
                                                    "_blank"
                                                );
                                            }}
                                        >
                                            view details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex h-full">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="md:col-span-1 col-span-2 justify-self-center">
                                <Image
                                    src={eLearning.src}
                                    alt=""
                                    className="object-cover md:h-100 h-80 w-auto"
                                    width={eLearning.width} // Provide any reasonable base width
                                    height={eLearning.height} // Provide any reasonable base height
                                />
                            </div>
                            <div className="h-full w-full md:col-span-1 col-span-2">
                                <div className="flex flex-col gap-2">
                                    <span className="text-[#0BCEAF] uppercase font-bold text-md">
                                        Mobile App Development
                                    </span>
                                    <h1 className="text-2xl font-bold">
                                        AI E-Learning
                                    </h1>
                                    <p className="text-md font-bold">
                                        FastAPI & React Native
                                    </p>
                                    <p className="text-sm text-justify">
                                        The AI E-learning app is my FYP, the app
                                        enables seamless knowledge sharing among
                                        students, offering 24/7 online learning
                                        powered by Conversational AI. It
                                        features a Private AI Assistant for
                                        personalized support, built with
                                        FastAPI, MongoDB, Firebase, React
                                        Native, LangChain, and the OpenAI API,
                                        fostering an interactive & collaborative
                                        educational environment.
                                    </p>
                                    <div>
                                        <button
                                            className="bg-[#0BCEAF] py-2 px-4 rounded-4xl flex flex-row gap-3 cursor-pointer capitalize"
                                            onClick={() => {
                                                window.open(
                                                    "https://docs.google.com/presentation/d/13dKlViDp5C55HF5yFSEE1TYe0F6ckpf1NIOx2pea7kw/edit?usp=sharing",
                                                    "_blank"
                                                );
                                            }}
                                        >
                                            view details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex h-full">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="md:col-span-1 col-span-2 justify-self-center">
                                <Image
                                    src={natours.src}
                                    alt=""
                                    className="object-cover md:h-100 h-80"
                                    width={natours.width} // Provide any reasonable base width
                                    height={natours.height} // Provide any reasonable base height
                                />
                            </div>
                            <div className="h-full w-full md:col-span-1 col-span-2">
                                <div className="flex flex-col gap-4">
                                    <span className="text-[#0BCEAF] uppercase font-bold text-md">
                                        Web Development
                                    </span>
                                    <h1 className="text-2xl font-bold">
                                        Natours
                                    </h1>
                                    <p className="text-md font-bold">
                                        HTML & CSS
                                    </p>
                                    <p className="text-sm text-justify">
                                        Natours is a visually striking website
                                        built with HTML and CSS, showcasing
                                        advanced CSS techniques using SASS.
                                        Credited to Jonas Schmedtmann, whose
                                        Udemy course guided my learning, it
                                        features responsive layouts and
                                        interactive elements, reflecting my
                                        commitment to modern web design and
                                        enhancing user experience.
                                    </p>
                                    <div>
                                        <button
                                            className="bg-[#0BCEAF] py-2 px-4 rounded-4xl flex flex-row gap-3 cursor-pointer capitalize"
                                            onClick={() => {
                                                window.open(
                                                    "https://natours.codemonkeykim.dev/",
                                                    "_blank"
                                                );
                                            }}
                                        >
                                            view details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>
        </ThemeProvider>
    );
};

export default Portfolio;
