import { containerPropType } from "@/types"

function Container({ children, className, style }: containerPropType) {
    return (
        <div
            className={`max-w-7xl mx-auto px-4 ${className}`}
            style={style}
        >
            {children}
        </div>
    )
}

export default Container