import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import Board from './components/game/Board';

import{
RouterProvider,
createBrowserRouter,
createRoutesFromElements,
Route
    }from 'react-router-dom'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<LoginPage />}/>
      <Route path='landingpage' element={<LandingPage />} />
      <Route path='landingpage/game' element={<Board />}/>
      {/* </Route>   */}
    </Route>
  )
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> 
    <RouterProvider router={router} /> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
