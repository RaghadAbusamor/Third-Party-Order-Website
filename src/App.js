import './App.css';
import HomePage from './pages/home/home';
import Header from './component/core/header';
import UserPage from './pages/identify-use/identify-user';
import { BrowserRouter, Routes, Route ,Navigate} from "react-router-dom";
import NotFound from './pages/notFound/notfound';
import Form from './component/common/form/form-signUp1';
import FormTow from './component/common/form/form-signUp2';
import NFound from './pages/notFound/notF';
import Login from './pages/login-page/login';


// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <div className='home'>
//       <HomePage />
//       </div>
//     </div>
//   );
// }


{/* <Route path='/company' element={<HomePage />} /> */ }



function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header />
      
        <Routes>
          {/* <Route path="/*" element={<NotFound/>} /> */}
          {/* <Route path="/*" element={<NFound/>} /> */}
          <Route path='/home' element={<HomePage />} />
          <Route path='/user' element={<UserPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home/patron' element={<FormTow/>} />
          <Route path="/*" element={<Navigate to='/user' />} />

        </Routes>

      </BrowserRouter>


    </div>
  );
}







export default App;
