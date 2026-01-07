import { NavLink } from "react-router-dom"

const Header = () => {
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
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <NavLink className={"nav-link active"} to={"/automoveis/"}>
                                    Vehicle
                                </NavLink>

                                <NavLink className={"nav-link"} to={"/clientes/"}>
                                    Customers
                                </NavLink>

                                <NavLink className={"nav-link"} to={"/vagas/"}>
                                    Parking Spaces
                                </NavLink>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Pesquisar" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">
                                Pesquisar
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
