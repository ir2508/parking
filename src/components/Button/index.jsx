const Button = ({ children, btnClass, onclick }) => {
    return (
        <button className={`btn ${btnClass}`} onClick={onclick}>
            {children}
        </button>
    )
}

export default Button
