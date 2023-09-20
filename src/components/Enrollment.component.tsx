import {
    Box,
    Button,
    FormControl,
    FormHelperText,
    Input,
    InputBase,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
    styled,
    useTheme,
} from '@mui/material';
import { FC, forwardRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NumericFormat, NumericFormatProps } from 'react-number-format';

interface CustomProps {
    onChange: (event: { target: { name: string; value: string } }) => void;
    name: string;
}

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        color: 'black',
        marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.mode === 'light' ? '#F3F6F9' : '#1A2027',
        border: '1px solid',
        borderColor: theme.palette.mode === 'light' ? '#E0E3E7' : '#2D3843',
        fontSize: 16,
        padding: '10px 12px',
        transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
        ]),
        '&:focus': {
            borderColor: theme.palette.primary.main,
            borderRadius: '5px',
        },
    },
}));

const NumericFormatCustom = forwardRef<NumericFormatProps, CustomProps>(
    function NumericFormatCustom(props, ref) {
        const { onChange, ...other } = props;

        return (
            <NumericFormat
                {...other}
                getInputRef={ref}
                onValueChange={(values) => {
                    onChange({
                        target: {
                            name: props.name,
                            value: values.value,
                        },
                    });
                }}
                thousandSeparator
                valueIsNumericString
                prefix="$"
            />
        );
    }
);

const EnrollmentComponent: FC<any> = ({ stepHandler }) => {
    const { t } = useTranslation('translation');
    const theme = useTheme();
    const [values, setValues] = useState({
        numberformat: '1320',
        frequency: 'twice',
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <Box minWidth={700}>
            <Box textAlign="center">
                <Typography mb={4} color="primary" variant="h4" gutterBottom>
                    {t('enrollmentComponent.subtitle')}
                </Typography>
            </Box>
            <Box sx={{ backgroundColor: '#EEEEEE' }} padding={5}>
                <Box>
                    <FormControl fullWidth>
                        <Typography color="primary" variant="body1" mb={1}>
                            Account Number
                        </Typography>
                        <BootstrapInput
                            defaultValue="react-bootstrap"
                            id="bootstrap-input"
                        />
                    </FormControl>
                    <FormControl sx={{ marginTop: 3 }} fullWidth>
                        <Typography color="primary" variant="body1" mb={1}>
                            Routing Number
                        </Typography>
                        <BootstrapInput
                            defaultValue="react-bootstrap"
                            id="bootstrap-input"
                        />
                    </FormControl>
                    <FormControl sx={{ marginTop: 3 }} fullWidth>
                        <Typography color="primary" variant="body1" mb={1}>
                            Amount
                        </Typography>
                        <TextField
                            sx={{
                                'label + &': {
                                    color: 'black',
                                    marginTop: theme.spacing(3),
                                    borderWidth: '0.5px',
                                },
                                '&.Mui-focused .MuiOutlinedInput-notchedOutline':
                                    {
                                        borderColor: 'red',
                                    },
                                '& .MuiInputBase-root': {
                                    '& fieldset': {
                                        borderColor: '#EEEEEE',
                                    },
                                    '&.Mui-hover fieldset': {
                                        borderColor: '#EEEEEE',
                                        borderWidth: '1px',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'primary',
                                        borderWidth: '1px',
                                    },
                                },
                                '&$hover $notchedOutline': {
                                    borderColor: '#f00',
                                },
                                '& .MuiInputBase-input': {
                                    borderRadius: '5px',
                                    position: 'relative',
                                    backgroundColor:
                                        theme.palette.mode === 'light'
                                            ? '#F3F6F9'
                                            : '#1A2027',
                                    borderWidth: '0.5px',
                                    borderColor: ' transparent',
                                    fontSize: 16,
                                    padding: '10px 12px',
                                    '&:focus': {
                                        borderColor: theme.palette.primary.main,
                                        borderWidth: '.5px',
                                    },
                                    '&:before': {
                                        border: 'none',
                                    },
                                    '&:after': {
                                        border: 'none',
                                    },
                                    '&$focused $notchedOutline': {
                                        borderWidth: '1px',
                                        borderColor: 'red',
                                    },
                                },
                            }}
                            value={values.numberformat}
                            onChange={handleChange}
                            name="numberformat"
                            id="formatted-numberformat-input"
                            InputProps={{
                                inputComponent: NumericFormatCustom as any,
                            }}
                        />
                    </FormControl>
                    <FormControl sx={{ marginTop: 3 }} fullWidth>
                        <Typography color="primary" variant="body1" mb={1}>
                            Frequency
                        </Typography>
                        <Select
                            sx={{
                                '& .MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root':
                                    {
                                        backgroundColor: '##F3F6F9',
                                    },
                            }}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={values.frequency}
                            label="Age"
                            //onChange={handleChange}
                        >
                            <MenuItem value="twice">Twice Per Month</MenuItem>
                            <MenuItem value="once">Once Per Month</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box textAlign="center" mt={5}>
                    <Button
                        variant="contained"
                        sx={{ minWidth: 150, textTransform: 'capitalize' }}
                        onClick={stepHandler}
                    >
                        {t('enrollmentComponent.button')}
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default EnrollmentComponent;
