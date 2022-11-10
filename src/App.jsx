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
import {
  INFORMATION_PATH,
  MY_ACCOUNT_PATH,
  NO_ACCESS_PATH,
  SIGN_IN_PAGE_PATH,
  VIRKOPEDIA_PATH,
} from './Constants/Constants'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path={VIRKOPEDIA_PATH} element={<Virkopedia />} />
          <Route path={INFORMATION_PATH} element={<Information />} />
          <Route path={SIGN_IN_PAGE_PATH} element={<SignInPage />} />
          <Route path='/:routeParams' element={<NoRoute />} />
          <Route path='/company/:arrayIndex' element={<Company />} />
          <Route
            path={MY_ACCOUNT_PATH}
            element={
              <ProtectedRoute>
                <MyAccount />
              </ProtectedRoute>
            }
          />
          <Route path={NO_ACCESS_PATH} element={<NoAccess />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
