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
import UserDetails from './component/UserDetails.tsx'
import Login from './component/Auth/Login.tsx'
import Workspaces from './component/Workspaces.tsx'
import TaskList from './component/TaskList.tsx'
import MemberList from './component/MemberList.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='/impressum' element={<Impressum />} />
      <Route path='/daten' element={<Daten />} />
      <Route path='/signIn' element={<SignIn />} />
      <Route path='/login' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/dashboard/:id' element={<UserDetails />} />
      <Route path='/Workspaces' element={<Workspaces />} />
      <Route path='/TaskList' element={<TaskList />} />
      <Route path='/MemberList' element={<MemberList />} />
    </Route>
  )
)

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// )

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
)