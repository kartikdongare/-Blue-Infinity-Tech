import { Box, Grid, Typography } from '@mui/material'
import GridViewIcon from '@mui/icons-material/GridView';
import Divider from '@mui/material/Divider';
import SettingsIcon from '@mui/icons-material/Settings';
import SupportIcon from '@mui/icons-material/Support';
const SideBar = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', paddingBottom: '1rem', paddingTop: '1rem', justifyContent: 'space-between', height: '94%', }}>
      <Box sx={{ display: 'flex', gap: '4rem', flexDirection: 'column', }}>
        <Typography variant='h4' sx={{ width: "60%", margin: 'auto', display: { xs: 'none', md: 'flex' } }}>LOGO</Typography>
        <Box sx={{ display: 'flex', gap: '1rem', flexDirection: 'column' }} >
          <Grid container textAlign={'center'} width={'80%'} p={'6px'} m={'auto'} columnGap={1} className='bg-color'>
            <Grid item xs={4} ><GridViewIcon /></Grid>
            <Grid item xs={6} style={{ display: 'flex', alignContent: "center", }}><Typography sx={{ display: { xs: 'none', md: 'flex', sm: 'flex' } }}>Dashboard</Typography></Grid>
          </Grid>
          <Grid container textAlign={'center'} width={'80%'} m={'auto'} columnGap={1} p={'6px'} className='bg-color'>
            <Grid item xs={4} fontSize={'20px'}><i className="fa fa-medkit" aria-hidden="true"></i>
            </Grid>
            <Grid item xs={6} style={{ display: 'flex', alignContent: "center" }} ><Typography sx={{ display: { xs: 'none', md: 'flex', sm: 'flex' } }}>Patient</Typography></Grid>
          </Grid>
          <Grid container textAlign={'center'} width={'80%'} m={'auto'} columnGap={1} p={'6px'} className='bg-color'>
            <Grid item xs={4} fontSize={'20px'}><i className="fa fa-calendar" aria-hidden="true"></i></Grid>
            <Grid item xs={6} style={{ display: 'flex', alignContent: "center", }}><Typography sx={{ display: { xs: 'none', md: 'flex', sm: 'flex' } }}>Appointment</Typography></Grid>
          </Grid>
          <Grid container textAlign={'center'} width={'80%'} m={'auto'} columnGap={1} p={'6px'} className='bg-color'>
            <Grid item xs={4} fontSize={'20px'}>
              <i className="fa fa-file-text-o"></i>
            </Grid>
            <Grid item xs={6} style={{ display: 'flex', alignContent: "center", }}><Typography sx={{ display: { xs: 'none', md: 'flex', sm: 'flex' } }}>Billing</Typography></Grid>
          </Grid>
        </Box>
      </Box>
      <Divider light />
      <Box >

        <Grid container textAlign={'center'} width={'80%'} m={'auto'} columnGap={1} p={'6px'} className='bg-color'>
          <Grid item xs={4} ><SupportIcon /></Grid>
          <Grid item xs={6} style={{ display: 'flex', alignContent: "center", }}><Typography sx={{ display: { xs: 'none', md: 'flex', sm: 'flex' } }}>Support</Typography></Grid>
        </Grid>
        <Grid container textAlign={'center'} width={'80%'} m={'auto'} columnGap={1} p={'6px'} className='bg-color'>
          <Grid item xs={4} ><SettingsIcon /></Grid>
          <Grid item xs={6} style={{ display: 'flex', alignContent: "center", }}><Typography sx={{ display: { xs: 'none', md: 'flex', sm: 'flex' } }}>Setting</Typography></Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default SideBar
