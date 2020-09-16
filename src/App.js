import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import BesarSampel from "./Pages/BesarSampel/BesarSampel";
import Landing from "./Pages/Landing/Landing";
import UjiHipotesis from "./Pages/UjiHipotesis/UjiHipotesis";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route path="/uji-hipotesis" component={UjiHipotesis}/>
          <Route path="/hitung-besar-sampel" component={BesarSampel}/>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
