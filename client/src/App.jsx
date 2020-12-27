import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Workplace from './pages/Workplace/Workplace';
import Home from './pages/Home/Home';



function App() {
  return (
    <>
      <Router>
        <Switch>
            <Route path="/admin">
              <Workplace />
            </Route>
          
            <Route path="/">
              <Home />
            </Route>
        </Switch>
      </Router>
     
    </>
  );
}

export default App;
