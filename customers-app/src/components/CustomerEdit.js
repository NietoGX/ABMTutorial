import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Field, reduxForm} from 'redux-form';
import {setPropsAsInitial} from "../helpers/setPropsAsInitial";
import CustomersActions from "./CustomersActions";
import {Prompt} from "react-router";



const toNumber = value => value && Number(value);
const toUpper = value => value && value.toUpperCase();
const toLower = value => value && value.toLowerCase();
const onlyGrow = (value, previousValue, values) => value && (!previousValue ? value : (value > previousValue ? value : previousValue));
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

class CustomerEdit extends Component {
    componentDidMount() {
        if(this.txt){
        }
    };
    renderField = ({input, meta, type, label, name, withFocus}) => (
        <div>
            <label htmlFor={name}>{label}</label>
            <input {...input}
                   type={!type ? "text" : type}
                   ref={withFocus && (txt => this.txt = txt)}
            />
            {
                meta.touched && meta.error && <span>{meta.error}</span>
            }

        </div>
    );
    render() {
        const {handleSubmit, submitting, onBack, pristine, submitSucceeded} = this.props;
        return (
            <div>
                <h2>Edición de cliente</h2>
                <form onSubmit={handleSubmit}>
                    <Field
                        withFocus
                        name="name"
                        label="Nombre"
                        component={this.renderField}
                        parse={toUpper}
                        format={toLower}
                    >
                    </Field>
                    <Field
                        name="dni"
                        component={this.renderField}
                        label="DNI"
                    >
                    </Field>
                    <Field
                        label="edad"
                        name="age"
                        component={this.renderField}
                        type="number"
                        parse={toNumber}
                        normalize={onlyGrow}>

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
    }
}

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
