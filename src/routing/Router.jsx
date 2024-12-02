import {BrowserRouter, Route, Routes} from "react-router";
import {MainPage} from "src/pages/main";
import {LoginPage} from "src/pages/login";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </BrowserRouter>
    )
}