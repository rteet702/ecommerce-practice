"use client";

import { MouseEventHandler, PropsWithChildren, ReactElement } from "react";

interface IColoredButtonProps extends PropsWithChildren {
    icon?: ReactElement;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function ColoredButton({ children, onClick, icon, ...rest }: IColoredButtonProps) {
    return (
        <button
            onClick={onClick}
            {...rest}
            className="bg-purple-200 p-4 rounded-lg flex gap-3 items-center text-purple-600 font-bold">
            {children}
            {icon}
        </button>
    );
}
