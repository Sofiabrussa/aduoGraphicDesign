import "./ButtonStyled.css" 

function Button({ children }) {
    return (
        <button type="button" className="buttom-aduo">
            {children} 
        </button>
    )
}

export default Button;
