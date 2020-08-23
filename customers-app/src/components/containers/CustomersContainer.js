import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppFrame from '../AppFrame';
import CustomersList from './../CustomersList'
import CustomersActions from '../../components/CustomersActions';
import {withRouter} from 'react-router-dom'
const customers = [
    {
        "dni" : "123",
        "name" : "david",
        "age" : "12"
    },
    {
        "dni" : "1234",
        "name" : "david2",
        "age" : "124"
    },
    {
        "dni" : "1235",
        "name" : "david3",
        "age" : "123"
    }


];

class CustomersContainer extends Component {

    handleAddNew= () => {
        this.props.history.push('/customers/new')
    };

    renderBody = customers => (
        <div>
            <CustomersList customers={customers} urlPath={"customer/"}/>
            <CustomersActions>
                <button onClick={this.handleAddNew}>Nuevo Cliente</button>
            </CustomersActions>
        </div>
    );
        
    
    render() {
        return (
            <div>
                <AppFrame 
                    header={"Listado de clientes"}
                    body={ this.renderBody(customers)}>
                </AppFrame>
            </div>
        );
    }
}


CustomersContainer.propTypes = {

};


export default withRouter(CustomersContainer);
