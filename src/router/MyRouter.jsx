import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Main from "../pages/Main";
import MovieDetail from "../pages/MovieDetail";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";

const MyRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/moviedetail/:id" element={<PrivateRouter />}>
            <Route path="" element={<MovieDetail />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default MyRouter;
