import { StyledEngineProvider } from "@mui/material"
import Dashboard from "../../components/Dashboard/Dashboard"
import './Home.css'

const Home = () => {
  return (
    <StyledEngineProvider injectFirst>
    <Dashboard/>
    </StyledEngineProvider>
  )
}
export default Home