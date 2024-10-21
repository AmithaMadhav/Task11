import { Button, Stack } from '@mui/material';
import './App.css';
import { useState } from 'react';

function App() {
  const [bgColor, setBgColor] = useState('black'); 

  const changeStyle = (color) => {
    setBgColor(color); 
  };

  return (
    <>
      <div
        className='style'
        style={{width: '100%',minHeight: '100vh',backgroundColor: bgColor, textAlign: 'center',alignContent: 'center'}}
      >
        <h1 className='text-light'>Background Color Changing App</h1>
        <form
          action=''
          className='d-flex justify-content-center align-items-center mt-5'
        >
          <Stack direction='row' spacing={4}>
            <Button onClick={() => changeStyle('blue')} variant='contained'>
              Blue
            </Button>
            <Button onClick={() => changeStyle('green')} variant='contained' className='bg-success'>
              Green
            </Button>
            <Button onClick={() => changeStyle('yellow')} variant='contained' className='bg-warning'>
              Yellow
            </Button>
            <Button onClick={() => changeStyle('red')} variant='contained' className='bg-danger'>
              Red
            </Button>
          </Stack>
        </form>
      </div>
    </>
  );
}

export default App;
