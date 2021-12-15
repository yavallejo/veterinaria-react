import { useState } from "react";

const Error = ({ message }) => {
    return (
        <div className="form__control">
            <span className="error">{message}</span>
        </div>
    );
};

export default Error;
