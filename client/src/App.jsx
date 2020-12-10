<<<<<<< Updated upstream

import Home from './pages/Home/Home'
=======
>>>>>>> Stashed changes
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Workplace from './pages/Workplace/Workplace';
import Login from './pages/Login/Login';
function App() {
  return (
    <>
      
      <Router>
        <Switch>
            <Route path="/admin123456">
              <Workplace />
            </Route>
            <Route path="/">
              <Login />
            </Route>
        </Switch>
      </Router>
     
    </>
  );
}

export default App;
