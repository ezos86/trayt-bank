import React from 'react';
import { NewReleases } from '@mui/icons-material';
import {
    Box,
    Button,
    Grid,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
} from '@mui/material';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const ErrorPage: FC = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <Box py={8}>
            <Box textAlign="center" maxWidth={700} margin="auto">
                <Typography variant="h4" gutterBottom>
                    {t('errorPage')}
                </Typography>
                <Button onClick={() => navigate('/')}>Let's Go Home...</Button>
            </Box>
        </Box>
    );
};

export default ErrorPage;
