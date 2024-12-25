import { BrowserRouter, Route, Routes } from 'react-router';
// Components
import Photos from './pages/photos/Photos';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Photos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
