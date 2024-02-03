import React, { useContext, useEffect } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Posts from '../Pages/Posts';
import { publicRoutes, privatRoutes } from '../router/routs';
import Login from '../Pages/Login';
import { AuthContext } from '../context/context';


function AppRouter() {
    //const {isAuth} = useContext(AuthContext);
    let isAuth = true;
    console.log(isAuth);

    return (
        isAuth
            ? <Routes>
                    <Route element={() => <Navigate to="/login" />} />
                {privatRoutes.map(route =>
                    <Route key={route.path} path={route.path} element={route.element} exact={route.exact} />
                )}
            </Routes>
            : <Routes>
                <Route path='/' element={<Posts />} />
                {publicRoutes.map(route =>
                    <Route key={route.path} path={route.path} element={route.element} exact={route.exact} />
                )}
            </Routes>
    )

}

export default AppRouter;
