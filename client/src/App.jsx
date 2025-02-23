import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import Login from "../pages/Login";
import Register from "../pages/Register";
import Admin from "../pages/admin/Admin";
import Manager from "../pages/manager/Manager";
import Users from "../pages/users/User";
import Auth from "../Private/Auth";
function App() {
  return (
     <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>

            {/* Admin Route */}

            <Route path="/admin" element={<Auth allowedRole={['admin']}/>}>
               <Route path="dashboard" element={<Admin/>}/>
            </Route>

            {/* Manager Route */}
            <Route path="/manager" element={<Auth allowedRole={['admin','manager']}/>}>
               <Route path="dashboard" element={<Manager/>}/>
            </Route>

            {/* Users Route */}
            <Route path="/user" element={<Auth allowedRole={['admin','manager','user']}/>}>
               <Route path="dashboard" element={<Users/>}/>
            </Route>

        </Routes>
     </BrowserRouter>
  )
}

export default App
