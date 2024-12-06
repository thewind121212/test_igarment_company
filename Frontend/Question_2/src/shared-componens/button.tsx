
const Button = ({ className, content, fn, disabled = false }: {
    className: string,
    content: string,
    fn: () => void
    disabled?: boolean
}) => {

    console.log(disabled)
    return (
        <button
            className={`text-[#FFFFFF] px-4 py-2 rounded-md ${className}`}
            disabled={disabled}
            onClick={fn}
            style={{ cursor: 'pointer', background: disabled ? '#9E9E9E' : '' }}
        >{content}</button>
    )
}

export default Button;