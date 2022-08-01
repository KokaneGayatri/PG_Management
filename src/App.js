import React, { Component } from "react";
import "./App.css";
import Signin from "./components/Signin/Signin";
import { render } from "@testing-library/react";
import Register from "./components/Register/Register";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import ContactUs from "./components/ContactUs/ContactUs";
import AboutUs from "./components/AboutUs/AboutUs";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gallery from "./components/Gallery/Gallery";
import Booking from "./components/Booking/Booking";
import { UserHome } from "./components/UserHome/UserHome";
import Mess from "./components/Mess/Mess";
import Paymentform from "./components/Paymentform/Paymentform";
import Payment from "./components/Payment/Payment";
import AdminHome from "./components/AdminHome/AdminHome";
import ViewBooking from "./components/ViewBooking/ViewBooking";
import ViewMessEnrollments from "./components/ViewMessEnrollments/ViewMessEnrollments";
import ViewPayment from "./components/ViewPayment/ViewPayment";
import ViewUser from "./components/ViewUser/ViewUser";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
      box: {},
      route: "signin",
      isSignedIn: false,
    };
  }

  onRouteChange = (route) => {
    this.setState({ route: route });
  };

  onRouteChange = (route) => {
    if (route === "signout") {
      this.setState({ isSignedIn: false });
    } else if (route === "home") {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: route });
  };

  render() {
    return (
      <div>
        <ToastContainer />
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/signin" element={<Signin />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/gallery" element={<Gallery />} />
            <Route exact path="/contactus" element={<ContactUs />} />
            <Route exact path="/aboutus" element={<AboutUs />} />
            <Route exact path="/" element={<AboutUs />} />

            <Route exact path="/userhome" element={<UserHome />} />
            <Route exact path="/booking" element={<Booking />} />
            <Route exact path="/mess" element={<Mess />} />
            <Route exact path="/payment" element={<Payment />} />
            <Route exact path="/paymentform" element={<Paymentform />} />

            
            <Route exact path="/admin" element={<AdminHome />} />
            <Route exact path="/viewbooking" element={<ViewBooking />} />
            <Route exact path="/viewmessenrollments" element={<ViewMessEnrollments />} />
            <Route exact path="/viewpayments" element={<ViewPayment />} />
            <Route exact path="/viewuser" element={<ViewUser />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
