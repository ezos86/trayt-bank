import {
    AppBar,
    Box,
    Button,
    Grid,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Toolbar,
    Typography,
} from '@mui/material';
import { FC, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const WelcomePage: FC = () => {
    const { t } = useTranslation('translation');
    const navigate = useNavigate();

    const navItems = [
        {
            title: t('header.signIn'),
            link: '/auth',
        },
        {
            title: t('header.espanol'),
            link: '/sample',
        },
        {
            title: t('header.locations'),
            link: '/sample',
        },
        {
            title: t('header.contactUs'),
            link: '/sample',
        },
        {
            title: t('header.help'),
            link: '/user',
        },
    ];

    const sideNavItems = [
        {
            title: t('leftNav.personal'),
            link: '/user',
        },
        {
            title: t('leftNav.smallBusiness'),
            link: '/sample',
        },
        {
            title: t('leftNav.wealthManagement'),
            link: '/sample',
        },
        {
            title: t('leftNav.businessInstitutions'),
            link: '/sample',
        },
        {
            title: t('leftNav.aboutUs'),
            link: '/sample',
        },
    ];

    return (
        <Box>
            <AppBar
                component="nav"
                position="fixed"
                sx={{
                    backgroundColor: 'primary.main',
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
            >
                <Toolbar sx={{ justifyContent: 'flex-end' }}>
                    <Box sx={{ display: 'block' }}>
                        {navItems.map((item, i) => (
                            <Button
                                key={i}
                                sx={{ color: '#fff', marginLeft: 2 }}
                                onClick={() => navigate(item.link)}
                            >
                                {item.title}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <Grid container spacing={0}>
                <Grid item xs={4} md={2}>
                    <Box
                        sx={{
                            backgroundColor: '#EEEEEE',
                            height: '100vh',
                            borderRight: '1px solid',
                        }}
                    >
                        <Toolbar />
                        <List>
                            {sideNavItems.map((item, i) => (
                                <ListItem key={i} disablePadding>
                                    <ListItemButton
                                        onClick={() => navigate(item.link)}
                                    >
                                        <ListItemText primary={item.title} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={8}
                    md={10}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: 20,
                    }}
                >
                    <Box maxWidth={700} textAlign="center">
                        <Typography variant="h3" mb={6} gutterBottom>
                            {t('welcomePage.title')}
                        </Typography>
                        <Typography variant="h4" gutterBottom>
                            {t('welcomePage.subtitle')}
                        </Typography>
                        <Button variant="contained">
                            {t('welcomePage.button')}
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default WelcomePage;
