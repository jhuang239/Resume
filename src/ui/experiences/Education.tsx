interface EducationProps {
    school: string;
    degree: string;
    major: string;
    startDate: string;
    endDate: string;
    description: string;
}

const Education: React.FC<EducationProps> = ({
    school,
    degree,
    major,
    startDate,
    endDate,
    description,
}) => {
    return (
        <div className="flex flex-col gap-2 shadow-2xl p-4 bg-[var(--background)] xl:h-50 h-60 rounded-md">
            <span className="text-xl font-bold capitalize">
                {degree}, in {major} at
                <span className="italic text-[#2dd4bf]"> {school}</span>
            </span>
            <span className="text-[#2dd4bf] font-bold">
                {startDate} - {endDate}
            </span>
            <p className="text-sm text-justify line-clamp-4">{description}</p>
        </div>
    );
};

export default Education;
