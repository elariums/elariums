import {Button,  Form, Nav, Navbar} from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import CatalogPage from '../catalog/CatalogPage';
import Guitar from '../catalog/Guitar';
import HomePage from './HomePage';


export default function NavBar() {

    return (
      <div>
        <Router>  
        <Navbar bg="light" variant="light">
        <NavLink to="#" > <Navbar.Brand >MusКаталог</Navbar.Brand> </NavLink>
        <Nav className="mr-auto">
            <NavLink to="/homepage"><Button variant="light">Главная</Button></NavLink>
            <NavLink to="/catalogpage"><Button variant="light">Каталог</Button></NavLink>
            <NavLink to="/likeIt"><Button variant="light">Понравившиеся</Button></NavLink>
        </Nav>
        <Form inline>
          <Button href="#" variant="light">Регистрация</Button>
        </Form>
        </Navbar>
      <Switch>
           <Route path="/homepage" component={HomePage}/>
           <Route path="/catalogpage" component={CatalogPage}/>
           <Route path="/guitar" component={Guitar}/>
      <HomePage />
           
       </Switch> 
      </Router> 
      </div>
    )
}
