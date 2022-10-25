import { createBrowserRouter } from "react-router-dom";
import CourseCard from "../components/CourseCard/CourseCard";
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
                path: '/course-category/',
                element: <CoursePage></CoursePage>,
                loader: ({params})=> fetch(`http://localhost:5000/course-category/${params.id}`),
                children: [
                    {
                        path: '/course-category/',
                        element: <CourseCard></CourseCard>,
                        loader: ({params})=> fetch(`http://localhost:5000/course-category/07`)
                    },
                    {
                        path: '/course-category/:id',
                        element: <CourseCard></CourseCard>,
                        loader: ({params})=> fetch(`http://localhost:5000/course-category/${params.id}`)
                    }
                ]
            }
        ]
    }
])

export default routes;