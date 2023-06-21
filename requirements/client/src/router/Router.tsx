/* Libraries */
import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";

/* Pages */
import SignInPage from "./../pages/SignInPage";

function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <SignInPage/>
                } />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;