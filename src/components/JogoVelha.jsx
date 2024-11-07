import { Container, Grid, Box, Button } from "@mui/material"

export function JogoVelha() {

    function Square() {
        return (
            <Button sx={{
                display: 'flex',
                height: `80px`,
                width: `70px`,
                margin: '0 auto',
                padding: `0`,


                border: `1px solid`,
            }}>
                
            </Button>
        )
    }

    return (
        <Container
            maxWidth={false}
            sx={{
                display: 'flex',
                height: '100vh',
                margin: '0 auto',

                justifyContent: 'center',
                alignItems: 'center',
                textAlign: `center`,
                border: '1px solid',
                borderRadius: '3px',
                boxShadow: '0 3px 6px rgba(0, 0, 0, 0.16)',

                backgroundColor: 'white',
                overflow: 'hidden',

                fontFamily: 'Arial, sans-serif',
                fontSize: '24px',

            }}
        >
            <Container
                sx={{
                    width: '100%',
                    height: '70vh',
                    alignItems: 'flex-start',
                    // flexWrap: 'wrap',
                    border: '2px solid green',

                }}
            >
                <Box sx={{
                    display: 'flex',
                    height: `100px`,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '30px',
                    marginBottom: '30px',
                }}>Jogo da velha!</Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Grid
                        container
                        spacing={0}
                        sx={{
                            display: 'flex',
                            width: `500px`,
                            height: `40vh`,
                            margin: '0 auto',
                            flexWrap: 'wrap',
                            justifyContent:`center`,
                            alignItems:`center`,
                        }}

                    >
                        <Grid>
                            <Square />
                            <Square />
                            <Square />
                        </Grid>
                        <Grid>
                            <Square />
                            <Square />
                            <Square />
                        </Grid>
                        <Grid>
                            <Square />
                            <Square />
                            <Square />
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Container>
    )
}