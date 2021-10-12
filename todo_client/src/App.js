
import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Board from "./components/Board";

function App() {
    const [userId, setUserId] = useState();
    //need to move this into board dashboard
    

    return (
        <BrowserRouter>
            <Route render={() => <Dashboard />} path="/" exact />
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
