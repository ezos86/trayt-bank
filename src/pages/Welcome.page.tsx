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
} from '@mui/material';
import { FC, useState } from 'react';
import { setI18n, useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import StartComponent from '../components/Start.component';
import EnrollmentComponent from '../components/Enrollment.component';
import InterestComponent from '../components/Interest.component';

const WelcomePage: FC = () => {
    const { t, i18n } = useTranslation('translation');
    const [currentLang, setCurrentLang] = useState<string>('en');
    const navigate = useNavigate();
    const [step, setStep] = useState<string>('start');
    const [enrollment, setEnrollment] = useState(null);

    const handleTranslate = () => {
        if (currentLang == 'en') {
            setCurrentLang('es');
            i18n.changeLanguage('es');
        } else {
            setCurrentLang('en');
            i18n.changeLanguage('en');
        }
    };

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
                                onClick={() =>
                                    i == 1
                                        ? handleTranslate()
                                        : navigate(item.link)
                                }
                            >
                                {item.title}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <Grid container spacing={0}>
                {/* Side Nav */}
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
                    {step == 'start' ? (
                        <StartComponent
                            stepHandler={() => setStep('enrollment')}
                        />
                    ) : step == 'enrollment' ? (
                        <EnrollmentComponent
                            enrollmentHandler={(values: any) =>
                                setEnrollment(values)
                            }
                            stepHandler={() => setStep('interest')}
                        />
                    ) : (
                        <InterestComponent
                            stepHandler={() => setStep('start')}
                            enrollmentData={enrollment}
                        />
                    )}
                </Grid>
            </Grid>
        </Box>
    );
};

export default WelcomePage;
