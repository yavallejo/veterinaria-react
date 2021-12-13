import Pacientes from "./Pacientes";

function ListadoPacientes() {
    return (
        <div className="mt-6 md:mt-0 form">
            <h3 className="title">Listado de pacientes</h3>
            <h5 className="subtitle">
                Administra tus Pacientes y{" "}
                <span className="text-green-700">citas</span>
            </h5>
            <Pacientes />
            <Pacientes />
            <Pacientes />
            <Pacientes />
            <Pacientes />
            <Pacientes />
            <Pacientes />
            <Pacientes />
        </div>
    );
}

export default ListadoPacientes;
