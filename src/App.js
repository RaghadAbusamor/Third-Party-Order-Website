import './App.css';
import HomePage from './pages/home/home';
import Header from './component/core/header';
import UserPage from './pages/identify-use/identify-user';
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
       
        {/* <div className='home'>
        <UserPage />
      </div>  */}


        <Routes>
          <Route path='/home' element={<HomePage />} />
          <Route path='/user' element={<UserPage />} />
        </Routes>

      </BrowserRouter>


    </div>
  );
}







export default App;
