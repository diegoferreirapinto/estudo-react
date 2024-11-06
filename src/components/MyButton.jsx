import { Button } from '@mui/material';


export function MyButton() {
    
    function handleClick() {
        alert('Você clicou no botão!!!')
    }

    return (
        <>
            <Button
                variant={'h3'}
                size={'large'}
                onClick={handleClick}
                sx={{
                    border: '1px solid'
                }}
            >
                Eu sou um botão
            </Button>
        </>
    )
}