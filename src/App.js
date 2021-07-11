import { HashRouter, Switch} from 'react-router-dom';
import Login from './components/login';
import Transfers from './components/transfers';
import Ticket from './components/ticket'
import { useState } from 'react';
import PrivateRoute from './components/privateRoute';

function App() {

  let userLoged = localStorage.getItem('usrToken');
  const [userData, setUserData] = useState({});

  return (     
    <HashRouter>
      <Switch>
        <PrivateRoute path="/ticket" toEval={userLoged} redir="/">
          <Ticket/>
        </PrivateRoute> 

        <PrivateRoute path="/transfers" toEval={userLoged} redir="/">
          <Transfers userData={userData}/>
        </PrivateRoute> 

        <PrivateRoute path="/" toEval={!userLoged} redir="/transfers">
          <Login handleUserData={setUserData}/>
        </PrivateRoute> 
        
      </Switch>
    </HashRouter>    
  );
}

export default App;
