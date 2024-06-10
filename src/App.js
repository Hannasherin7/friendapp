import logo from './logo.svg';
import './App.css';
import { AddFriend } from './components/AddFriend';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ViewAll } from './components/ViewAll';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/add'element={(<AddFriend/>)}/>
      <Route path='/view'element={(<ViewAll/>)}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
