import { Box, Button, Typography } from '@mui/material';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const StartComponent: FC<any> = ({ stepHandler }) => {
    const { t } = useTranslation('translation');

    return (
        <Box maxWidth={700} textAlign="center">
            <Typography color="primary" variant="h3" mb={6} gutterBottom>
                {t('welcomePage.title')}
            </Typography>
            <Typography mb={4} color="primary" variant="h4" gutterBottom>
                {t('welcomePage.subtitle')}
            </Typography>
            <Button
                variant="contained"
                sx={{ textTransform: 'capitalize' }}
                onClick={stepHandler}
            >
                {t('welcomePage.button')}
            </Button>
        </Box>
    );
};

export default StartComponent;
