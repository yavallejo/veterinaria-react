import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import ListadoPacientes from "./components/ListadoPacientes";
function App() {
    const [pacientes, setPacientes] = useState([]);
    const [paciente, setPaciente] = useState({});
    return (
        <div className="app">
            <Header />
            <div className="grid gap-4 mt-10 md:grid-cols-2">
                <Form
                    pacientes={pacientes}
                    setPacientes={setPacientes}
                    paciente={paciente}
                />
                <ListadoPacientes
                    pacientes={pacientes}
                    setPaciente={setPaciente}
                />
            </div>
        </div>
    );
}

export default App;
