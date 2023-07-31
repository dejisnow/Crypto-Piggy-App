import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import './piggyapp.css';
import { Account } from './nav pages/account';
import { Home } from './nav pages/home';
import { Invest } from './nav pages/invest';
import { Nav } from './nav pages/nav';
import { Learn } from './nav pages/learn folder/Learn';
import { Savings } from './nav pages/savings';



function App() {

  return(


    <div>
       

  <Router>
                    <Nav />
  <Routes>

    <Route path='/' element= {<Home />} />
    <Route path='/save' element= {<Savings />} />
    <Route path='/investments' element= {<Invest />} />
    <Route path='/learn' element= {<Learn />} />
    <Route path='/account' element= {<Account />} />
  </Routes>
</Router>

    </div>
  )

}

export default App;
