const Pacientes = ({ paciente, setPaciente }) => {
    const { nombre, propietario, email, alta, sintomas } = paciente;
    return (
        <div className="form__box">
            <div className="patients__line">
                <strong className="form__label">Nombre:</strong>
                <span>{nombre}</span>
            </div>
            <div className="patients__line">
                <strong className="form__label">Propietario:</strong>
                <span>{propietario}</span>
            </div>
            <div className="patients__line">
                <strong className="form__label">Email:</strong>
                <span>{email}</span>
            </div>
            <div className="patients__line">
                <strong className="form__label">Fecha de alta:</strong>
                <span>{alta}</span>
            </div>
            <div className="patients__line">
                <strong className="form__label">Sintomas:</strong>
                <p>{sintomas}</p>
            </div>
            <div className="mt-5 patients__line">
                <button
                    type="button"
                    className="btn btn--edit"
                    onClick={() => setPaciente(pacientes)}
                >
                    Editar
                </button>
                <button type="button" className="btn btn--delete">
                    Eliminar
                </button>
            </div>
        </div>
    );
};

export default Pacientes;
