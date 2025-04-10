import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import ForgotPassword from "./Pages/ForgetPassword";
import CheckEmail from "./Pages/CheckEmail";
import Layout from "./Pages/Layout";
import Dashboard from "./Pages/Dashboard";
import Profile from "./Pages/Profile";
import Product from "./Pages/Product";
import Chart from "./Pages/Chart";
import PasswordSuccess from "./Pages/PasswordSuccess";
import Setting from "./Pages/Setting";
import Contact from "./Pages/Contact";
import ResetPassword from "./Pages/ResetPassword";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/CheckEmail" element={<CheckEmail />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
        <Route path="/PasswordSuccess" element={<PasswordSuccess />} />
        <Route element={<Layout />}>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Chart" element={<Chart />} />
          <Route path="/Setting" element={<Setting />} />
          <Route path="/Contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
