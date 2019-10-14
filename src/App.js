import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import logo from './logo.svg';
import LoginComponent from './components/LoginComponent';
import DashboardComponents from './components/DashboardComponents/LandingComponent';
import SettingComponents from './components/SettingComponents/SettingComponent';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
    // <LoginComponent/>
     <Router>
        <div className="App">
          <Route exact path="/" component={LoginComponent} />
          <Route exact path="/DashboardComponents" component={DashboardComponents} />
          <Route exact path="/SettingComponents" component={SettingComponents} />
        </div>
      </Router>
    );
  }

}
ReactDOM.render(<App />, document.getElementById('root'));
export default App;
