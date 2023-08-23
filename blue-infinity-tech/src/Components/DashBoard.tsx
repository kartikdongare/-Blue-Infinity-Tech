import { Box, Button, Divider, Grid, Typography, } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ButtonProps } from '@mui/material/Button';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { data, datatype } from '../db'
import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Paper from '@mui/material/Paper';
const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText('#5a048f'),
  backgroundColor: '#5a048f',
  // textAlign:'center',
  textTransform: 'capitalize',
  borderRadius: '20px',
  '&:hover': {
    backgroundColor: '#5a048f'
  },
}));

const DashBoard = () => {
  const [details, setDetails] = useState(data[2]);
  const handleClick = (id: number) => {
    setDetails(data[id])
  }
  console.log(details, 'details')
  return (
    <Box sx={{ margin: '1rem', color: 'black' }}>
      <Grid container rowSpacing={3}>
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
            <form style={{ marginBottom: '1rem' }}>
              <button type="submit">Search </button>
              <input type="search" placeholder="Search Patients..." />
            </form>
            <ColorButton variant="contained" style={{ marginBottom: '1rem' }}>Make an Appointment</ColorButton>
            <ColorButton style={{ marginBottom: '1rem' }}>Add Patient</ColorButton>
            <Box sx={{ width: '2.4rem', height: '2.4rem', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', backgroundColor: '#5a048f', border: 'none', color: 'white', marginBottom: '1rem' }}><NotificationsIcon /></Box>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', alignContent: 'center' }}>
            <Typography variant='h5' fontWeight={'bold'} mb={2}>Billing Overview</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', backgroundColor: '#b9e0ed', padding: '.3rem', borderRadius: '10px' }}>
              <Typography variant='span' sx={{ backgroundColor: '#5a048f', color: 'white', width: '2rem', height: '2rem', borderRadius: '10px' }}><KeyboardArrowLeftIcon sx={{ fontSize: '30px' }} /></Typography>
              <Typography>February 2021</Typography>
              <Typography variant='span' sx={{ backgroundColor: '#5a048f', color: 'white', width: '2rem', height: '2rem', borderRadius: '10px' }}><KeyboardArrowRightIcon sx={{ fontSize: '30px' }} /></Typography>
            </Box>
          </Box>
        </Grid>
        <Grid container item xs={12} >
          <Grid item xs={12} md={4.5}>
            {data && data.map((ele: datatype, index) => (
              <Grid item container md={12} columnGap={2} sx={{
                backgroundColor: details.id - 1 === index ? 'white' : '#b9e0ed', padding: '.5rem', borderTopLeftRadius: '20px', borderBottomLeftRadius: '20px',
                borderBottomRightRadius: { xs: details.id - 1 === index ? '20px' : '20px', md: details.id - 1 === index ? '0px' : '20px' },
                borderTopRightRadius: { xs: details.id - 1 === index ? '20px' : '20px', md: details.id - 1 === index ? '0px' : '20px' },
                width: { xs: details.id - 1 === index ? '95%' : '95%', md: details.id - 1 === index ? '100%' : '95%' }
              }} key={index} mb={2} onClick={() => handleClick(index)}>
                <Grid item md={5} >
                  <img src={ele.image} alt='img1' className='img1' />
                </Grid>
                <Grid item md={6} sx={{ display: 'flex', flexDirection: "column", justifyContent: "space-evenly" }}>
                  <Typography fontWeight={'bold'}>{ele.name}</Typography>
                  <Typography fontWeight={'bold'}>{ele.age}, {ele.gender}</Typography>
                  {details.id - 1 === index ? (<Button variant="outlined" size='small' sx={{ borderRadius: '20px' }}>View Prescription</Button>) : (<Typography fontWeight={'bold'}>Bill No :- {ele.receiptNo}</Typography>)}
                </Grid>
              </Grid>
            ))}
          </Grid>
          <Grid item md={7.5} xs={12} sx={{ backgroundColor: 'white', borderRadius: '10px', padding: '2rem' }}>
            <Box sx={{ width: '100%', height: '100%', border: '1px solid blue', borderRadius: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }} mt={'1rem'} mx={'1.5rem'}>
                  <Typography variant='h5' fontWeight={'bold'}>Billing Details</Typography>
                  <ColorButton variant='contained' >Print Bill</ColorButton>
                </Box>
                <Grid container mt={'1rem'} p={'1rem'} sx={{ backgroundColor: '#e3e4e6' }}>
                  <Grid item xs={12} md={2.7} sm={4} sx={{ display: { xs: 'flex', }, flexDirection: { sm: 'column', md: 'column' } }}>
                    <Typography mb={2}>Patient Name</Typography>
                    <Typography fontWeight={"bold"}>{details.name}</Typography>
                  </Grid>
                  <Grid item xs={12} md={2.4} sm={3} sx={{ display: { xs: 'flex', }, flexDirection: { sm: 'column', md: 'column' }, gap: { xs: '1rem', sm: '0', md: '0' } }}>
                    <Typography mb={2}>Age/Gender</Typography>
                    <Typography fontWeight={"bold"}>{details.age},{details.gender}</Typography>
                  </Grid>
                  <Grid item xs={12} md={2.4} sm={3} sx={{ display: { xs: 'flex', }, flexDirection: { sm: 'column', md: 'column' }, gap: { xs: '1rem', sm: '0', md: '0' } }}>
                    <Typography mb={2}>Bill No</Typography>
                    <Typography fontWeight={"bold"}>{details.billNo}</Typography>
                  </Grid>
                  <Grid item xs={12} md={2.4} sm={2} sx={{ display: { xs: 'flex', }, flexDirection: { sm: 'column', md: 'column' }, gap: { xs: '1rem', sm: '0', md: '0' } }}>
                    <Typography mb={2}>Date</Typography>
                    <Typography fontWeight={"bold"}>{details.date.getDay()}-{details.date.getMonth()}-{details.date.getFullYear()}</Typography>
                  </Grid>
                  <Grid item md={2.1} sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: { md: 'column' } }}>
                    <Typography mb={2} >Receipt No</Typography>
                    <Typography fontWeight={"bold"}>{details.receiptNo}</Typography>
                  </Grid>
                </Grid>
                <Box>
                  <TableContainer >
                    <Table aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell sx={{ fontWeight: 'bold' }}>Sr.No</TableCell>
                          <TableCell align="left" sx={{ fontWeight: 'bold' }}>Service Name</TableCell>
                          <TableCell align="left" sx={{ fontWeight: 'bold' }}>Price</TableCell>
                          <TableCell align="left" sx={{ fontWeight: 'bold' }}>Quantity</TableCell>
                          <TableCell align="left" sx={{ fontWeight: 'bold' }}>Amount</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell component="th" scope="row">
                            1
                          </TableCell>
                          <TableCell align="left">{details.serviceName[0]}</TableCell>
                          <TableCell align="left">{details.price[0]}</TableCell>
                          <TableCell align="left">{details.quantity[0]}</TableCell>
                          <TableCell align="left">{details.price[0]}</TableCell>
                        </TableRow>
                        <TableRow
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell component="th" scope="row">
                            2
                          </TableCell>
                          <TableCell align="left">{details.serviceName[1]}</TableCell>
                          <TableCell align="left">{details.price[1]}</TableCell>
                          <TableCell align="left">{details.quantity[1]}</TableCell>
                          <TableCell align="left">{details.price[1]}</TableCell>
                        </TableRow>

                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>
              </Box>
              <Box sx={{ backgroundColor: '#e3e4e6', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
                    <Typography>Mobile No</Typography>
                    <Typography>Tax</Typography>
                    <Typography>Discount</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
                    <Typography>9527189774</Typography>
                    <Typography>{details.tax}</Typography>
                    <Typography>{details.discount}</Typography>
                  </Box>
                </Box>
                <Box sx={{ height: '2px', backgroundColor: 'black', width: '100%' }}></Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: '3rem', }} mx={4} mt={2}>
                  <Typography fontWeight={'bold'}>Total</Typography>
                  <Typography fontWeight={'bold'}>678</Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box >
  )
}

export default DashBoard
