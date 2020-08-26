import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import HomeContainer from './components/containers/HomeContainer'
import CustomersContainer from './components/containers/CustomersContainer';
import CustomerContainer from "./components/containers/CustomerContainer";
class App extends React.Component {

  renderHome = () => <HomeContainer/>;

  renderCustomerContainer = () => <CustomerContainer/>

  renderCustomerListContainer = () => <CustomersContainer/>

  renderCustomerNewContainer= () => <h1>Customer New Container</h1>;





  render() {
    return (

        <Router>
          <div>
            <Route exact path="/" component={this.renderHome}/>
            <Route exact path="/customers" component={this.renderCustomerListContainer}/>
            <Switch>
              <Route  path="/customer/new" component={this.renderCustomerNewContainer}/>
              <Route  path="/customer/:dni"
                      render={props=> <CustomerContainer {...props} dni ={props.match.params.dni}/>}/>
            </Switch>
            
          </div>
        </Router>

    );
  }
}


export default App;
