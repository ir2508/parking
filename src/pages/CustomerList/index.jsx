import { useRecoilState } from "recoil"
import { customerListState } from "../../state/atom"
import { useEffect } from "react"
import Table from "../../components/Table"
import api from "../../services/api"

const CustomerList = () => {
    const [customerList, setCustomerList] = useRecoilState(customerListState)

    const tableColumns = [
        { key: "nome", label: "Nome" },
        { key: "documento", label: "Documento" },
        { key: "placa", label: "Placa" },
        { key: "plano", label: "Plano" },
        { key: "vencimento", label: "Vencimento" },
    ]

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get("/clientes/")
                setCustomerList(response.data)
            } catch (error) {
                console.error("Falha ao carregar lista de clientes: ", error)
            }
        }

        if (customerList.length === 0) {
            fetchData()
        }
    }, [setCustomerList])

    return (
        <>
            <Table columns={tableColumns} data={customerList} />
        </>
    )
}

export default CustomerList
