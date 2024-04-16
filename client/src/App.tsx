import { Route, Routes } from "react-router-dom";
import { themeOptions } from "./components/VaporTheme/VaporTheme";
import { ThemeProvider, createTheme } from "@mui/material";
import Home from "./views/Home/Home";
import { useContext } from "react";
import { UserContext } from "./contexts/UserContext";

const App = () => {


  const { user, setUser } = useContext(UserContext);
  const userPull = async (user_id: number) => {
    const user = { user_id: user_id };
    const response = await fetch(
      `http://localhost:5000/auth/user_pull`,
      {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      }
    );
    const data = await response.json();
    if (data.status === "ok") {
      setUser({
        id: data.user_id,
        username: data.user_username,
        email: data.user_email,
      });
    }
  };
  if (user.id === -1 && localStorage.user_id) userPull(localStorage.user_id);


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
