import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import ForgotPassword from "./Pages/ForgetPassword";
import CheckEmail from "./Pages/CheckEmail";
import Layout from "./Pages/Layout";
import Dashboard from "./Pages/Dashboard";
import Profile from "./Pages/Profile";
import Product from "./Pages/Product";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/CheckEmail" element={<CheckEmail />} />
        <Route element={<Layout />}>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Product" element={<Product />} />
        </Route>
        {/* <Route path="/Layout" element={<Layout />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Product" element={<Product />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
