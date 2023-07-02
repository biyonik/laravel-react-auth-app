import {useNavigate} from "react-router-dom";
import {useAuth} from "../context/AuthContext.jsx";

export default function Home() {
    const {user, logout} = useAuth();
    const navigate = useNavigate();

    return (
        <div className="mt-12">
            <h1>Home</h1>
            <div>
                {user ? (
                    <>
                        <div>{user.name}</div>
                        <div>{user.email}</div>
                        <button onClick={logout}>Logout</button>
                    </>
                ) : (
                    <>
                        <div>You are not logged in</div>
                        <button onClick={() => navigate("/login")}>Login</button>
                        <button onClick={() => navigate("/register")}>Register</button>
                    </>
                )}
            </div>
        </div>
    )
}
