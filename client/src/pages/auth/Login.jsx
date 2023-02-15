import React from 'react'
import './Login.css'
import { SiBamboo } from 'react-icons/si'
import { Link } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import { Box, Button, Stack } from '@mui/material';

const Login = () => {
  return (
    <div className='w-screen h-screen relative'>
      <div className='w-full h-16 shadow-2xl bg-lime-500'>
      </div>
      <div style={{ transform: 'translateX(-50%)' }} className='fixed top-1/4 left-1/2'>
        <Link to='/' className='text-lime-500 text-9xl w-32 h-full cursor-pointer'>
          <SiBamboo className='mx-auto my-6' />
        </Link>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="standard-basic" label="Username" variant="standard" color="success" required /><br />
          <TextField id="standard-basic" label="Password" variant="standard" color="success" required />
        </Box>
        <Stack spacing={2} direction="row">
          <Button variant="contained" color="success" className='w-full'>LOGIN</Button>
        </Stack>
      </div>
    </div>
  )
}

export default Login