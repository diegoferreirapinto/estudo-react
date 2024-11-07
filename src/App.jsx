import { Container, Box, Typography } from '@mui/material';
import { MyButton } from './components/MyButton';
import { ListItems } from './components/ListItems';
import { Counter } from './components/Counter';
import { useState } from 'react';
import { JogoVelha } from './components/JogoVelha';




{
  /*  const [count, setCount] = useState(0)
   <MyButton />

  <Box
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center'
    }}>
    <Typography
      variant={'h3'}
    >
      Diego Ferreira
    </Typography>
    <Box
      component={'img'}
      src={'https://github.com/diegoferreirapinto.png'}
      width={240}
      height={240}
      sx={{
        border: '1px solid',
        borderRadius: '50%'
      }}
    />

  </Box>

  <ListItems />
  
  <Counter count={count} onClick={setCount} />
  <Counter count={count} onClick={setCount} /> */
}


function App() {



  return (
    <Container
      maxWidth={false}
      sx={{
        display: `absolute`,
        position: `fixed`,
        top: '0',
        left: '0',
        flexWrap: 'wrap',
        border: '1px solid',
        height: '100vh',
        textAlign: `center`,


      }}>
      <Typography
        variant={`h6`}
        width={`100%`}
        sx={{
          border: '2px solid yellow',
        }}
      >
        Bem-Vindo ao meu aplicativo!
      </Typography>

      <JogoVelha />

    </Container >
  )
}

export default App
