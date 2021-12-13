const Pacientes = () => {
    return (
        <div className="form__box">
            <div className="patients__line">
                <strong className="form__label">Nombre:</strong>
                <span>Lulu</span>
            </div>
            <div className="patients__line">
                <strong className="form__label">Propietario:</strong>
                <span>Yan</span>
            </div>
            <div className="patients__line">
                <strong className="form__label">Email:</strong>
                <span>aprendi@gmail.com</span>
            </div>
            <div className="patients__line">
                <strong className="form__label">Fecha de alta:</strong>
                <span>1o de diciembre 2022</span>
            </div>
            <div className="patients__line">
                <strong className="form__label">Sintomas:</strong>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Animi inventore repellendus dolore quia quibusdam recusandae
                    nihil fuga reprehenderit facilis iure repudiandae, quos
                    deserunt perferendis distinctio commodi delectus saepe modi
                    sequi!
                </p>
            </div>
        </div>
    );
};

export default Pacientes;
