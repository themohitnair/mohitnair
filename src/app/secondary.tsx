export interface SecondaryProps {
    text: string
}

const Secondary: React.FC<SecondaryProps> = ({text}) => {
    return (
        <p className="mt-10 text-xl text-gray-500 text-center">
            {text}            
        </p>
    )
}