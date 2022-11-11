import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";

import Login from "../pages/Login";
import Main from "../pages/Main";
import MovieDetail from "../pages/MovieDetail";
import Register from "../pages/Register";

const MyRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/moviedetail" element={<MovieDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
};
export default MyRouter;
