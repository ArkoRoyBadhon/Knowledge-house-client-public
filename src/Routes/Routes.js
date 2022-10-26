import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import CheckoutPage from "../components/CheckOut/CheckoutPage";
import CourseCard from "../components/CourseCard/CourseCard";
import CourseDetail from "../components/CourseDetail/CourseDetail";
import CoursePage from "../components/CoursePage/CoursePage";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Main from "../Layouts/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
                path: '/course-category/',
                element: <CoursePage></CoursePage>,
                loader: () => fetch(`http://localhost:5000/course-category`),
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/course-details/:id',
                element: <CourseDetail></CourseDetail>,
                loader: ({params}) => fetch(`http://localhost:5000/course-detail/${params.id}`)
            },
            {
                path: '/checkout',
                element: <PrivateRoute><CheckoutPage></CheckoutPage></PrivateRoute>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
])

export default routes;