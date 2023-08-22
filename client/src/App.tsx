import { Route, Routes } from 'react-router'
import AuthPage from './pages/AuthPage'
import LoginPage from './pages/AuthPage/LoginPage'
import RegisterPage from './pages/AuthPage/RegisterPage'

function App() {

  return (
    <Routes>
      <Route path="/auth/*" element={<AuthPage />} >
        <Route index element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>
    </Routes>
  )
}

export default App
