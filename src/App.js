import './App.css';
import Login from './component/login';
import Logout from './component/logout';
import { BrowserRouter, Route,Switch} from "react-router-dom";
function App() {
  return (
    <div>
     <BrowserRouter>
     <Switch>
     <Route exact path="/">
        <Login />
      </Route>
      <Route exact path="/Logout">
        <Logout />
      </Route>
      </Switch>
     </BrowserRouter>
    </div>
  )
}
export default App;
