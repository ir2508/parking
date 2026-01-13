import { createBrowserRouter } from "react-router-dom"
import DefaultLayout from "../layouts/DefaultLayout"
import VehicleList from "../pages/VehicleList"
import CustomerList from "../pages/CustomerList"
import ParkingSpaces from "../pages/ParkingSpaces"
import CustomerDetail from "../pages/CustomerDetail"
import SearchResults from "../pages/SearchResults"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            { path: "/automoveis/", element: <VehicleList /> },
            { path: "/automoveis/:customerId", element: <CustomerDetail /> },
            { path: "/clientes/", element: <CustomerList /> },
            { path: "/clientes/:customerId", element: <CustomerDetail /> },
            { path: "/vagas/", element: <ParkingSpaces /> },
            { path: "/pesquisar", element: <SearchResults /> },
        ],
    },
])
