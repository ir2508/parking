const Input = ({ label, type, id, value }) => {
    return (
        <div>
            <label for={id} class="form-label">
                {label}
            </label>
            <input type={type} id={id} class="form-control" aria-describedby={label} value={value ? value : ""} readOnly={value ? true : false} disabled={value ? true : false}></input>
        </div>
    )
}

export default Input
