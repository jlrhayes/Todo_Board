
import { useState } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Board from "./components/Board";

function App() {
    const [userId, setUserId] = useState();
    //need to move this into board dashboard
    

    return (
        <BrowserRouter>
            <NavBar />
            <Route exact path="/">
                <Redirect to="/boards" /> 
            </Route>
            <Route render={() => <Dashboard />} path="/boards" exact />
            <Switch>
                <Route path = "/boards/:id">
                  <Board/>
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
