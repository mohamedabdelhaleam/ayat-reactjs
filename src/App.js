
import {  Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import PrivacyPolicy from './Content/PrivacyPolicy';
import Account from './Content/Account';
import Dashboard from './Content/Dashboard';
import EditPage from './Content/EditPage';
import ResetPassword from './Content/ResetPassword';
import NewPassword from './Content/NewPassword';
import Error404 from './Content/Error404';
import Ayat from './Content/Ayat';
import Hadith from './Content/Hadith';
import EditProfile from './Content/EditProfile';
import AddPage from './Content/AddPage';
import AddFbPages from './Content/AddFbPages';

function App() {
  return (
    <>
        <Navbar />
        <Routes>
          <Route exact path='/' element ={<Home />}/>
          <Route path='/privacypolicy' element ={<PrivacyPolicy />}/>
          <Route path='/account' element ={<Account />}/>
          <Route path='/dashboard' element ={<Dashboard />}/>
          <Route path='/editPage/:id' element ={<EditPage />}/>
          <Route path='/resetpassword' element ={<ResetPassword />}/>
          <Route path='/new-pass' element ={<NewPassword />}/>
          <Route path='/ayat' element ={<Ayat />}/>
          <Route path='/addfbpages' element ={<AddFbPages />}/>
          <Route path='/addpage/:pagestoken' element ={<AddPage />}/>
          <Route path='/editprofile' element ={<EditProfile />}/>
          <Route path='/hadith' element ={<Hadith />}/>
          <Route path='*' element ={<Error404 />}/>
        </Routes>
        <Footer />
    </>
  );
}

export default App;
