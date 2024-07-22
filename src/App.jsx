import DefaultLayout from "./Layouts/DefaultLayout"
import AboutPage from "./Pages/AboutPage.jsx"
import HomePage from "./Pages/HomePage.jsx"
import LoginPage from "./Pages/LoginPage.jsx"
import ConfigurationPage from "./Pages/ConfigurationPage.jsx"
import { useNavigate } from "react-router-dom"
import {
  Route, 
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'



function App() {
  //create router
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='login' element={<LoginPage />} />
        <Route path='/' element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path='about' element={<AboutPage />} />
        </Route>
        <Route path='/profile' element={<ConfigurationPage />} />
      </>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App
