import { BrowserRouter, Route, Routes } from 'react-router';
// Components
import Main from './pages/main/Main';
import Story from './pages/story/Story';
import Photos from './pages/photos/Photos';
import Skills from './pages/skills/Skills';
import Works from './pages/works/Works';
import Music from './pages/music/Music';
import Study from './pages/study/Study';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/story" element={<Story />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/works" element={<Works />} />
        <Route path="/music" element={<Music />} />
        <Route path="/study" element={<Study />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
