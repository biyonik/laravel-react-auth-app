import {useAuth} from "../context/AuthContext.jsx";
import {Navigate, Outlet} from "react-router-dom";

export default function GuestLayout() {
    const { user } = useAuth();

    return !user ? <Outlet/> : <Navigate to={"/"} replace={true}/>;
}
