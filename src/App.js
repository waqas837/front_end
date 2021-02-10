import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import ShowUsers from "./componets/ShowUsers";
import Update from "./componets/Update";
import Navbar from "./componets/Navbar";

const App = () => { 
  return ( 
    <div>
      <Router> 
        <Navbar />
        <Route path="/users">
          <ShowUsers />
        </Route>
        <Route path="/update">
          <Update />
        </Route>
      </Router>
    </div>
  );
};

export default App;
