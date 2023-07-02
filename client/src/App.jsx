import {Route, Routes} from "react-router-dom";
import {Nav} from "./components";
import {Home, Login, Register} from "./pages";
import {AuthLayout, GuestLayout} from "./layouts";

export default function App() {
    return (
        <div className="bg-slate-100 min-h-screen">
            <Nav/>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Routes>
                    <Route element={<AuthLayout/>}>
                        <Route path="/" element={<Home/>}/>
                    </Route>
                    <Route element={<GuestLayout/>}>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/login" element={<Login/>}/>
                    </Route>
                </Routes>
            </div>
        </div>
    )
}
