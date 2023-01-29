import { Box, IconButton, Typography, useTheme } from '@mui/material'
import { useContext } from 'react'
import { ColorModeContext, tokens } from '../../theme'
import InputBase from '@mui/material/InputBase'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import SearchIcon from '@mui/icons-material/Search'
import Grid from '@mui/material/Grid'

const Topbar = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const colorMode = useContext(ColorModeContext)

    return (
        <Grid container p={2}>
            {/* SEARCH BAR */}
            <Grid item xs={4}></Grid>

            {/* TITLE TEXT */}
            <Grid item xs={4} display="flex" justifyContent="center">
                <Typography
                    variant="h2"
                    textOverflow="ellipsis"
                    overflow="hidden"
                >
                    Portfolio
                </Typography>
            </Grid>

            {/* ICONS */}
            <Grid display="flex" flexDirection="row-reverse" item xs={4}>
                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === 'dark' ? (
                        <DarkModeOutlinedIcon />
                    ) : (
                        <LightModeOutlinedIcon />
                    )}
                </IconButton>
            </Grid>
        </Grid>
    )
}

export default Topbar
