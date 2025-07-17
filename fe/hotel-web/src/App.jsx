
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Room from './pages/Room'
import { RoomDetail } from './pages/RoomDetail'
import News from './pages/News'
import NewsDetail from './pages/NewsDetail'
import Service from './pages/Service'
import ServiceDetail from './pages/ServiceDetail'
import Contact from './pages/Contact'
import Login from './pages/Login'
import PageNotFound from './pages/PageNotFound'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/room' element={<Room />} />
        <Route path='/room:id' element={<RoomDetail />} />
        <Route path='/news' element={<News />} />
        <Route path='/service' element={<Service />} />
        <Route path='/service:id' element={<ServiceDetail />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Login />} />
        
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>

  )
}

export default App
