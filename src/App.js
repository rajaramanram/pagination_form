import { BrowserRouter as Router, Route, Link,  Routes } from 'react-router-dom';
import Home from './components/Home'
import Form from './components/Form'
import Pagination from './components/Pagination'

function App() {

  return (
            < Routes>
              <Route exact path='/' element={<Home/>}></Route>
              <Route exact path='/form'  element={<Form/>}></Route>
              <Route exact path='/pagination'  element={<Pagination/>}></Route>
            </ Routes>
  );
}

export default App;
