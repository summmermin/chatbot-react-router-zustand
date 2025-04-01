import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Counter from "../pages/Counter";

const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/counter" element={<Counter />} />
        </Routes>
    </BrowserRouter>
);

export default AppRoutes;
