import React from "react";


const FormGroup = ({ label, inputName, inputId, inputType }) => {
    return (
        <div className="form-group">

            <label htmlFor="">{label}</label>

            <input type={inputType} className="form-control" name={inputName} id={inputId} />

        </div>
    )
}

export default FormGroup;