const ButtonModal = ({ children }) => {
    return (
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            {children}
        </button>
    )
}

export default ButtonModal
