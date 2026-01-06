import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <header>
            <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <div class="container p-2">
                    <a class="navbar-brand" href="#">
                        Parking
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <ul class="navbar-nav me-auto mb-2 mb-md-0">
                            <li class="nav-item">
                                <NavLink className={"nav-link active"} to={"/parking/"}>
                                    Current
                                </NavLink>
                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Pesquisar" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">
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
