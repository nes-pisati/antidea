import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage';
import Project from './pages/Project';
import ScrollToTop from './components/scroll-to-top/scroll-to-top';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';

import 'primereact/resources/themes/lara-light-indigo/theme.css'; 
import 'primereact/resources/primereact.min.css'; 
import Article from './pages/Article';


function App() {
  return (
    <PrimeReactProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route index element={<Homepage />} />
          <Route path='/rebels' element={<Project />} />
          <Route path='/project/:projectName' element={<Project />} />
          <Route path='/article/:title' element={<Article />} />
        </Routes>
      </BrowserRouter>
    </PrimeReactProvider>

  );
}

export default App;
