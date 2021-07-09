import HomePage from "../Home/HomePage";
import GlobalStyles from "./GlobalStyle";
import Navbar from '../Components/Navbar';
import {Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <GlobalStyles />
    <Navbar />
    <Switch>
      <Route path='/' component={HomePage} exact />
    </Switch>
    </div>
  );
}

export default App;
