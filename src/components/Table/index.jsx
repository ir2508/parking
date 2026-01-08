import { useNavigate } from "react-router-dom"

const Table = ({ columns, data }) => {
    const navigate = useNavigate()

    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    {columns.map((column) => (
                        <th key={column.key} scope="col">
                            {column.label}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((item) => {
                    return (
                        <tr key={item.id} onClick={() => navigate(`${item.id}`)} style={{ cursor: "pointer" }}>
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
