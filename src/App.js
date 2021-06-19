import { BrowserRouter as Router, Switch,Route } from "react-router-dom";
import { useState } from 'react'
import Container from '@material-ui/core/Container'
import { useQuery,QueryClient,QueryClientProvider } from 'react-query'
import Users from './users/users'
import Home from './home';
import DashboardHome from './dashboard/Home';


const queryClient = new QueryClient();
const App=()=> {
  return (
    <Router>
    <div className="App">
       <QueryClientProvider client={queryClient}>
          <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route  path='/users'>
            <Users/>
          </Route>
          <Route exact path='/dashboard'>
            <DashboardHome/>
          </Route>
        </Switch>
    </QueryClientProvider>
    </div>
     </Router>
  )
}

export default App;
