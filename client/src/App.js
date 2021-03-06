import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Runner from "./pages/Runner";
import RunnerLists from "./pages/RunnerLists";
import Signup from "./pages/Signup";
import User from "./pages/User";
import UserList from "./pages/UserLists";
import CardInfo from './CardInfo';
import NoMatch from "./pages/NoMatch";

const App = () => {
  return(
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/runner/:id" component={Runner} />
          <Route exact path="/runnerlists/:id" component={RunnerLists} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/user/:id" component={User} />
          <Route exact path="/profile/:id" component={Profile} />
          <Route exact path="/cardinfo" component={CardInfo}/>
          <Route exact path="/userlist/:id" component={UserList} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  )
};
  

export default App;
