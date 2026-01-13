import { NavLink, useNavigate } from "react-router-dom"
import ButtonModal from "../ButtonModal"
import { useState } from "react"
import Button from "../Button"
import Input from "../Input"

const Header = () => {
    const navigate = useNavigate()
    const [searchQuery, setSearchQuery] = useState()

    const handleSearchClick = (e) => {
        navigate(`/pesquisar?q=${encodeURIComponent(searchQuery)}`)
        e.preventDefault()
    }

    const onChangeSearchQuery = (e) => {
        setSearchQuery(e.target.value)
    }

    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <div className="container p-2">
                    <a className="navbar-brand" href="#">
                        Parking
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className={"nav-link"} to={"/automoveis/"}>
                                    Vehicle
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className={"nav-link"} to={"/clientes/"}>
                                    Customers
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className={"nav-link"} to={"/vagas/"}>
                                    Parking Spaces
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <ButtonModal>Cadastrar entrada</ButtonModal>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Digite para pesquisar" onChange={onChangeSearchQuery} value={searchQuery} aria-describedby="button-addon2" />
                                <Button btnClass={"btn-outline-success"} onclick={handleSearchClick}>
                                    Pesquisar
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
