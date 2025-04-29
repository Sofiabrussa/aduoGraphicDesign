import "./ButtonStyles.css" 

function Button({ children, className = "" }) {
    return (
        <button type="button" className={`buttom-aduo ${className}`}>
            {children} 
        </button>
    )
}

export default Button;
