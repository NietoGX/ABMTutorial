import React from 'react';
import PropTypes from 'prop-types';
import {Field, reduxForm} from 'redux-form';
import {setPropsAsInitial} from "../helpers/setPropsAsInitial";
import CustomersActions from "./CustomersActions";

const MyField = ({input, meta}) => (
    <div>
        <input {...input} type="text"/>
        {
            meta.touched && meta.error && <span>{meta.error}</span>
        }

    </div>
);
// const isRequired = value => (
//     !value && "Este campo es requerido"
// );
const validate = values => {
    const error = {};

    if (!values.name) {
        error.name = "El campo nombre es requerido";
    }
    if (!values.dni) {
        error.dni = "El dni es requerido";
    }
    return error;
}
const CustomerEdit = ({name, dni, age, handleSubmit, submitting, onBack}) => {
    return (
        <div>
            <h2>Edición de cliente</h2>
            <form onSubmit={handleSubmit}>
                <div><label htmlFor="name">Nombre: </label>
                    <Field
                        name="name"
                        component={MyField}
                        type="text">

                    </Field>
                </div>

                <div><label htmlFor="dni">Dni: </label>
                    <Field
                        name="dni"
                        component={MyField}
                        type="text">

                    </Field>

                </div>

                <div><label htmlFor="age">Edad: </label>
                    <Field
                        name="age"
                        component={MyField}
                        type="number">

                    </Field>
                <CustomersActions>
                    <button type="submit" disabled={submitting}>Aceptar</button>
                    <button onClick={onBack}>Cancelar</button>
                </CustomersActions>
                </div>
            </form>
        </div>
    );
};

CustomerEdit.propTypes = {
    name: PropTypes.string,
    dni: PropTypes.string,
    age: PropTypes.number,
    onBack: PropTypes.func.isRequired,
};
const CustomerEditForm = reduxForm(
    {
        form: 'CustomerEdit',
        validate
    })(CustomerEdit);

export default setPropsAsInitial(CustomerEditForm);
