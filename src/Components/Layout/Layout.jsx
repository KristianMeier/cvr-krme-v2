import { Outlet } from 'react-router-dom'
import { DarkModeWrapper } from './DarkModeWrapper/DarkModeWrapper'
import { Footer } from './Footer/Footer'
import { Header } from './Header/Header'
import { MainContainer } from './MainContainer/MainContainer'
import { Navbar } from './Navbar/Navbar'

export const Layout = () => (
  <DarkModeWrapper>
    <Navbar />
    <MainContainer>
      <Header />
      <Outlet />
    </MainContainer>
    <Footer />
  </DarkModeWrapper>
)
