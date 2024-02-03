import Error from "../components/Error/Error";
import Teacher from "../components/Teacher/Teacher";
import Teacherinformation from "../components/Teacher/teacherinformation";
import Blog from "../components/blog/Blog";
import OneBlog from "../components/blog/OneBlog";
import PostBlog from "../components/blog/PostBlog";
import Donations from "../components/donat/Donations";
import FormForTeacher from "../components/formFromTeacher/Formteacher";
import Home from "../components/home/Home";


export const routes = [
    {path: '/', element: <Home/>, exact: true},
    {path: '/blogAll', element: <Blog/>, exact: true},
    {path: '/blogOne/:id', element: <OneBlog/>, exact: true},
    {path: '/postblog', element: <PostBlog/>, exact: true},
    {path: '/teacher', element: <Teacher/>, exact: true},
    {path: '/donat', element: <Donations/>, exact: true},
    {path: '/formForTeacher', element: <FormForTeacher/>, exact: true},
    {path: '/teacherinfo/:id', element: <Teacherinformation/>, exact: true},
    {path: '*', element: <Error/>, exact: true},
];