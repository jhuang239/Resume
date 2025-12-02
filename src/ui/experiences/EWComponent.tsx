import Experience from "@/ui/experiences/Experience";
import Education from "@/ui/experiences/Education";

const educations = [
    {
        school: "City University of Hong Kong",
        degree: "Bachelor of Engineering",
        major: "Information Engineering",
        startDate: "2020",
        endDate: "2024",
        description:
            "This major provides a balanced understanding of information engineering, covering networking, cybersecurity, and AI, while nurturing independent thinking and creativity, preparing me for diverse careers in technology and beyond.",
    },
    {
        school: "UOW College Hong Kong",
        degree: "Bachelor of Science",
        major: "Computer Science",
        startDate: "2019",
        endDate: "2020",
        description:
            "This one-year top-up program at UOW, accredited by the ACS, equips me with essential computer science skills and ensures a high-quality education for a successful career in the field.",
    },
    {
        school: "UOW College Hong Kong",
        degree: "Associate of Science",
        major: "ISD",
        startDate: "2017",
        endDate: "2019",
        description:
            "The program prepares me for computer science degrees and careers, focusing on software development, object-oriented design, programming languages, software testing, and essential soft skills like problem-solving and teamwork.",
    },
];

const experiences = [
    {
        position: "Full Stack Developer",
        company: "Gold Label Technology Limited",
        startDate: "Apr, 2025",
        endDate: "Present",
        description:
            "Developed and maintained the inventory system using modern web application frameworks like React, Node.js, Spring-boot. Deploy the application on AWS EC2 with docker container. \nDeveloped and upgraded the Android mobile application mainly for RFID Inventory system control the RFID scanner, stock in, stock out & stock take for managing the Inventory system.",
    },
    {
        position: "Software Engineer",
        company: "W3bvolution Limited",
        startDate: "Dec, 2022",
        endDate: "Jun, 2024",
        description:
            "Mainly focusing on system integration, Microsoft M365 application development Sharepoint, Powerapps, Power Automate, Power Pages",
    },
    {
        position: "Mobile Application Developer Intern",
        company: "Alpha AI Limited",
        startDate: "Dec, 2021",
        endDate: "Jan, 2022",
        description:
            "Responsible for mobile application maintenance, upgrade and develop. Mainly using React Native for mobile app development.",
    },
    {
        position: "Software Engineer",
        company: "Quantr Limited",
        startDate: "Jan, 2020",
        endDate: "Jul, 2020",
        description:
            "Responsible for developing the SharePoint web parts in the portal. Using React JS for development.",
    },
];

const EWComponent: React.FC = () => {
    return (
        <div className="grid grid-cols-2 md:gap-20 gap-10">
            <div className="md:col-span-1 col-span-2">
                <h1 className="text-4xl font-bold capitalize py-10">
                    Education
                </h1>
                <div className="flex flex-col gap-4 w-full self-center mt-4 justify-self-center">
                    {educations.map((education) => (
                        <Education
                            key={education.major}
                            school={education.school}
                            degree={education.degree}
                            major={education.major}
                            startDate={education.startDate}
                            endDate={education.endDate}
                            description={education.description}
                        />
                    ))}
                </div>
            </div>
            <div className="md:col-span-1 col-span-2">
                <h1 className="text-4xl font-bold capitalize py-10">
                    Work experiences
                </h1>
                <div className="flex flex-col gap-4 w-full self-center mt-4 justify-self-center">
                    {experiences.map((experiences, index) => (
                        <Experience
                            key={`${experiences.position}_${index}`}
                            position={experiences.position}
                            company={experiences.company}
                            startDate={experiences.startDate}
                            endDate={experiences.endDate}
                            description={experiences.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EWComponent;
