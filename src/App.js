//npm install @mui/material @emotion/react @emotion/styled
//npm install @mui/icons-material

// import { 
//   createBrowserRouter, 
//   createRoutesFromElements,
//   RouterProvider,
//   Route,
//   BrowserRouter,
//   Routes
// } from 'react-router-dom';

import {Outlet} from 'react-router-dom'

import './App.css';

// import RootLayout from './components/RootLayout';
// import LandingPage from "./components/LandingPage";
// import LoginPage from "./components/LoginPage";
// import Board from './components/game/Board';


// const routerfunc = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<RootLayout />}>
//       {/* <Route path='/landingpage' element={<LandingPage />}/>   */}
//     </Route>
//   )
// )

function App() {

    return (
      // <div>
      //   <LoginPage />
      //   <LandingPage /> 
      //   <Board />
      // </div>
      
      // <RouterProvider router={routerfunc}/>

      // <BrowserRouter>
      // <Routes>
      //   <Route path='/' element={<LoginPage />} />
      //   <Route path='/landingpage' element={<LandingPage />} />
      //   <Route path='/landingpage/game' element={<Board />} />
      // </Routes>
      // </BrowserRouter>

      <Outlet />

    );
}

export default App;

