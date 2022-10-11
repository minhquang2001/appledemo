import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Register from './pages/Register/Register';
import Login from './pages/Register/Login';
import Write from './pages/Write/Write';
import Home from './pages/Home/Home';
import Single from './pages/Single';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import './style.scss';

const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
};

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/manager/',
                element: <Home />,
            },
            {
                path: '/post/:id',
                element: <Single />,
            },
            {
                path: '/write',
                element: <Write />,
            },
        ],
    },
    {
        path: '/register',
        element: <Register />,
    },
    {
        path: '/login',
        element: <Login />,
    },
]);

function Manager() {
    return (
        <div className="app">
            <div className="container">
                {/* <RouterProvider router={router} /> */}
                {/* <Navbar />
                <Home />
                <Footer /> */}
                hello
            </div>
        </div>
    );
}

export default Manager;
