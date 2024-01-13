import { Box, Typography } from '@mui/material';
import React from 'react';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import HeroImage from '../public/images/logos/other/TOMADA DE POSSE.png';
import PlaceHolder from '../public/images/logos/other/placeholder.png';
import elements from '../public/images/logos/other/Elements.png';
import CustomComponent from '../components/MemberComponents';



const OurTeam = () => {
    const theme = useTheme();

    return (
        <ThemeProvider theme={theme}>
            <Box position="relative">
                <img
                    src={elements}
                    style={{ width: '100%', height: 'auto' }}
                />
                <Typography
                    align="center"
                    gutterBottom
                    sx={{
                        fontSize:"85px",
                        fontWeight: 'Regular',
                        position: 'absolute',
                        top: '15%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 1,
                        color: theme.palette.secondary.main,
                        fontFamily: theme.typography.fontFamily,
                        width: '100%',
                        textAlign: 'center',
                    }}>
                    We are made of people
                </Typography>
            </Box>

            <Box position="relative">
                <img
                    src={HeroImage}
                    alt="Innova Tomada De Posse"
                    style={{ width: '100%', height: 'auto' }}
                />
            </Box>
            
            <Box marginTop={4} marginBottom={4} textAlign="center">
                <Typography
                        variant="h3"
                        align="center"
                        sx={{
                            fontWeight: 'Medium',
                            color: theme.palette.secondary.main,
                            fontFamily: theme.typography.fontFamily,
                            marginBottom: 1, // Adding margin bottom between texts
                        }}>
                        Our Board
                    </Typography>
                    <Typography
                        variant="h4"
                        align="center"
                        sx={{
                            fontWeight: 'Regular',
                            color: theme.palette.secondary.main,
                            fontFamily: theme.typography.fontFamily,
                        }}>
                        our problem-solvers
                    </Typography>                
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', gap: '30px', p: 5}} >
                <CustomComponent title='President' name='Inês Costa' image={PlaceHolder} />
                <CustomComponent title='External Affairs Vice-President' name='Leonor Almeida' image={PlaceHolder} />
                <CustomComponent title='Internal Affairs Vice-President' name='Carolina Maurício' image={PlaceHolder} />
                <CustomComponent title='Financial Manager' name='Nuno Alves' image={PlaceHolder} />
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', gap: '30px', p: 5 }} >
                <CustomComponent title='Sales Director' name='Inês Mendes' image={PlaceHolder} />
                <CustomComponent title='Marketing Director' name='Matilde Azadinho' image={PlaceHolder} />
                <CustomComponent title='Projects Director' name='Vicente Rodriques dos Santos' image={PlaceHolder} />
                <CustomComponent title='Quality Director' name='Filipa Santos' image={PlaceHolder} />
                <CustomComponent title='Human Resources Director' name='Rodrigo Marques' image={PlaceHolder} />
            </Box>

        </ThemeProvider>
    );
};

export default OurTeam;