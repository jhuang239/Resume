"use client";
import avatar from "@/public/avatar.png";
import {
    ArrowDownTrayIcon,
    RocketLaunchIcon,
    CodeBracketIcon,
    CommandLineIcon,
} from "@heroicons/react/24/solid";

const About: React.FC = () => {
    const skills = [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Node.js",
        "FastAPI",
        "Docker",
        "Tailwind CSS",
        "sharepoint",
        "Power Automate",
        "Power Apps",
        "github actions",
    ];

    return (
        <div>
            <div className="grid grid-cols-2 gap-4 items-center">
                <div className="md:col-span-1 col-span-2">
                    <img src={avatar.src} alt="avatar" />
                </div>
                <div className="md:col-span-1 col-span-2">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-2xl font-bold">About Me</h1>
                        <p className="text-sm">
                            Hello I'm Kim, web developer based on Hong Kong, a
                            former sharepoint developer, I am good at
                        </p>
                        <div className="flex flex-row gap-3 flex-wrap">
                            {skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="p-2 border-1 border-[##82c6ba] rounded-md"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                        <div className="mt-2">
                            <button className="bg-[#82c6ba] p-3 rounded-4xl flex flex-row gap-3 cursor-pointer">
                                Download CV
                                <ArrowDownTrayIcon className="size-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-40">
                <h1 className="text-center text-4xl capitalize font-bold">
                    what i do
                </h1>
                <div className="grid grid-cols-3 mt-12 gap-6">
                    <div className="md:col-span-1 col-span-3">
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
                    <div className="md:col-span-1 col-span-3">
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
                    <div className="md:col-span-1 col-span-3">
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
