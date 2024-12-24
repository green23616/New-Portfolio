import { BrowserRouter, Route, Routes } from 'react-router';
// Components
import Main from './pages/main/Main';
import Photos from './pages/photos/Photos';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main />} />
        <Route path="/photos" element={<Photos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
