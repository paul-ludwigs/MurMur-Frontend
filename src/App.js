import './App.css';
import { Routes, Route } from "react-router-dom";
import  Landingpage  from './components/Landingpage';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Landingpage/>}/>
    </Routes>
    </>


  );
}

export default App;
