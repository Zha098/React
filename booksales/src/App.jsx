import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Pages";
import Books from "./Pages/books";
import Tim from "./Pages/tim";
import Kontak from "./Pages/kontak";
import Login from "./Pages/auth/login";
import Register from "./Pages/auth/register";


function App() {

  return (
    <>

      <div className="container">

      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="books" element={<Books/>} />
          <Route path="login" element={<Login/>} />
          <Route path="register" element={<Register/>} />
          <Route path="tim" element={<Tim/>} />
          <Route path="kontak" element={<Kontak/>} />
          
        </Routes>
      </BrowserRouter>

      </div>
    </>
  )
}


export default App
