const Select = ({ label, id, options, onChange }) => {
    return (
        <div>
            <label for={id} class="form-label">
                {label}
            </label>
            <select class="form-select" id={id} aria-label={label} onChange={onChange}>
                {options.map((option) => (
                    <option value={option.value} selected={option.selected}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Select
