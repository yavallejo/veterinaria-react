import Header from "./components/Header";
import Form from "./components/Form";
import ListadoPacientes from "./components/ListadoPacientes";
function App() {
    return (
        <div className="app">
            <Header />
            <div className="grid gap-4 mt-10 md:grid-cols-2">
                <Form />
                <ListadoPacientes />
            </div>
        </div>
    );
}

export default App;
