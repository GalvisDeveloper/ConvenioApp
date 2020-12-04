import React, { Component } from 'react';
import Main from './components/UserView/components/Agreement/components/Main';
import Header from './components/UserView/components/Header';
import Presentation from './components/UserView/components/Presentation';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import Nav from './components/OtherView/components/Nav';
import Layout from './components/OtherView/components/Layout';
import Institution from './components/OtherView/components/Institution/InstitutionTable';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pathname: '/',
    };

    this.nombrePath = this.nombrePath.bind(this);
  }

  nombrePath(pathname) {
    this.setState({
      pathname: pathname,
    });
  }

  render() {
    return (
      <Router>
        <div className="App" >
          <Header
            nombrePath={this.nombrePath}
            pathname={this.state.pathname}
            title="Convenios UFPS"
          />

          <Presentation msg="Breve Descripción del programa" />

          <Switch>
            <Route
              path="/gestionConvenios"
              exact
              component={() => <Main />}
            />
          </Switch>

          <Switch>
            <Route
              path="/reportes"
              exact
              component={() => <Layout />}
            />
          </Switch>

          <Switch>
            <Route
              path="/instituciones"
              exact
              component={() => <Institution />}
            />
          </Switch>

        </div>
      </Router>
    );
  }
}
export default App;
