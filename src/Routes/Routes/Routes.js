import { createBrowserRouter } from "react-router-dom";
import Main from '../../Layout/Main/Main';
import Course from "../../Pages/Course/Course";
import Home from "../../Pages/Home/Home";
import SideNav from "../../Pages/SideNav/SideNav";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        loader: () => fetch('http://localhost:5000/courses-data'),
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/courses-data')

            },
            {
                path: '/',
                element: <SideNav />,
                loader: () => fetch('http://localhost:5000/courses-data')
            },
            {
                path: '/',
                element: <SideNav />,
                loader: () => fetch('http://localhost:5000/courses-data')
            },
            {
                path: '/course',
                element: <Course />,
                // loader: () => fetch('https://jsonplaceholder.typicode.com/albums')
            },
        ]
    }
])