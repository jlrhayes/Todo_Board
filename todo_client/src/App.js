import React, { useState, Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Board from "./components/Board";

function App() {
  const ProtectedRoute = ({ component: Comp, path, ...rest }) => {
    const token = localStorage.getItem("token");
    return (
      <Route
        path={path}
        {...rest}
        render={(props) => {
          return token ? (
            <Comp {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  prevLocation: path,
                  error: "You need to login first!",
                },
              }}
            />
          );
        }}
      />
    );
  };

  return (
    <BrowserRouter>
      <NavBar />

      <Route exact path="/">
        <Redirect to="/boards" />
      </Route>
      <ProtectedRoute path="/boards" component={Dashboard} />
      <Switch>
        <ProtectedRoute path="/boards/:id" component={Board} />
        <Route render={() => <Login />} path="/login" />
        <Route render={() => <Register />} path="/register" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
