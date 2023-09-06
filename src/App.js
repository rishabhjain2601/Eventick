import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Society from './pages/Society';
import Societies from './pages/Societies';
import Event from './pages/Event'
import Home from './pages/Home';
import Events from './pages/Events';
import About from './pages/about';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/> {/* replace with Home page */}
          <Route path="/society" element={<Society/>} />
          <Route path='/societies' element={<Societies/>}/>
          <Route path="/event" element={<Event/>} />
          <Route path="events" element={<Events/>} />
          <Route path="/About" element={<About/>}/>

        </Routes>
      </Router>
    </>
  );
}

export default App;
