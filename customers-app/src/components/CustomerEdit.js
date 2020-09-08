import React from 'react';
import PropTypes from 'prop-types';
import {Field, reduxForm} from 'redux-form';
import {setPropsAsInitial} from "../helpers/setPropsAsInitial";
import CustomersActions from "./CustomersActions";
import {Prompt} from "react-router";


const MyField = ({input, meta}) => (
    <div>
        <input {...input} type="text"/>
        {
            meta.touched && meta.error && <span>{meta.error}</span>
        }

    </div>
);
const toNumber = value => value && Number(value);
const toUpper = value => value && value.toUpperCase();
const toLower = value =>  value && value.toLowerCase();
const onlyGrow =  (value, previousValue, values) => value && (!previousValue ? value :  (value>previousValue ? value :previousValue));
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
const CustomerEdit = ({name, dni, age, handleSubmit, submitting, onBack, pristine, submitSucceeded}) => {
    return (
        <div>
            <h2>Edición de cliente</h2>
            <form onSubmit={handleSubmit}>
                    <Field
                        name="name"
                        label="Nombre"
                        component={MyField}
                        parse={toUpper}
                        format={toLower}
                    >
                    </Field>
                    <Field
                        name="dni"
                        component={MyField}
                        label="DNI"
                        >
                    </Field>
                    <Field
                        label= "edad"
                        name="age"
                        component={MyField}
                        type="number"
                        parse={toNumber}
                        normalize = {onlyGrow}>

                    </Field>
                <CustomersActions>
                    <button type="submit" disabled={pristine || submitting}>Aceptar</button>
                    <button disabled={submitting} onClick={onBack}>Cancelar</button>
                </CustomersActions>
            <Prompt>
                when= {!pristine && !submitSucceeded}
                message= "Se perderán los datos si continúa"
            </Prompt>

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
