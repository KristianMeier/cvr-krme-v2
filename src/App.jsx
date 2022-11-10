import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './Components/Layout/Layout'
import { Virkopedia } from './Pages/Virkopedia/Virkopedia'
import { MyAccount } from './Pages/MyAccount/MyAccount'
import { NoRoute } from './Pages/NoRoute/NoRoute'
import { Company } from './Pages/Company/Comapany'
import { Information } from './Pages/Information/Information'
import { LandingPage } from './Pages/LandingPage/LandingPage'
import { NoAccess } from './Pages/NoAccess/NoAccess'
import { ProtectedRoute } from './Components/Layout/ProtectedRoute/ProtectedRoute'
import { SignInPage } from './Pages/SignInPage/SignInPage'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path='virkopedia' element={<Virkopedia />} />
          <Route path='information' element={<Information />} />
          <Route path='signinpage' element={<SignInPage />} />
          <Route path=':routeParams' element={<NoRoute />} />
          <Route path='company/:arrayIndex' element={<Company />} />
          <Route
            path='/myaccount'
            element={
              <ProtectedRoute>
                <MyAccount />
              </ProtectedRoute>
            }
          />
          <Route path='noaccess' element={<NoAccess />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
