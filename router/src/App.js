import './App.css';
import {Route,Routes} from"react-router-dom"
import Home from './component/Home';
import BookList from './component/Booklist';


function App(){
  return(                                                     
    <Routes parth='/' element={<Home />}>
      <Route parth='/books' element={<BookList />} />
       </Routes>
  );
};

export default App;
