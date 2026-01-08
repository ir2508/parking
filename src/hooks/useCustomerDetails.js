import { useEffect, useState } from "react"
import { useRecoilValue } from "recoil"
import { customerListState, vehicleListState } from "../state/atom"
import api from "../services/api"

export const useCustomerDetails = (customerId) => {
    const [data, setData] = useState({ customer: null, vehicle: null })
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const customers = useRecoilValue(customerListState)
    const vehicles = useRecoilValue(vehicleListState)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)

            try {
                let customer = customers.find((c) => String(c.id) === String(customerId))

                if (!customer) {
                    const response = await api.get(`/clientes/${customerId}`)
                    customer = response.data
                }

                console.log(customer)

                let vehicle = vehicles.find((v) => v.placa === customer.placa)

                if (!vehicle) {
                    const vehicleRes = await api.get(`/automoveis/${vehicle.id}`)
                    // const vehicleRes = await api.get(`/automoveis/?customerId=${customerId}`)
                    vehicle = vehicleRes.data[0]
                }

                setData({ customer, vehicle })
            } catch (err) {
                setError("Não foi possível carregar os dados completos.")
                console.error(err)
            } finally {
                setLoading(false)
            }
        }

        if (customerId) fetchData()
    }, [customerId, customers, vehicles])

    return { ...data, loading, error }
}
