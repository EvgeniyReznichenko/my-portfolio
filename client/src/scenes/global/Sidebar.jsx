import { useState } from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import { Link } from 'react-router-dom'
import { tokens } from '../../theme'

const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    return (
        <Box
            active={selected === title}
            style={{
                color: colors.grey[100],
            }}
            onClick={() => setSelected(title)}
            icon={icon}
        >
            <Typography>{title}</Typography>
            <Link to={to} />
        </Box>
    )
}

const Sidebar = ({ userInfo }) => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    const [selected, setSelected] = useState('Dashboard')

    return (
        <Box
            display="flex"
            flexDirection="column"
            backgroundColor={colors.primary[400]}
            borderRadius="3px"
            height="100%"
            p={2}
        >
            <Box display="flex" justifyContent="center" alignItems="center">
                <img
                    alt="profile-user"
                    width="100px"
                    height="100px"
                    src={userInfo.avatar}
                    style={{ cursor: 'pointer', borderRadius: '50%' }}
                />
            </Box>
            <Box textAlign="center">
                <Typography
                    variant="h5"
                    color={colors.grey[100]}
                    fontWeight="bold"
                    sx={{ m: '10px 0 0 0' }}
                >
                    {userInfo.firstName} {userInfo.lastName}
                </Typography>
            </Box>
        </Box>
    )
}

export default Sidebar
