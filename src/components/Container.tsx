import { containerPropType } from "@/types"

function Container({ children, className }: containerPropType) {
    return (
        <main className={`max-w-7xl mx-auto px-4 ${className}`}>
            {children}
        </main>
    )
}

export default Container