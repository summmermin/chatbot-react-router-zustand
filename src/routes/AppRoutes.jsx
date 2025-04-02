import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Counter from "../pages/Counter";
import Chat from "../pages/Chat";

const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/chat" element={<Chat />} />
        </Routes>
    </BrowserRouter>
);

export default AppRoutes;
