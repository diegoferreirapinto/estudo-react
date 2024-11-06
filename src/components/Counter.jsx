// import { useState } from 'react';
import { Box, Button } from '@mui/material';

export function Counter({count, onClick}) {

    return (
        <>
            <Button
                variant={'h3'}
                size={'large'}
                sx={{
                    display: 'flex',
                }}
            >
                <p>
                    {count}
                </p>

                <Box>
                    <Button
                        variant={'h3'}
                        size={'large'}
                        onClick={() => onClick(count + 1)}
                        sx={{
                            border: '1px solid'
                        }}
                    >
                        +
                    </Button>
                </Box>
                <Box>
                    <Button
                        variant={'h3'}
                        size={'large'}
                        onClick={() => count == 0 ? 0 : onClick(count - 1)}
                        sx={{
                            border: '1px solid'
                        }}
                    >
                        -
                    </Button>
                </Box>

            </Button>
        </>
    )
}