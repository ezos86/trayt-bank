import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import LockIcon from '@mui/icons-material/Lock';
import useAuth from '../hooks/useAuth.hook';
import { useNavigate } from 'react-router-dom';

const AuthPage: FC = () => {
    const { t } = useTranslation();
    const [loginForm, setLoginForm] = useState({
        username: 'TraytDemo',
        password: 'sample',
    });
    const navigate = useNavigate();
    const { login } = useAuth();

    // Add Formik & Yup for validation of data and form error handling

    const submitLogin = () => {
        try {
            login(loginForm.username);
            navigate('/welcome');
        } catch (e) {
            console.log(e);
            // Error handling would be done through formik
        }
    };

    const styles = {
        paper: {
            padding: 20,
            minWidth: 320,
            margin: '20px auto',
        },
        signInButton: { margin: '8px 0', borderRadius: '10px' },
    };

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            alignContent="center"
            sx={{ backgroundColor: 'primary.main', height: '100vh' }}
        >
            <Paper elevation={10} style={styles.paper}>
                <Box
                    p={4}
                    textAlign="center"
                    alignContent="center"
                    alignItems="center"
                >
                    <LockIcon fontSize="large" />
                </Box>
                <Box mb={4}>
                    <TextField
                        label="Username"
                        value={loginForm.username}
                        placeholder="Enter username"
                        variant="outlined"
                        fullWidth
                        required
                    />
                </Box>
                <Box mb={4}>
                    <TextField
                        label="Password"
                        value={loginForm.password}
                        placeholder="Enter password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        required
                    />
                </Box>
                <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    style={styles.signInButton}
                    fullWidth
                    onClick={() => submitLogin()}
                >
                    {t('signIn')}
                </Button>
                <Typography variant="h6" textAlign="center" mt={3}>
                    {t('authPage.msg')}
                </Typography>
            </Paper>
        </Box>
    );
};

export default AuthPage;
