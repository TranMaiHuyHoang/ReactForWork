import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePages from "./pages/Home";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import ExplorePage from "./pages/Explore";
import CourseDetailPage from "./pages/CourseDetail";
import CheckoutPage from "./pages/CheckOut";
function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePages />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/Register" element={<RegisterPage />} />
                    <Route path="/Explore" element={<ExplorePage/>}/>
                    <Route path="/course/:courseId" element={<CourseDetailPage/>}/>
                    <Route path="/checkout/:courseId" element={<CheckoutPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
