import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import './App.css';
import Header from './Components/Header';
import Login from './Components/Login';
import { StateProvider } from "./StateProvider";
import reducer, { initialState } from "./reducer";

function App() {
  return (
    <div className="App">
      <StateProvider initialState={initialState} reducer={reducer}>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Login/>
          </Route>
        </Switch>
      </Router>
      </StateProvider>,

    </div>
  );
}

export default App;
