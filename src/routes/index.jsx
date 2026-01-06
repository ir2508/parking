import { createBrowserRouter } from "react-router-dom"
import DefaultLayout from "../layouts/DefaultLayout"
import VehicleList from "../pages/VehicleList"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [{ path: "/parking/", element: <VehicleList /> }],
    },
])
