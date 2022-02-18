import { Home } from "./pages/Home";

import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { NewRoom } from "./pages/NewRoom";
import { Room } from "./pages/Room";

import { AuthContextProvider } from './contexts/AuthContext'
import { AdminRoom } from "./pages/AdminRoom";

export function App() {

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/NewRoom" element={<NewRoom />} />
          <Route path="/NewRoom/:id" element={<Room />} />

          <Route path="/admin/NewRoom/:id" element={<AdminRoom/>} />

        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}