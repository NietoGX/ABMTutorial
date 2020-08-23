import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import HomeContainer from './components/containers/HomeContainer'
import CustomersContainer from './components/containers/CustomersContainer';
class App extends React.Component {

  renderHome = () => <HomeContainer/>;

  renderCustomerContainer = () => <CustomersContainer/>

  renderCustomerListContainer = () => <CustomersContainer/>

  renderCustomerNewContainer= () => <h1>Customer New Container</h1>;





  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path="/" component={this.renderHome}/>
            <Route exact path="/customers" component={this.renderCustomerListContainer}/>
            <Switch>
              <Route path="/customers/new" component={this.renderCustomerNewContainer}/>
              <Route path="/customers/:dni" component={this.renderCustomerContainer}/>
            </Switch>
            
          </div>
        </Router>
      </div>
    );
  }
}


export default App;
