// eslint-disable-next-line no-unused-vars
import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import BuyersRegistration from "./pages/buyerSignup";
import SellerRegistration from "./pages/selllerSignup";
import SellerRegistration12 from "./pages/registrationForSeller12";
import Login from "./pages/login";
<<<<<<< HEAD
import Home from "./pages/home";
<<<<<<< HEAD
import Job from "./pages/jobPost";
import OneJobPost from "./pages/oneJob";
=======
import Profile from "./pages/profile";
<<<<<<< HEAD
>>>>>>> 73850d192cc8225d1885974b198e3daaf6f3ecb6
=======
=======
import User from "./pages/userChoosePage";
import ForgotPassword from "./pages/fogotPassword";
import Test from "./components/test";
>>>>>>> d3aaceb1ae1ebf4f9a6c78501c3f60e93cbd4dc6
>>>>>>> 7150f3e9e45eadc3cadc031174f1b3e78ef64f86
import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/user" element={<User />} />
        <Route path="/buyerRegistration" element={<BuyersRegistration />} />
        <Route path="/sellerRegistration" element={<SellerRegistration />} />
        <Route path="/sellerRegistration12" element={<SellerRegistration12 />} />
        <Route path="/login" element={<Login />} />
<<<<<<< HEAD
<<<<<<< HEAD
        <Route path="/jobpost" element={<Job />} />
        <Route path="/onejobpost" element={<OneJobPost />} />

=======
        <Route path="/profile" element={<Profile />} />
>>>>>>> 73850d192cc8225d1885974b198e3daaf6f3ecb6
=======
        <Route path="/profile" element={<Profile />} />
=======
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/test" element={<Test />} />
>>>>>>> d3aaceb1ae1ebf4f9a6c78501c3f60e93cbd4dc6
>>>>>>> 7150f3e9e45eadc3cadc031174f1b3e78ef64f86
      </Routes>
    </Router>
  );
}
