import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AppFrame from "../AppFrame";
import CustomerEdit from "../CustomerEdit";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import {insertCustomer} from "../../actions/insertCustomer";

class NewCustomerContainer extends Component {
    handleSubmit = values => {
        return this.props.insertCustomer(values);
    }
    handleOnSubmitSuccess = () => {
        this.props.history.goBack();
    }
    handleOnBack = () => {
        this.props.history.goBack();
    }
    renderBody=() => {
        return <CustomerEdit onSubmit={this.handleSubmit}
                             onSubmitSuccess={this.handleOnSubmitSuccess}
                             onBack={this.handleOnBack}/>
    }
    render() {
        return (
            <div>
                <AppFrame header={"Edición del cliente"} body={this.renderBody()}></AppFrame>
            </div>
        );
    }
}

NewCustomerContainer.propTypes = {
    insertCustomer: PropTypes.func.isRequired,
};

export default withRouter(connect(null, {insertCustomer})(NewCustomerContainer));