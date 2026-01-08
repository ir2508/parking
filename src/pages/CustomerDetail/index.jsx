import { useParams } from "react-router-dom"
import { useCustomerDetails } from "../../hooks/useCustomerDetails"

const CustomerDetail = () => {
    const { customerId } = useParams()

    const { customer, vehicle, loading, error } = useCustomerDetails(customerId)

    if (loading) return <p>Carregando dados do cliente e veículo...</p>
    if (error) return <p style={{ color: "red" }}>{error}</p>

    return <>{customer}</>
}

export default CustomerDetail
