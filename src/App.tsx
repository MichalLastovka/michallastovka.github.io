import {AppThemeContextProvider} from "./context/ThemeContextProvider.tsx";
import {CssBaseline} from "@mui/material";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import WebLayout from "./components/WebLayout.tsx";
import {HomePage} from "./pages/HomePage.tsx";
import {Portolio} from "./pages/Portfolio.tsx";

function App() {

  return (
      <>
          <AppThemeContextProvider>
              <CssBaseline/> {/* MUI's baseline styles */}
              <BrowserRouter>
                  <Routes>
                      <Route element={< WebLayout/>}>
                          <Route path={"/"} element={<HomePage/>}></Route>
                      </Route>
                      <Route element={< WebLayout/>}>
                          <Route path={"/portfolio"} element={<Portolio/>}></Route>
                      </Route>
                  </Routes>
              </BrowserRouter>
          </AppThemeContextProvider>
      </>
  )
}

export default App
