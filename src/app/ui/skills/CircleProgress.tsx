interface CircleProgressProps {
    percentage: number;
    size?: number;
    strokeWidth?: number;
    primaryColor?: string;
    secondaryColor?: string;
}

const CircleProgress: React.FC<CircleProgressProps> = ({
    percentage,
    size = 120,
    strokeWidth = 10,
    primaryColor = "#2dd4bf", // Tailwind's teal-400
    secondaryColor = "#4b5563", // Tailwind's gray-600
}) => {
    // Calculate circle properties
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const dash = (percentage * circumference) / 100;

    return (
        <div className="relative" style={{ width: size, height: size }}>
            {/* Background circle */}
            <svg className="w-full h-full transform -rotate-90">
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="transparent"
                    stroke={secondaryColor}
                    strokeWidth={strokeWidth}
                    strokeDasharray={`${circumference} ${circumference}`}
                    className="transition-all duration-300"
                />

                {/* Progress circle */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="transparent"
                    stroke={primaryColor}
                    strokeWidth={strokeWidth}
                    strokeDasharray={`${dash} ${circumference - dash}`}
                    className="transition-all duration-300"
                    strokeLinecap="round"
                />
            </svg>

            {/* Percentage text */}
            <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold">{percentage}%</span>
            </div>
        </div>
    );
};

export default CircleProgress;
