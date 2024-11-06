import { Container, Box, Typography } from '@mui/material';
import { MyButton } from './components/MyButton';
import { ListItems } from './components/ListItems';
import { Counter } from './components/Counter';
import { useState } from 'react';


function App() {
  
  const [count, setCount] = useState(0)
  
  return (
    <Container
      sx={{
        border: '1px solid',
        height: '98vh',
        width: '95vw',
      }}>
      Bem-Vindo ao meu aplicativo!
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
      <Counter count={count} onClick={setCount} />

    </Container>
  )
}

export default App
