
import './App.css';
import HomePage from './pages/Home'
import UserSignup from './pages/UserSignup';
import UserLogin from './pages/UserLogin';


import HospitalSignup from './pages/HospitalSignup';
import HospitalLogin from './pages/HospitalLogin';
import HospitalPanel from './pages/HospitalPanel';
import HospitalDepartment from './pages/DepartmentHospital'


import AdminLogin from './pages/AdminLogin'
import AdminPanel from './pages/AdminPanel'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';





function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />

          <Route path='signup' element={<UserSignup />} />
          <Route path='login' element={<UserLogin />} />


          <Route path='hospital/signup' element={<HospitalSignup />} />
          <Route path='hospital/panel' element={<HospitalPanel />} />
          <Route path='hospital/login' element={<HospitalLogin />} />
          <Route path='hospital/department' element={<HospitalDepartment />} />

          <Route path='admin/login' element = {<AdminLogin />} />
          <Route path='admin/panel' element = {<AdminPanel />} />



        </Routes>
      </Router>
    </div>
  )


}

export default App;
