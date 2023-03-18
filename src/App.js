
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ListarClientesPage from './components/ListarClientesPage';
import EditclientsPage from './components/EditclientsPage';

function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element = {<HomePage/>}/> 
      <Route path="/clientes" element = {<ListarClientesPage/>}/> 
      <Route path="/clientes/novo" element = {<EditclientsPage/>}/> 
   
    </Routes>
    </div>
  );
}

export default App;
