import {AppThemeContextProvider} from "./context/ThemeContextProvider.tsx";
import {CssBaseline} from "@mui/material";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import WebLayout from "./components/WebLayout.tsx";
import {HomePage} from "./pages/HomePage.tsx";
import {Portolio} from "./pages/Portfolio.tsx";
import {About} from "./pages/About.tsx";
import {Contacts} from "./pages/Contacts.tsx"
import {AppDetail} from "./pages/AppDetail.tsx";
import {useEffect} from "react";

function App() {
    useEffect(() => {
        // Apply smooth scrolling to the html element via JS
        document.documentElement.style.scrollBehavior = 'smooth';
    }, []);
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
                      <Route element={< WebLayout/>}>
                          <Route path={"/portfolio/:appName"} element={<AppDetail/>}></Route>
                      </Route>
                      <Route element={< WebLayout/>}>
                          <Route path={"/about"} element={<About/>}></Route>
                      </Route>
                      <Route element={< WebLayout/>}>
                          <Route path={"/contacts"} element={<Contacts/>}></Route>
                      </Route>
                  </Routes>
              </BrowserRouter>
          </AppThemeContextProvider>
      </>
  )
}

export default App
