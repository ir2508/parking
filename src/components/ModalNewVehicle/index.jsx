import { useState } from "react"
import Button from "../Button"
import Input from "../Input"
import Select from "../Select"

const ModalNewVehicle = () => {
    const options = [
        {
            label: "Avulso",
            value: "avulso",
            selected: true,
        },
        {
            label: "Mensal",
            value: "mensal",
            selected: false,
        },
    ]

    const [optionSelected, setOptionSelected] = useState("avulso")

    return (
        <>
            <div className="modal fade modal-xl" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">
                                Nova entrada
                            </h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="container row mb-5">
                                <div className="col-12 mb-5">
                                    <Select id={"selectPlano"} label={"Selecione o plano"} options={options} onChange={(e) => setOptionSelected(e.target.value)} />
                                </div>

                                <div className="col-6">
                                    <h2 className="mb-3">Informações do veículo</h2>
                                    <Input id={"placa"} type={"text"} label={"Placa"} />
                                    <Input id={"modelo"} type={"text"} label={"Modelo"} />
                                    <Input id={"marca"} type={"text"} label={"Marca"} />
                                    <Input id={"cor"} type={"text"} label={"Cor"} />
                                    <Input id={"tipo"} type={"text"} label={"Tipo"} />
                                </div>

                                {optionSelected === "mensal" && (
                                    <div className="col-6">
                                        <h2 className="mb-3">Informações pessoais</h2>
                                        <Input id={"nomeCliente"} type={"text"} label={"Nome do proprietário"} />
                                        <Input id={"documento"} type={"text"} label={"Documento do proprietário"} />
                                        <Input id={"plano"} type={"text"} label={"Plano"} />
                                        <Input id={"vencimento"} type={"text"} label={"Vencimento do plano"} />
                                    </div>
                                )}
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                Cancelar
                            </button>
                            <Button btnClass={"btn-success"}>Registrar entrada</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalNewVehicle
