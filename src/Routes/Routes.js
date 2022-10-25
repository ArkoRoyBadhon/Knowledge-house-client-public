import { createBrowserRouter } from "react-router-dom";
import CoursePage from "../components/CoursePage/CoursePage";
import Home from "../components/Home/Home";
import Main from "../Layouts/Main";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/course',
                element: <CoursePage></CoursePage>,
                loader: ()=> fetch('http://localhost:5000/course')
            }
        ]
    }
])

export default routes;