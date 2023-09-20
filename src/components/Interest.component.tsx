import { Box, Button, Paper, Typography, useTheme } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DateCalendar, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

const InterestComponent: FC<any> = ({ stepHandler, enrollmentData }) => {
    const { t } = useTranslation('translation');
    const [result, setResult] = useState<any>();
    const [date, setDate] = useState<any>(dayjs());

    const monthDiff = (d1: Date, d2: Date) => {
        console.log(d1, d2);
        let months;
        months = (d2.getFullYear() - d1.getFullYear()) * 12;
        months -= d1.getMonth();
        months += d2.getMonth();
        return months <= 0 ? 0 : months;
    };

    const compoundInterest = (p: number, t: number, r: number, n: number) => {
        const amount = p * Math.pow(1 + r / n, n * t);
        const interest = amount - p;
        return interest;
    };

    const calculate = () => {
        let rate = 0.05;
        const monthDiffValue = monthDiff(new Date(), new Date(date));
        if (monthDiffValue > 36) {
            rate = 0.02;
        }
        const results = compoundInterest(
            Number(enrollmentData.amount.replace(/[^0-9.-]+/g, '')),
            monthDiffValue,
            rate,
            enrollmentData.frequency
        );
        setResult(results);
    };

    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    return (
        <Box minWidth={700}>
            <Box textAlign="center">
                <Typography mb={4} color="primary" variant="h4" gutterBottom>
                    {t('interestComponent.subtitle')}
                </Typography>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Paper>
                        <DateCalendar
                            defaultValue={dayjs('2023-10-17')}
                            onChange={(date) => setDate(date)}
                        />
                    </Paper>
                </LocalizationProvider>
                <Box textAlign="center" mt={5}>
                    <Button
                        variant="contained"
                        sx={{ minWidth: 150, textTransform: 'capitalize' }}
                        onClick={calculate}
                    >
                        {t('interestComponent.button')}
                    </Button>
                </Box>
                <Typography mt={4} variant="h2" gutterBottom>
                    {result ? USDollar.format(result) : '-'}
                </Typography>
            </Box>
        </Box>
    );
};

export default InterestComponent;
