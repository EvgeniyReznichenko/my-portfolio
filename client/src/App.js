import { Route, Routes } from 'react-router-dom'
import Sidebar from './scenes/global/Sidebar'
import Topbar from './scenes/global/Topbar'
import { Main } from './scenes/Main'
import { CssBaseline, Grid, ThemeProvider } from '@mui/material'
import { ColorModeContext, useMode } from './theme'
import { getUser } from './data'

function App() {
    const [theme, colorMode] = useMode()

    const userInfo = getUser()
    console.dir(userInfo)

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="app">
                    <Topbar />
                    <main className="content">
                        <Grid container p={2}>
                            <Grid item xs={4}>
                                <Sidebar userInfo={userInfo} />
                            </Grid>

                            <Grid item xs={8}>
                                <Routes>
                                    <Route path="/" element={<Main />}></Route>
                                </Routes>
                            </Grid>
                        </Grid>
                    </main>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}

export default App
