
const Button = ({ className, content, fn }: {
    className: string,
    content: string,
    fn: () => void
}) => {
    return (
        <button
            className={className}
            onClick={fn}
        >{content}</button>
    )
}

export default Button;