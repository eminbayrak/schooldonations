import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CountUp from 'react-countup';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

// TODO: Make it dynamic with global state
let dataCounts = {
    schools: 219,
    donations: 299,
    donors: 249,
    teachers: 199,
}

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    height: 60,
    lineHeight: '60px',
}));

const card = (
    <>
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                    width: 240,
                    height: 120,
                },
            }}
        >
            <Item>
                <React.Fragment>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Schools
                        </Typography>
                        <Typography variant="h5" component="div">
                            <CountUp end={dataCounts.schools} />
                        </Typography>
                        <Typography variant="body2">
                            got donations
                        </Typography>
                    </CardContent>
                </React.Fragment>
            </Item>
            <Item>
                <React.Fragment>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Donations
                        </Typography>
                        <Typography variant="h5" component="div">
                            <CountUp end={dataCounts.donations} />
                        </Typography>
                        <Typography variant="body2">
                            donations
                        </Typography>
                    </CardContent>
                </React.Fragment>
            </Item>
            <Item>
                <React.Fragment>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Donors
                        </Typography>
                        <Typography variant="h5" component="div">
                            <CountUp end={dataCounts.donors} />
                        </Typography>
                        <Typography variant="body2">
                            donors
                        </Typography>
                    </CardContent>
                </React.Fragment>
            </Item>
            <Item>
                <React.Fragment>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Teachers
                        </Typography>
                        <Typography variant="h5" component="div">
                            <CountUp end={dataCounts.teachers} />
                        </Typography>
                        <Typography variant="body2">
                            teachers
                        </Typography>
                    </CardContent>
                </React.Fragment>
            </Item>
        </Box>
    </>
);

export default function Cards() {
    return (
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">{card}</Card>
        </Box>
    );
}
