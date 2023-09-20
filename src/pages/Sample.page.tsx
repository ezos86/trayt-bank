import React from 'react';
import { NewReleases } from '@mui/icons-material';
import {
    Box,
    Grid,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
} from '@mui/material';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const SamplePage: FC = () => {
    const { t } = useTranslation();

    return (
        <Box py={4}>
            <Box textAlign="center" maxWidth={700} margin="auto">
                <Typography variant="h1" gutterBottom>
                    {t('welcomePage.title')}
                </Typography>
            </Box>
        </Box>
    );
};

export default SamplePage;
