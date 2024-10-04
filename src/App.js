import React from 'react'
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import GetUsers from './Pages/GetUsers'
import AddUsers from './Pages/AddUsers'
import UpdateUsers from './Pages/UpdateUsers'
import "./Styles/style.css"

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<GetUsers/>}/>
            <Route path='/add' element={<AddUsers/>}/>
            <Route path='/edit/:id' element = {<UpdateUsers /> }/>
        </Routes>
    </BrowserRouter>
  )
}

export default App


