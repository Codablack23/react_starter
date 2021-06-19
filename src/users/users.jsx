import {BrowserRouter as Router,Route ,Switch,useRouteMatch, Link } from 'react-router-dom';
import Login from './login';
import SignUp from './signup';



const Users = () => {
    const {path, url}=useRouteMatch()
    return (
        <>
          <Switch>
              <Route exact path={`${path}`}>
                  <Login/>
              </Route>
              <Route exact path={`${path}/register`}>
                  <SignUp/>
              </Route>
          </Switch>  
          </> 
     );
}
 
export default Users;