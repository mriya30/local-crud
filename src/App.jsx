import '../src/assets/CSS/style.css'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Routers, Routes, Route } from 'react-router-dom'
import { About, Home } from "./pages/Home"
import LocalData from "./pages/localStorage/LocalData"
import LocalStorage from './pages/localStorage/LocalStorage'
import Registration from "./pages/Registration"
import SignUp from "./pages/SignUp"
import ValidForm from "./pages/ValidForm"
import Header from './layout/Header'
import Footer from './layout/Footer'
import Error from './pages/Error'
import Create from './pages/CRUD/create'
import Testing from './pages/Testing'
import View from './pages/CRUD/View'
import SingleUser from './pages/CRUD/SingleUser'
import Update from './pages/CRUD/Update'
import ValidationForm from './pages/ValidationForm'


const App = () => {
  return (
    <>
      {/* <About/>
    <Home/> */}
      {/* <Registration/> */}
      {/* <SignUp/> */}
      {/* <ValidForm/> */}
      {/* <LocalStorage/> */}
      {/* <LocalData/> */}
      <ValidationForm/>
      {/* <Routers>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/' element={<About/>} />
          <Route path='/student/Home' element={<Home/>}/>
          <Route path='/Test' element={<Testing/>} />
          <Route path='*' element={<Error/>} />
          <Route path='/Registration' element={<Create/>} />
          <Route path='/View' element={<View/>} />
          <Route path='/SingleUser/:userId' element={<SingleUser/>} />
          <Route path='/Update/:id' element={<Update/>} />
        </Routes>
        <Footer />
      </Routers> */}
    </>
  )
}
export default App