import React from 'react'
import Icon from "./Icon"

const Button = ({ href, className = "bg-red text-white inline-flex", children, iconName = "arrow", iconClassName = "w-[15px] h-[15px]", onClick }) => {
    return (
        <a
            onClick={onClick}
            href={href}
            className={`group relative items-center px-4 py-2 rounded-sm text-sm whitespace-nowrap transition-all duration-300 h-[37px] ${className}`}
        >
            <span className="transition-all duration-300 group-hover:pr-5">
                {children}
            </span>
            <Icon
                icon={iconName}
                className={`absolute right-3 opacity-0 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 ${iconClassName}`}
            />
        </a>
    )
}

export default Button