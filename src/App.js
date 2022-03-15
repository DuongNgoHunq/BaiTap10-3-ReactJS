import {ListMember} from './component/ListMember';
import './App.css';
// import FormAdd from './component/FormAdd';
import Nav from './Nav/Nav';
import { FormAdd } from './Nav/Route/FormAdd';
import Home from './Nav/Route/Home';
import { FormEdit } from './Nav/Route/FormEdit';

function App() {
  return (
    <div className="App">
      <Nav/>
      {/* <ListMember/> */}
      <FormAdd/>
      <FormEdit/>
      <Home/>
    </div>
  );
}

export default App;
