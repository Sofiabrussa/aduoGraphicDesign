import "./ButtonStyles.css" 

function Button({ children, className = "", type = "button", ...rest }) {
    return (
        <button type={type} className={`buttom-aduo ${className}`} {...rest}>
            {children} 
        </button>
    )
}

export default Button;
