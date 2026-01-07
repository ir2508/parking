import { useRecoilState } from "recoil"
import { vehicleListState } from "../../state/atom"
import { useEffect } from "react"
import api from "../../services/api"
import Table from "../../components/Table"

const VehicleList = () => {
    const [vehicleList, setVehicleList] = useRecoilState(vehicleListState)

    const tableColumns = [
        { key: "vaga", label: "Vaga" },
        { key: "placa", label: "Placa" },
        { key: "modelo", label: "Modelo" },
        { key: "marca", label: "Marca" },
        { key: "cor", label: "Cor" },
        { key: "proprietario", label: "Proprietário" },
        { key: "acoes", label: "Ações" },
    ]

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
        <>
            <Table columns={tableColumns} data={vehicleList} />
        </>
    )
}

export default VehicleList
