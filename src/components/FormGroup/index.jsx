import React from "react";


const FormGroup = ({ label, inputName, inputId }) => {
    return (
        <div className="form-group">

            <label htmlFor="">{label}</label>

            <input type="text" className="form-control" name={inputName} id={inputId} />

        </div>
    )
}

export default FormGroup;