import { useRecoilState } from "recoil"
import { vehicleListState } from "../../state/atom"
import { useEffect } from "react"
import api from "../../services/api"

const VehicleList = () => {
    const [vehicleList, setVehicleList] = useRecoilState(vehicleListState)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get()
                setVehicleList(response.data.carros)
            } catch (error) {
                console.error("Falha ao carregar lista de veículos: ", error)
            }
        }

        if (vehicleList.length === 0) {
            fetchData()
        }
    }, [setVehicleList])

    return (
        <ul>
            {vehicleList.length === 0 ? (
                <p>Carregando ou lista vazia...</p>
            ) : (
                <ul>
                    {vehicleList.map((carro, index) => (
                        <li key={carro.id || index}>{carro.nome || "Carro sem nome"}</li>
                    ))}
                </ul>
            )}
        </ul>
        // <table className="table table-striped">
        //     <thead>
        //         <tr>
        //             <th scope="col">Vaga</th>
        //             <th scope="col">Proprietário</th>
        //             <th scope="col">Placa</th>
        //             <th scope="col">Modelo</th>
        //             <th scope="col">Marca</th>
        //             <th scope="col">Cor</th>
        //             <th scope="col">Ações</th>
        //         </tr>
        //     </thead>
        //     <tbody>
        //         <tr>
        //             <td>1</td>
        //             <td>Mark</td>
        //             <td>Mark</td>
        //             <td>Otto</td>
        //             <td>@mdo</td>
        //             <td>@mdo</td>
        //             <td>@mdo</td>
        //         </tr>
        //         <tr>
        //             <td>1</td>
        //             <td>Jacob</td>
        //             <td>Jacob</td>
        //             <td>Thornton</td>
        //             <td>@fat</td>
        //             <td>@fat</td>
        //             <td>@fat</td>
        //         </tr>
        //         <tr>
        //             <td>1</td>
        //             <td>John</td>
        //             <td>John</td>
        //             <td>Doe</td>
        //             <td>@social</td>
        //             <td>@social</td>
        //             <td>@social</td>
        //         </tr>
        //     </tbody>
        // </table>
    )
}

export default VehicleList
