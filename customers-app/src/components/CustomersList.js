import React from 'react';
import PropTypes from 'prop-types';
import CustomersListItem from './CustomerListItem';
const CustomersList = ({customers,urlPath}) => {
    return (
        <div>
            
            <div className="customers-list">
                {
                    customers.map(c=>
                        <CustomersListItem 
                        key= {c.dni}
                        dni={c.dni}
                        name={c.name}
                        editAction={'Editar'}
                        delAction={'Eliminar'}
                        urlPath={urlPath}/>)
                }
            </div>
        </div>
    );
};

CustomersList.propTypes = {
    customer: PropTypes.array.isRequired,
    urlPath: PropTypes.string.isRequired,
};

export default CustomersList;