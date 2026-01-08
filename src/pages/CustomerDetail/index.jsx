import { useParams } from "react-router-dom"
import { useCustomerDetails } from "../../hooks/useCustomerDetails"
import Input from "../../components/Input"

const CustomerDetail = () => {
    const { customerId } = useParams()

    const { customer, vehicle, loading, error } = useCustomerDetails(customerId)
    console.log(vehicle)

    if (loading) return <p>Carregando dados do cliente e veículo...</p>
    if (error) return <p style={{ color: "red" }}>{error}</p>

    return (
        <div className="row">
            <section className="col-6">
                <h2>Informações pessoais</h2>

                <Input id={"nomeCliente"} type={"text"} label={"Nome do proprietário"} value={customer.nome} />
                <Input id={"documento"} type={"text"} label={"Documento do proprietário"} value={customer.documento} />
                <Input id={"plano"} type={"text"} label={"Plano"} value={customer.plano} />
                <Input id={"vencimento"} type={"text"} label={"Vencimento do plano"} value={customer.vencimento} />
            </section>

            <section className="col-6">
                <h2>Informações</h2>

                <Input id={"placa"} type={"text"} label={"Placa"} value={vehicle.placa} />
                <Input id={"modelo"} type={"text"} label={"Modelo"} value={vehicle.modelo} />
                <Input id={"marca"} type={"text"} label={"Marca"} value={vehicle.marca} />
                <Input id={"cor"} type={"text"} label={"Cor"} value={vehicle.cor} />
                <Input id={"tipo"} type={"text"} label={"Tipo"} value={vehicle.tipo} />
            </section>
            <div className="col-6">
                <button className="btn btn-primary mt-2">Editar</button>
            </div>
        </div>
    )
}

export default CustomerDetail
