import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home/Home.tsx'
import './input.css'
import App from './App.tsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Impressum from './pages/Impressum/impressum.tsx'
import Daten from './pages/Daten/Daten.tsx'
import SignIn from './component/Auth/Signin.tsx'
import Dashboard from './pages/Dashboard.tsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='/impressum' element={<Impressum />} />
      <Route path='/daten' element={<Daten />} />
      <Route path='/SignIn' element={<SignIn />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

