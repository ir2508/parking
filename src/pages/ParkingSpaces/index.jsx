import { useRecoilState } from "recoil"
import { parkingSpacesState } from "../../state/atom"
import { useEffect } from "react"
import api from "../../services/api"
import Table from "../../components/Table"

const ParkingSpaces = () => {
    const [parkingSpaces, setParkingSpaces] = useRecoilState(parkingSpacesState)

    const tableColumns = [
        { key: "codVaga", label: "Vaga" },
        { key: "codAutomovel", label: "Automóvel" },
        { key: "codCliente", label: "Proprietário" },
        { key: "statusDisponivel", label: "Vaga Disponível" },
        { key: "statusPagamento", label: "Pagamento" },
    ]

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get("/vagas/")
                setParkingSpaces(response.data)
            } catch (error) {
                console.error("Falha ao carregar lista de vagas: ", error)
            }
        }

        if (parkingSpaces.length === 0) {
            fetchData()
        }
    }, [setParkingSpaces])

    return (
        <>
            <Table columns={tableColumns} data={parkingSpaces} />
        </>
    )
}

export default ParkingSpaces
