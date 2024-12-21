import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home/Home.tsx'
import './input.css'
import App from './App.tsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Impressum from './pages/Impressum/impressum.tsx'
import Daten from './pages/Daten/Daten.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(    
        <Route path='/' element={<App />}>
          <Route path='' element={<Home />} />
          <Route path='/impressum' element={<Impressum />} />
          <Route path='/daten' element={<Daten />} />
        </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
)

