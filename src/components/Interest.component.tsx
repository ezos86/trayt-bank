import { Box, Button, Paper, Typography, useTheme } from '@mui/material';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DateCalendar, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const InterestComponent: FC<any> = ({ stepHandler }) => {
    const { t } = useTranslation('translation');

    return (
        <Box minWidth={700}>
            <Box textAlign="center">
                <Typography mb={4} color="primary" variant="h4" gutterBottom>
                    {t('interestComponent.subtitle')}
                </Typography>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Paper>
                        <DateCalendar />
                    </Paper>
                </LocalizationProvider>
                <Box textAlign="center" mt={5}>
                    <Button
                        variant="contained"
                        sx={{ minWidth: 150, textTransform: 'capitalize' }}
                        onClick={stepHandler}
                    >
                        {t('interestComponent.button')}
                    </Button>
                </Box>
                <Typography mt={4} variant="h2" gutterBottom>
                    -
                </Typography>
            </Box>
        </Box>
    );
};

export default InterestComponent;
