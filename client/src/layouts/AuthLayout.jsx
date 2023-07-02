import {useAuth} from "../context/AuthContext.jsx";
import {Navigate, Outlet} from "react-router-dom";

export default function AuthLayout() {
    const { user } = useAuth();

    return user ? <Outlet/> : <Navigate to={"/login"} replace={true}/>;
}
