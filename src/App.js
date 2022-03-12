import React from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import Products from "./components/Products";
import  { Route,Switch } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route path="/products" component={Products} />
        <Route path="/" component={Landing} />
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
