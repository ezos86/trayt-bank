import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            header: {
                signIn: 'Sign In',
                espanol: 'En Español',
                locations: 'Locations',
                contactUs: 'Contact Us',
                help: 'Help',
            },
            leftNav: {
                personal: 'Personal',
                smallBusiness: 'Small Business',
                wealthManagement: 'Wealth Management',
                businessInstitutions: 'Business & Institutions',
                aboutUs: 'About Us',
            },
            authPage: {
                signIn: 'Sign In',
                msg: 'Just click sign in.',
            },
            welcomePage: {
                title: 'Welcome to Bank of Trayt',
                subtitle:
                    'Initiate a new Direct Deposit to earn 5% for 36 months!',
                button: 'Learn More',
            },
            enrollmentComponent: {
                subtitle: 'New Direct Deposit Enrollment',
                button: 'Submit',
            },
            interestComponent: {
                subtitle: 'Compound Interest Calculator',
                button: 'Calculate',
            },
            samplePage: {
                title: 'Cool stuff can be created here',
                button: 'Go Home',
            },
            userPage: {
                title: 'Private stuff, auth is required',
                button: 'Go Home',
            },
            errorPage: {
                title: 'Ouch.. You got lost somehow...',
                button: 'Go Home',
            },
        },
    },
    es: {
        translation: {
            header: {
                signIn: 'Iniciar sesión',
                espanol: 'In English',
                locations: 'Ubicaciones',
                contactUs: 'Contacto',
                help: 'Ayuda',
            },
            leftNav: {
                personal: 'Personal',
                smallBusiness: 'Pequeños negocios',
                wealthManagement: 'Gestión de patrimonios',
                businessInstitutions: 'Empresas e Instituciones',
                aboutUs: 'Sobre Nosotros',
            },
            authPage: {
                signIn: 'Iniciar sesión',
                msg: 'Simplemente haz clic en iniciar sesión.',
            },
            welcomePage: {
                title: 'Welcome to Bank of Trayt',
                subtitle:
                    'Initiate a new Direct Deposit to earn 5% for 36 months!',
                button: 'Learn More',
            },
            samplePage: {
                title: 'Cool stuff can be created here',
                button: 'Go Home',
            },
            userPage: {
                title: 'Private stuff, auth is required',
                button: 'Go Home',
            },
            errorPage: {
                title: 'Ouch.. You got lost somehow...',
                button: 'Go Home',
            },
        },
    },
};

i18next.use(initReactI18next).init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
});
