import {createContext, useContext, useEffect, useState} from "react";
import axios from "../api/axios.js";
import {useNavigate} from "react-router-dom";

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();
    const csrf = async () => await axios.get('/sanctum/csrf-cookie');

    const getUser = async () => {
        try {
            const {data} = await axios.get("/api/user");
            setUser(data);
        } catch (error) {
            setErrors(error.response?.data?.message);
        }
    }

    const login = async ({...data}) => {
        await csrf();
        try {
            await axios.post("/login", data);
            await getUser();
            navigate("/");
        } catch (error) {
            if (error.response?.status === 422) {
                setErrors(error.response?.data?.errors);
            }
        }
    }

    const register = async ({...data}) => {
        await csrf();
        try {
            await axios.post("/register", data);
            await getUser();
            navigate("/");
        } catch (error) {
            if (error.response?.status === 422) {
                setErrors(error.response?.data?.errors);
            }
        }
    }

    const logout = async () => {
        axios.post("/logout").then(() => {
            setUser(null);
            navigate("/login");
        });
    }

    useEffect(() => {
        if (!user) {
            getUser();
        }
    }, []);


    const contextValue = {
        user,
        login,
        register,
        logout,
        getUser,
        errors
    }

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
