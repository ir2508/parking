import { createBrowserRouter } from "react-router-dom"
import DefaultLayout from "../layouts/DefaultLayout"
import VehicleList from "../pages/VehicleList"
import CustomerList from "../pages/CustomerList"
import ParkingSpaces from "../pages/ParkingSpaces"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [{ path: "/automoveis/", element: <VehicleList /> }],
        children: [{ path: "/clientes/", element: <CustomerList /> }],
        children: [{ path: "/vagas/", element: <ParkingSpaces /> }],
    },
])
