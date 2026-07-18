import type { FC } from "react";

interface InputTextProps extends React.ComponentProps<"input"> {}

const InputText: FC<InputTextProps> = ({
    className = "",
    type = "text",
    disabled,
    ...props
}) => {
    return (
        <input
            className={`rounded-lg border border-gray-300 px-3 py-2.5 text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none ${disabled ? "cursor-not-allowed opacity-50" : ""} ${className} `}
            type={type}
            {...props}
        />
    );
};

export default InputText;
