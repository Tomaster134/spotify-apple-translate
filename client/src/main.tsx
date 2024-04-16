import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import UserContextProvider from './contexts/UserContext.tsx'
import { SnackbarProvider } from 'notistack'
import StartedContextProvider from './contexts/StartedContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <UserContextProvider>
        <StartedContextProvider>
    <BrowserRouter>
      <SnackbarProvider autoHideDuration={5000} style={{ fontSize: "18px" }}>
        <App />
      </SnackbarProvider>
    </BrowserRouter>
    </StartedContextProvider>
  </UserContextProvider>
)
