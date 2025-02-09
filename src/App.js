import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage';
import Project from './pages/Project';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />}/>
        <Route path='/rebels' element={<Project />}/>
        {/* <Route path='/kilis' element={<Project />}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
