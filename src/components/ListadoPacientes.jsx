import Pacientes from "./Pacientes";

function ListadoPacientes({ pacientes, setPaciente }) {
    return (
        <div className="mt-6 md:mt-0 form">
            {pacientes && pacientes.length ? (
                <>
                    <h3 className="title">Listado de pacientes</h3>
                    <h5 className="subtitle">
                        Administra tus Pacientes y{" "}
                        <span className="text-green-700">citas</span>
                    </h5>
                    {pacientes.map((paciente) => (
                        <Pacientes
                            key={paciente.id}
                            paciente={paciente}
                            setPaciente={setPaciente}
                        />
                    ))}
                </>
            ) : (
                <>
                    <h3 className="title">No hay pacientes</h3>
                    <h5 className="subtitle">
                        Comienza agregando pacientes{" "}
                        <span className="text-green-700">
                            y apareceran en este lugar
                        </span>
                    </h5>
                </>
            )}
        </div>
    );
}

export default ListadoPacientes;
