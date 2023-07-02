import {Link} from "react-router-dom";
import {useAuth} from "../context/AuthContext.jsx";

export default function Nav() {
    const {user, logout} = useAuth();

    return (
        <nav className="bg-indigo-900 text-white px-2 py-2.5 sm:px-4">
            <div className="container mx-auto flex flex-wrap items-center justify-between">
                <a href="#" className="flex items-center">
                    Laravel + React Auth App
                </a>
                <button
                    data-collapse-toggle="navbar-default"
                    type="button"
                    className="
                            ml-3
                            inline-flex
                            items-center
                            rounded-lg
                            text-sm
                            text-gray-500
                            focus:outline-none
                            focus:ring-2
                            focus:ring-gray-200
                            dark:text-gray-400
                            dark:hover:bg-gray-700
                            dark:focus:ring-gray-600
                            md:hidden
                        "
                    aria-controls="navbar-default"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="h-6 w-6"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4 6H20V8H4V6ZM4 11H20V13H4V11ZM4 16H11V18H4V16Z"
                        />
                    </svg>
                </button>
                <div
                    id="navbar-default"
                    className="hidden w-full md:block md:w-auto">
                    <ul
                        className="
                                mt-4
                                flex flex-col
                                rounded-lg
                                p-4
                                md:mt-0 md:flex-row md:space-x-8 md:p-0 md:text-sm md:font-medium"
                    >
                        {user ? (
                            <>
                                <li>
                                    <Link
                                        className="block rounded py-2 pr-4 pl-3 text-white"
                                        aria-current="page"
                                        to="/"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <button
                                        className="block rounded py-2 pr-4 pl-3 text-white"
                                        aria-current="page"
                                        onClick={() => logout()}
                                    >
                                        Logout
                                    </button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link
                                        className="block rounded py-2 pr-4 pl-3 text-white"
                                        aria-current="page"
                                        to="/register"
                                    >
                                        Register
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="block rounded py-2 pr-4 pl-3 text-white"
                                        aria-current="page"
                                        to="/login"
                                    >
                                        Login
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
