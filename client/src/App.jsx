import { CssBaseline, ThemeProvider } from "@mui/material"
import {createTheme} from "@mui/material/styles"
import { useMemo } from "react";
import { useSelector } from "react-redux"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { themeSettings } from "./theme"
import Dashboard from "./scenes/dashboard"
import Layout from "./scenes/layout"
import Geography from "./scenes/geography"
import Sectors from "./scenes/sectors"
import Topics from "./scenes/topics"
import Intensity from "./scenes/intensity"
import Relevance from "./scenes/relevance"
import Likelihood from "./scenes/likelihood"
import Pestle from "./scenes/pestle"

function App() {
  const mode = useSelector((state)=> state.global.mode);
  const theme = useMemo(()=> createTheme(themeSettings(mode)),[mode]);

  return <div className="app">
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline></CssBaseline>
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<Navigate to="/dashboard" replace/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/geography" element={<Geography/>}/>
            <Route path="/sectors" element={<Sectors/>}/>
            <Route path="/topics" element={<Topics/>}/>
            <Route path="/intensity" element={<Intensity/>}/>
            <Route path="/relevance" element={<Relevance/>}/>
            <Route path="/likelihood" element={<Likelihood/>}/>
            <Route path="/pestle" element={<Pestle/>}/>
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </div>
}

export default App