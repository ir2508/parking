const Button = ({ children, btnClass }) => {
    return <button className={`btn ${btnClass}`}>{children}</button>
}

export default Button
