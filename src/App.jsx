import { createContext, useContext, useEffect, useState } from 'react'
import './App.css'
import Form from './components/Form'

export const AuthContext = createContext({
  token: "<empty-token>",
  setToken: () => {},
})

function App() {
  const [token, setToken] = useState("<empty-token>")
  useEffect(() => {
    console.log(token);
  }, [token]);

  return (
    <AuthContext.Provider value={{token, setToken}}>
      <div className="App">
        {token}
        <Form />
      </div>
    </AuthContext.Provider>
  )
}

export default App
