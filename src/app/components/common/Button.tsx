import { ReactNode } from "react"

interface IButtonProps {
    variant?: 'primary' | 'light' | 'link'
    children: ReactNode
    className?: string
}

const Button = ({variant = 'primary', children, className}: IButtonProps) => {
    return <button className={`${variant == "primary" && 'bg-[#2F80ED]'} ${variant == "light" && 'border-white'} font-semibold rounded-full px-5 py-3 ${className}`}>{children}</button>
}

export default Button