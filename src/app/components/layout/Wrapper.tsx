import { ReactNode } from "react"

interface IWrapperProps {
    children: ReactNode
}

export const Wrapper = ({ children }: IWrapperProps) => {
    return (
        <section className="grid grid-cols-12">
            {children}
        </section>
    )
}