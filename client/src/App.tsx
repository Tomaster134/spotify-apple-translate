import { Route, Routes } from "react-router-dom";
import { themeOptions } from "./components/VaporTheme/VaporTheme";
import { ThemeProvider, createTheme } from "@mui/material";
import Home from "./views/Home/Home";

const App = () => {
  const theme = createTheme(themeOptions);

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
};
export default App;
