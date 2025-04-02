import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Counter from "../pages/Counter";
import Chat from "../pages/Chat";
import Test from "../pages/Test";
import Layout from "../layout/Layout";

const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            {/* 사이드바가 있는 페이지 */}
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/test" element={<Test />} />
            </Route>


            {/* 사이드바가 없는 페이지 */}
            <Route path="/about" element={<About />} />
            <Route path="/counter" element={<Counter />} />

        </Routes>
    </BrowserRouter>
);

export default AppRoutes;
