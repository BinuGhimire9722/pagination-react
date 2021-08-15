import React from "react";
import NavbarPage from "../components/navbar";
import {BrowserRouter as Router ,Switch ,Route } from "react-router-dom";
import route from "../routes/routes";
function Layout(props){
    return <div>
        <Router>
            <NavbarPage/>
            <Switch>                
                {route.map((item) => {
                    return <Route path={item.path} component={()=><item.component {...props} />}  exact></Route>
                })}
            </Switch>
        </Router>

    </div>
}
export default Layout;