import classNames from "classnames";
import React from "react";

const Button = ({
    type = "red-primary",
    size = "md",
    LeftIconComponent = null,
    RightIconComponent = null,
    onClick = () => {},
    children = "N/A",
    disabled = false,
    buttonType = "button",
    className = "",
    ...props
}) => {
    const sizeMap = new Map([
        ["xs", "px-2 py-2 text-xs"],
        ["sm", "px-3 py-2 text-sm"],
        ["md", "px-4 py-2 text-base"],
        ["lg", "px-5 py-2 text-lg"],
    ]);

    const textColorMap = new Map([
        ["secondary-light", "text-dark-0"],
        ["secondary-dark", "text-dark-0"],
        ["primary-light", "text-dark-0"],
        ["primary-dark", "text-dark-0"],
    ]);

    const colorMap = new Map([
        [
            "primary-dark",
            `
            bg-primary-dark
            border-transparent
            focus:border-primary-light
            hover:bg-primary-light
            disabled:bg-light-0
            `,
        ],
        [
            "primary-light",
            `
            bg-primary-light
            border-transparent
            focus:border-primary-dark
            hover:bg-primary-dark
            disabled:bg-light-0
            `,
        ],
        [
            "secondary-dark",
            `
            bg-secondary-dark
            border-transparent
            focus:border-secondary-light
            hover:bg-secondary-light
            disabled:bg-light-0
            `,
        ],
        [
            "secondary-light",
            `
            bg-secondary-light
            border-transparent
            focus:border-secondary-dark
            hover:bg-secondary-dark
            disabled:bg-light-0
            `,
        ],
    ]);
    if (
        [...sizeMap.keys()].includes(size) &&
        [...colorMap.keys()].includes(type)
    ) {
        return (
            <button
                type={buttonType}
                className={classNames(
                    "h-fit",
                    "inline-flex",
                    "items-center",
                    "justify-center",
                    "border",
                    "font-bold",
                    "focus:outline-none",
                    "focus:ring-0",
                    "transition-all",
                    "disabled:opacity-[32%]",
                    "disabled:cursor-default",
                    sizeMap.get(size),
                    colorMap.get(type),
                    textColorMap.get(type),
                    className
                )}
                onClick={onClick}
                disabled={disabled}
                aria-label={typeof children === "string" ? children : ""}
            >
                {LeftIconComponent ? (
                    <LeftIconComponent
                        className={classNames("-ml-0.5 mr-2 h-4 w-4")}
                        aria-hidden="true"
                    />
                ) : null}
                {children}
                {RightIconComponent ? (
                    <RightIconComponent
                        className={classNames("ml-2 -mr-0.5 h-4 w-4")}
                        aria-hidden="true"
                    />
                ) : null}
            </button>
        );
    } else return null;
};

export default Button;