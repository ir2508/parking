import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import ModalNewVehicle from "../components/ModalNewVehicle"

const DefaultLayout = () => {
    return (
        <>
            <ModalNewVehicle />
            <Header />
            <main className="container">
                <Outlet />
            </main>
        </>
    )
}

export default DefaultLayout
