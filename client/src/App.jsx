import Home from './pages/Home/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Workplace from './pages/Workplace/Workplace';
function App() {
  return (
    <>
      
      <Router>
        <Switch>
            <Route path="/admin123456">
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
