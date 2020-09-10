import React, {Component} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import AppFrame from "../AppFrame";
import {getCustomerByDni} from "../../selectors/customers";
import {Route} from 'react-router-dom';
import CustomerEdit from "../CustomerEdit";
import CustomerData from "../CustomerData";
import {withRouter} from "react-router";
import {fetchCustomers} from "../../actions/fetchCustomers";
import {updateCustomer} from "../../actions/updateCustomer";
import {deleteCustomer} from "../../actions/deleteCustomer";


class CustomerContainer extends Component {
    //<p>Datos del cliente {this.props.customer.name} </p>
    componentDidMount() {
        if (!this.props.customer) {
            this.props.fetchCustomers();
        }
    }

    handleSubmit = values => {
        console.log(JSON.stringify(values));
        const {id} = values;
        return this.props.updateCustomer(id, values)


    }
    handleOnSubmitSuccess = () => {
        this.props.history.goBack();

    }
    handleOnBack = () => {
        this.props.history.goBack();
    }
    handleOnDelete = id => {
        return this.props.deleteCustomer(id);
    }
    renderCustomerControl = (isEdit, isDelete) => {
        const CustomerControl = isEdit ? CustomerEdit : CustomerData;

        return <CustomerControl {...this.props.customer}
                                onSubmit={this.handleSubmit}
                                onBack={this.handleOnBack}
                                onSubmitSuccess={this.handleOnSubmitSuccess}
                                isDeleteAllow={!!isDelete}
                                onDelete={ this.handleOnDelete}
        />
    }
    renderBody = () => (
        <Route path="/customer/:dni/edit" children={
            ({match: isEdit}) => (
                <Route path="/customer/:dni/del" children={
                    ({match: isDelete}) => (
                        this.renderCustomerControl(isEdit, isDelete))
                }/>)

        }/>
    );

    render() {
        return (
            <div>
                <AppFrame header={`Cliente: ${this.props.dni}`}
                          body={this.renderBody()}>
                </AppFrame>
            </div>
        );
    }
}

CustomerContainer.propTypes = {
    dni: PropTypes.string.isRequired,
    customer: PropTypes.object.isRequired,
    fetchCustomer: PropTypes.func.isRequired,
    updateCustomer: PropTypes.func.isRequired,
    deleteCustomer: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => ({
    customer: getCustomerByDni(state, props)
});
export default withRouter(connect(mapStateToProps, {fetchCustomers, updateCustomer, deleteCustomer})(CustomerContainer));