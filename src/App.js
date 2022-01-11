import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages";
import SigninPage from "./pages/signin";
import {About} from "./pages/about";
import {Conductor} from "./pages/conductor/"
import {Queueing} from "./pages/queueing/"
import {Percel} from "./pages/percel/"
import {Booking} from "./pages/booking/"
import {Passenger} from "./pages/passenger/"
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SigninPage} exact />
        <Route path="/about-us" component={About} exact />
        <Route path="/conductor" component={Conductor} exact />
        <Route path="/queueing" component={Queueing} exact />
        <Route path="/percel" component={Percel} exact />
        <Route path="/booking" component={Booking} exact />
        <Route path="/pasenger" component={Pasenger} exact />
      </Switch>
    </Router>
  );
}

export default App;
