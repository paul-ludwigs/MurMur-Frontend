import "./App.css";
import { Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Landingpage from "./components/Landingpage";
import Register from "./components/Register";
import Search from "./components/Search";
import Create from "./components/Create";
import Overview from "./components/Overview";
import Detail from "./components/Detail";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path={"/"} element={<Landingpage />} />
          <Route path={"/register"} element={<Register />} />
          <Route path={"/search"} element={<Search />} />
          <Route path={"/create"} element={<Create />} />
          <Route path={"/search/:cityname"} element={<Overview />} />
          <Route path={"search/:cityname/:id"} element={<Detail />} />
          <Route path={"/profile"} element={<Profile />} />   
        </Routes>
      </main>
    </div>
  );
}

export default App;
