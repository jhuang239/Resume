"use client";
import CircleProgress from "./CircleProgress";
import { Progress, ThemeProvider, createTheme } from "flowbite-react";

const professionalSkills = [
    { name: "communication", percentage: 85 },
    { name: "problem solving", percentage: 90 },
    { name: "teamwork", percentage: 80 },
    { name: "project management", percentage: 75 },
];

const technicalSkills = [
    { name: "javascript", percentage: 90 },
    { name: "react", percentage: 85 },
    { name: "typescript", percentage: 80 },
    { name: "node.js", percentage: 80 },
    { name: "sql", percentage: 75 },
    { name: "python", percentage: 65 },
    { name: "java", percentage: 60 },
];

const customTheme = createTheme({
    progress: {
        base: "",
        label: "",
        bar: "",
        color: {
            bg_green: "bg-[#2dd4bf]",
        },
    },
});

const SkillComponent: React.FC = () => {
    return (
        <div className="grid grid-cols-2 gap-4">
            <div className="md:col-span-1 col-span-2 flex flex-col gap-4 items-center">
                <h1 className="text-center text-4xl capitalize font-bold">
                    Technical skills
                </h1>
                <div className="flex flex-col gap-5 w-full self-center">
                    {technicalSkills.map((skill) => (
                        <div key={skill.name} className="flex flex-col gap-2">
                            <div className="flex justify-between items-center">
                                <span className="font-bold uppercase">
                                    {skill.name}
                                </span>
                                <span>{skill.percentage} %</span>
                            </div>
                            <ThemeProvider theme={customTheme}>
                                <Progress
                                    progress={skill.percentage}
                                    color="bg_green"
                                />
                            </ThemeProvider>
                        </div>
                    ))}
                </div>
            </div>
            <div className="md:col-span-1 col-span-2 md:mt-0 mt-4">
                <h1 className="text-center text-4xl capitalize font-bold">
                    professional skills
                </h1>
                <div className="grid grid-cols-2 gap-4 mt-8">
                    {professionalSkills.map((skill) => {
                        return (
                            <div
                                key={skill.name}
                                className="col-span-1 justify-self-center"
                            >
                                <div className="flex flex-col gap-4">
                                    <CircleProgress
                                        percentage={skill.percentage}
                                        size={160}
                                    />
                                    <span className="text-center font-bold font-md capitalize">
                                        {skill.name}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default SkillComponent;
