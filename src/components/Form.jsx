import { useState, useEffect } from "react";
import Error from "./Error";

function Form({ pacientes, setPacientes, paciente }) {
    const [nombre, setNombre] = useState("");
    const [propietario, setPropietario] = useState("");
    const [email, setEmail] = useState("");
    const [alta, setAlta] = useState("");
    const [sintomas, setSintomas] = useState("");
    const [error, setError] = useState(false);

    useEffect(() => {}, [paciente]);

    const generarId = () => {
        const random = Math.random().toString(36).substring(2);
        const fecha = Date.now().toString(36);

        return random + fecha;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if ([nombre, propietario, email, alta, sintomas].includes("")) {
            console.log("Hay al menos un campo vacio");
            setError(true);
            return;
        }

        setError(false);

        //Objeto del paciente
        const objetoPaciente = {
            nombre,
            propietario,
            email,
            alta,
            sintomas,
            id: generarId(),
        };

        setPacientes([...pacientes, objetoPaciente]);

        // Vaciar el form
        setNombre("");
        setPropietario("");
        setEmail("");
        setAlta("");
        setSintomas("");
    };

    return (
        <div className="form">
            <h3 className="title">Seguimientos de pacientes</h3>
            <h5 className="subtitle">
                Añade Pacientes y{" "}
                <span className="text-green-700">administralos</span>
            </h5>
            <form
                className="md:sticky md:top-2 form__box"
                onSubmit={handleSubmit}
            >
                {error && <Error message="Todos los campos son obligatorios" />}

                <div className="form__control">
                    <label htmlFor="mascota" className="form__label">
                        Nombre Mascota
                    </label>
                    <input
                        type="text"
                        placeholder="Nombre de la mascota"
                        id="mascota"
                        className="form__input"
                        value={nombre}
                        onChange={(event) => setNombre(event.target.value)}
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
                        value={propietario}
                        onChange={(event) => setPropietario(event.target.value)}
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
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                {/* Email */}
                <div className="form__control">
                    <label htmlFor="alta" className="form__label">
                        Alta
                    </label>
                    <input
                        type="date"
                        id="alta"
                        className="form__input"
                        value={alta}
                        onChange={(event) => setAlta(event.target.value)}
                    />
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
                        value={sintomas}
                        onChange={(event) => setSintomas(event.target.value)}
                    />
                </div>
                {/* Sintomas */}
                <div className="form__control">
                    <input
                        type="submit"
                        value="Guardar Paciente"
                        className="form__button"
                    />
                </div>
            </form>
        </div>
    );
}

export default Form;
