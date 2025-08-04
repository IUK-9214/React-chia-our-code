
import './App.css'
import Login from './components/Login'
import UserContextProvider from './context/UserContextProvider'
import Profile from './components/profile'

function App() {


  return (
   <UserContextProvider>
   <Login/>
   <Profile/>
   </UserContextProvider>
  )
}

export default App
