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



class CustomerContainer extends Component {
    //<p>Datos del cliente {this.props.customer.name} </p>
    componentDidMount() {
        if(!this.props.customer){
            this.props.fetchCustomers();
        }
    }

    handleSubmit = values => {
        console.log(JSON.stringify(values));

    }

    handleOnBack= () => {
        this.props.history.goBack();
    }
    renderBody = () => (
        <Route path="/customer/:dni/edit" children={
            ({match}) => {
                const CustomerControl = match ? CustomerEdit : CustomerData;

                return <CustomerControl {...this.props.customer}
                                        onSubmit={this.handleSubmit}
                                        onBack={this.handleOnBack}
                />


            }}/>

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
};

const mapStateToProps = (state, props) => ({
    customer: getCustomerByDni(state, props)
});
export default withRouter(connect(mapStateToProps, {fetchCustomers})(CustomerContainer));