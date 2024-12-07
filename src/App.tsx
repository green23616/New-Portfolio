import { BrowserRouter, Route, Routes } from "react-router";
// Components
import Main from "./pages/main/Main";
import Story from "./pages/story/Story";
import Photos from "./pages/photos/Photos";
import Skills from "./pages/skills/Skills";
import Works from "./pages/works/Works";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main/>}/>
        <Route path="/photos" element={<Photos/>}/>
        <Route path="/story" element={<Story/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/works" element={<Works/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
