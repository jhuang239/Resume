interface ExperienceProps {
    position: string;
    company: string;
    startDate: string;
    endDate: string;
    description: string;
}

const Experience: React.FC<ExperienceProps> = ({
    position,
    company,
    startDate,
    endDate,
    description,
}) => {
    console.log(position, company, startDate, endDate, description);

    return (
        <div className="flex flex-col gap-2 shadow-2xl p-4 bg-[var(--background)] xl:h-50 h-60 rounded-md">
            <span className="text-xl font-bold capitalize">
                {position} at
                <span className="italic text-[#2dd4bf]"> {company}</span>
            </span>
            <span className="text-[#2dd4bf] font-bold">
                {startDate} - {endDate}
            </span>
            <p className="text-sm text-justify line-clamp-4">{description}</p>
        </div>
    );
};

export default Experience;
