import logo from './logo.svg';
import './App.css';
import { Helmet } from "react-helmet";
import { Switch, Route, Redirect, BrowserRouter as Router } from "react-router-dom";
import MasterPage from './views/HomePage/MasterPage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Helmet>
          <meta charSet="utf-8" />
          <title>Electricaltrendz</title>
          <link rel="icon" type="image/png" href={logo} />
        </Helmet>
        <Router basename={process.env.PUBLIC_URL}>
        <Switch>
            <Route path={`/index`} component={MasterPage}/>
            <Redirect to='/index' />
        </Switch>
        </Router>
        {/* <Footer /> */}
    </div>
  );
}

export default App;
