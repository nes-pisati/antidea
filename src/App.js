import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage';
import Project from './pages/Project';
import ScrollToTop from './components/scroll-to-top/scroll-to-top';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route index element={<Homepage />}/>
        <Route path='/rebels' element={<Project />}/>
        <Route path='/project/:projectName' element={<Project />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
