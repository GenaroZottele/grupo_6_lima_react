import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import {Login} from "../pages/Login";
import {Register} from "../pages/Register";

import { Footer } from "../components/Footer";

const Navigation = () => {


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default Navigation;