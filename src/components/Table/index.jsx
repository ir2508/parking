const Table = ({ columns, data }) => {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    {columns.map((column) => (
                        <th scope="col">{column.label}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((item) => {
                    return (
                        <tr>
                            {columns.map((column) =>
                                column.key === "acoes" ? (
                                    <td>
                                        <i class="fa-solid fa-eye"></i>
                                        <i class="fa-solid fa-square-check"></i>
                                    </td>
                                ) : (
                                    <td scope="col">{item[column.key]}</td>
                                )
                            )}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Table
