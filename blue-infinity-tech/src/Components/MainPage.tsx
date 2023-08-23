import { Box, Grid } from '@mui/material'
import DashBoard from './DashBoard'
import SideBar from './SideBar';

const MainPage = () => {
    return (
        <Box sx={{ backgroundColor: '#5a048f', width: '100%', borderRadius: '10px' }}>
            <Grid container spacing={2}>
                <Grid item xs={2} sm={3} md={2}>
                    <SideBar />
                </Grid>
                <Grid item xs={10} md={10} sm={9} sx={{ backgroundColor: "#ebe4f0", borderTopLeftRadius: '25px', borderBottomLeftRadius: '25px', borderTopRightRadius: '10px', borderBottomRightRadius: '10px' }}>
                    <DashBoard />
                </Grid>
            </Grid>
        </Box>
    )
}

export default MainPage
