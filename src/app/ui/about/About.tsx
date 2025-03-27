"use client";
import avatar from "@/public/avatar.png";
import {
    ArrowDownTrayIcon,
    RocketLaunchIcon,
    CodeBracketIcon,
    CommandLineIcon,
} from "@heroicons/react/24/solid";
import { downloadCV } from "@/lib/downloadCV";
import Image from "next/image";

const About: React.FC = () => {
    const skills = [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Node.js",
        "FastAPI",
        "Docker",
        "Java",
        "mongoDB",
        "SQL",
        "Spring Boot",
        "Python",
        "React Native",
        "Tailwind CSS",
        "SharePoint",
        "Power Automate",
        "Power Apps",
        "Github Workflow",
    ];

    return (
        <div>
            <div className="grid grid-cols-2 gap-4 items-center">
                <div className="md:col-span-1 col-span-2">
                    <Image
                        src={avatar.src}
                        width={0}
                        height={0}
                        alt="avatar"
                        style={{ width: "100%", height: "auto" }}
                        sizes="100vw"
                    />
                </div>
                <div className="md:col-span-1 col-span-2 md:mt-0 mt-4">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-2xl font-bold">About Me</h1>
                        <p className="text-sm">
                            Hello I&apos;m Kim, web developer based on Hong
                            Kong, a former sharepoint developer, I am good at
                        </p>
                        <div className="flex flex-row gap-3 flex-wrap">
                            {skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="p-2 border-1 border-[#2dd4bf] rounded-md"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                        <div className="mt-2">
                            <button
                                onClick={downloadCV}
                                className="bg-[#2dd4bf] p-3 rounded-4xl flex flex-row gap-3 cursor-pointer"
                            >
                                Download CV
                                <ArrowDownTrayIcon className="size-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-20">
                <h1 className="text-center text-4xl capitalize font-bold">
                    what i do
                </h1>
                <div className="grid grid-cols-3 mt-12 gap-6">
                    <div className="md:col-span-1 col-span-3 shadow-2xl p-4 rounded-2xl">
                        <div className="flex flex-col gap-2">
                            <CommandLineIcon className="size-10" />
                            <h1 className="text-2xl font-bold">
                                Backend Development
                            </h1>
                            <p className="text-sm text-left">
                                involves server-side programming, database
                                management, and API integration to ensure
                                seamless functionality of applications
                            </p>
                        </div>
                    </div>
                    <div className="md:col-span-1 col-span-3 shadow-2xl p-4 rounded-2xl">
                        <div className="flex flex-col gap-2">
                            <CodeBracketIcon className="size-10" />
                            <h1 className="text-2xl font-bold">
                                Frontend Development
                            </h1>
                            <p className="text-sm text-left">
                                focuses on creating user interfaces and
                                experiences using HTML, CSS, and JavaScript for
                                interactive web applications.
                            </p>
                        </div>
                    </div>
                    <div className="md:col-span-1 col-span-3 shadow-2xl p-4 rounded-2xl">
                        <div className="flex flex-col gap-2">
                            <RocketLaunchIcon className="size-10" />
                            <h1 className="text-2xl font-bold">Deployment</h1>
                            <p className="text-sm text-left">
                                to the process of releasing software
                                applications to production environments for
                                users to access and utilize.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
