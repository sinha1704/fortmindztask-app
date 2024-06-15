import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfileViews from './Pages/ProfileViews';
import About from './Pages/AboutPage';
import SavedList from './Pages/SavedList';
import AppliedList from './Pages/AppliedList';
import DashBoard from './Pages/DashBoard';
function App() {
  return (
    <BrowserRouter>
    
    <Sidebar >
    <Routes>
      {/* <Route path="/" element={}> */}
       
      
        {/* <Route path="blogs" element={<Blogs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />  */}
      {/* </Route> */}
      <Route  path="profile_views" element={<ProfileViews />} />
        <Route  path="Saved Listing" element={<SavedList />} />
        <Route  path="Applied Listing" element={<AppliedList />} />
        <Route  path="dashboard" element={<DashBoard />} />
    </Routes>
    </Sidebar>
  </BrowserRouter>
  );
}

export default App;
