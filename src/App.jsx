import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import ChatDetails from './pages/chat/ChatDetails.jsx'
import HomeChat from './pages/home/HomeChat.jsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeChat/>}/>
          <Route path='/chat' element={<ChatDetails/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
