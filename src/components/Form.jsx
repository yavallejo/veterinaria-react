function Form() {
    return (
        <div className="form">
            <h3 className="title">Seguimientos de pacientes</h3>
            <h5 className="subtitle">
                Añade Pacientes y{" "}
                <span className="text-green-700">administralos</span>
            </h5>
            <form className="md:sticky md:top-2 form__box">
                <div className="form__control">
                    <label htmlFor="mascota" className="form__label">
                        Nombre Mascota
                    </label>
                    <input
                        type="text"
                        placeholder="Nombre de la mascota"
                        id="mascota"
                        className="form__input"
                    />
                </div>
                {/* Nombre Mascota */}
                <div className="form__control">
                    <label htmlFor="propietario" className="form__label">
                        Nombre Propietario
                    </label>
                    <input
                        type="text"
                        placeholder="Nombre del propietario"
                        id="propietario"
                        className="form__input"
                    />
                </div>
                {/* Nombre propietario */}
                <div className="form__control">
                    <label htmlFor="email" className="form__label">
                        Email
                    </label>
                    <input
                        type="email"
                        placeholder="Email"
                        id="email"
                        className="form__input"
                    />
                </div>
                {/* Email */}
                <div className="form__control">
                    <label htmlFor="alta" className="form__label">
                        Alta
                    </label>
                    <input type="date" id="alta" className="form__input" />
                </div>
                {/* Alta */}
                <div className="form__control">
                    <label htmlFor="sintomas" className="form__label">
                        Síntomas
                    </label>
                    <textarea
                        placeholder="Sintomas"
                        id="sintomas"
                        className="form__input"
                    />
                </div>
                {/* Sintomas */}
                <div className="form__control">
                    <input
                        type="button"
                        value="Guardar Paciente"
                        className="form__button"
                    />
                </div>
            </form>
        </div>
    );
}

export default Form;
