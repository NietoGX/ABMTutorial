import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import AppFrame from './../AppFrame';
import CustomersActions from './../CustomersActions';
class HomeContainer extends React.Component{
    handleOnClick= () =>{
        console.log("Handle on click");
        console.log(this.props)
        this.props.history.push('/customers');
    }
    render(){
        
        return (
            <div>
                <AppFrame 
                header="Home" 
                body={
                    <div>
                        Esta es la pantalla inicial
                        <CustomersActions>
                            <button onClick={this.handleOnClick}>Listado de clientes</button>
                        </CustomersActions>
                    </div>
                }/>
            </div>
        );
    }
}

export default withRouter(HomeContainer);