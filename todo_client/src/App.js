import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Board from "./components/Board";

function App() {
    const [userId, setUserId] = useState();

    //need to move this into board dashboard
    const [columns, setColumns] = useState([
        {
            id: 1,
            name: "Todo",
        },
        {
            id: 2,
            name: "In progress",
        },
    ]);

    return (
        <BrowserRouter>
            <Route render={() => <Board columns={columns} />} path="/" exact />
            <Switch>
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
