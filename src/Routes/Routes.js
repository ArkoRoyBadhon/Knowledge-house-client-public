import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import CheckoutPage from "../components/CheckOut/CheckoutPage";
import CourseDetail from "../components/CourseDetail/CourseDetail";
import CoursePage from "../components/CoursePage/CoursePage";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import FAQ from "../components/FAQ/FAQ";
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
                loader: () => fetch(`https://json-server-dusky-six.vercel.app/course-category`),
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
                loader: ({params}) => fetch(`https://json-server-dusky-six.vercel.app/course-detail/${params.id}`)
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><CheckoutPage></CheckoutPage></PrivateRoute>,
                loader: ({params}) => fetch(`https://json-server-dusky-six.vercel.app/course-detail/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '*',
                element: <ErrorPage></ErrorPage>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])

export default routes;