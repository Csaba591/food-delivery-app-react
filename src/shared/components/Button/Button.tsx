import { ReactNode } from "react";

import './Button.css'

interface ButtonProps {
    children?: ReactNode
    onClick?: () => void
    className?: string
}

export function Button({ children, onClick, className }: ButtonProps) {
    return (
        <button onClick={onClick} className={`${className ? className : ''}` + ' button'} type="button">{children}</button>
    )
}