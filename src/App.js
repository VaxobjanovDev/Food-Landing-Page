import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BookingHero from "./component/Booking/BookingHero";
import FoodsCardHero from "./component/Cards/FoodsCardHero";
import ContactHero from "./component/Contact/ContactHero";
import DownloadAppHero from "./component/DownloadApp/DownloadAppHero";
import HomeSectionHero from "./component/Home/HomeSectionHero";
import Navbar from "./component/Navbar";
import ProductsHero from "./component/Products/ProductsHero";
import ServicesHero from "./component/Services/ServicesHero";


const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomeSectionHero} />
        <Route path="/products" component={ProductsHero} />
        <Route path="/booking" component={BookingHero} />
        <Route path="/services" component={ServicesHero} />
        <Route path="/foods" component={FoodsCardHero} />
        <Route path="/downloadApp" component={DownloadAppHero} />
        <Route path="/contacts" component={ContactHero} />
      </Switch>
    </Router>
  );
};

export default App;
