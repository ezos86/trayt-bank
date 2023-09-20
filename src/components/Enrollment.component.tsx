import {
    Box,
    Button,
    FormControl,
    FormHelperText,
    InputBase,
    MenuItem,
    Select,
    Typography,
    styled,
} from '@mui/material';
import { useFormik } from 'formik';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { NumericFormat } from 'react-number-format';
import { object, string } from 'yup';

const TraytInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        color: 'black',
        marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: '#F3F6F9',
        border: '1px solid',
        borderColor: '#E0E3E7',
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

const EnrollmentComponent: FC<any> = ({ stepHandler, enrollmentHandler }) => {
    const { t } = useTranslation('translation');
    const initialValues = {
        amount: '',
        frequency: 2,
        routing: '',
        account: '',
    };

    const validationSchema = object().shape({
        account: string().min(8).max(17).required('Account Number is invalid'),
        routing: string().min(9).max(9).required(),
        amount: string().required('Amount is required'),
        frequency: string().required('A frequency must be selected'),
    });

    const {
        values,
        errors,
        touched,
        setFieldValue,
        setErrors,
        handleChange,
        handleSubmit,
    } = useFormik({
        initialValues,
        validationSchema,
        onSubmit: async (values: any) => {
            enrollmentHandler(values);
            stepHandler();
        },
    });

    return (
        <Box width={800}>
            <Box textAlign="center">
                <Typography mb={4} color="primary" variant="h4" gutterBottom>
                    {t('enrollmentComponent.subtitle')}
                </Typography>
            </Box>
            <Box sx={{ backgroundColor: '#EEEEEE' }} padding={5}>
                <form onSubmit={handleSubmit}>
                    <Box>
                        <FormControl fullWidth>
                            <Typography color="primary" variant="body1" mb={1}>
                                Account Number
                            </Typography>
                            <TraytInput
                                sx={
                                    errors.account
                                        ? { border: '1px solid red' }
                                        : null
                                }
                                name="account"
                                fullWidth
                                onChange={(event) => {
                                    if (event.target.value.match(/[^0-9]/)) {
                                        event.preventDefault();
                                    } else {
                                        setFieldValue(
                                            'account',
                                            event.target.value
                                        );
                                    }
                                }}
                                value={values.account}
                                error={Boolean(errors.account)}
                                placeholder="99182121212"
                            />
                            {errors.account ? (
                                <FormHelperText
                                    sx={{
                                        color: 'red',
                                        textTransform: 'capitalize',
                                    }}
                                >
                                    {errors.account.toString()}
                                </FormHelperText>
                            ) : null}
                        </FormControl>
                        <FormControl sx={{ marginTop: 3 }} fullWidth>
                            <Typography color="primary" variant="body1" mb={1}>
                                Routing Number
                            </Typography>
                            <TraytInput
                                sx={
                                    errors.routing
                                        ? { border: '1px solid red' }
                                        : null
                                }
                                name="routing"
                                fullWidth
                                onChange={(event) => {
                                    const inputValue = event.target.value;
                                    if (inputValue.match(/[^0-9]/)) {
                                        event.preventDefault();
                                    } else {
                                        if (
                                            inputValue.match(/^[0][0-9]/) ||
                                            inputValue.match(/^[1][0-2]/) ||
                                            inputValue.match(/^[2][1-9]/) ||
                                            inputValue.match(/^[3][0-2]/) ||
                                            inputValue.match(/^[6][1-9]/) ||
                                            inputValue.match(/^[7][0-2]/) ||
                                            inputValue.match(/^[8][0]/)
                                        ) {
                                            // Nothing
                                        } else {
                                            setErrors({
                                                ...errors,
                                                routing:
                                                    'Invalid routing number',
                                            });
                                        }
                                        setFieldValue(
                                            'routing',
                                            event.target.value
                                        );
                                    }
                                }}
                                value={values.routing}
                                error={Boolean(
                                    touched.routing && errors.routing
                                )}
                                placeholder="00233121212"
                            />
                            {errors.routing ? (
                                <FormHelperText
                                    sx={{
                                        color: 'red',
                                        textTransform: 'capitalize',
                                    }}
                                >
                                    {errors.routing.toString()}
                                </FormHelperText>
                            ) : null}
                        </FormControl>
                        <FormControl sx={{ marginTop: 3 }} fullWidth>
                            <Typography color="primary" variant="body1" mb={1}>
                                Amount
                            </Typography>
                            <NumericFormat
                                style={{
                                    borderRadius: '4px',
                                    backgroundColor: '#F3F6F9',
                                    border: errors.amount
                                        ? '1px solid red'
                                        : '1px solid #E0E3E7',
                                    fontSize: '16px',
                                    padding: '10px 12px',
                                }}
                                name="amount"
                                onChange={handleChange}
                                thousandSeparator
                                valueIsNumericString
                                placeholder="$1,000"
                                prefix="$"
                            />
                            {errors.amount ? (
                                <FormHelperText
                                    sx={{
                                        color: 'red',
                                        textTransform: 'capitalize',
                                    }}
                                >
                                    {errors.amount.toString()}
                                </FormHelperText>
                            ) : null}
                        </FormControl>
                        <FormControl sx={{ marginTop: 3 }} fullWidth>
                            <Typography color="primary" variant="body1" mb={1}>
                                Frequency
                            </Typography>
                            <Select
                                name="frequency"
                                inputProps={{
                                    sx: {
                                        bgcolor: '#F3F6F9',
                                        border: '1px solid #EEEEEE',
                                    },
                                }}
                                //defaultValue={values.frequency}
                                value={values.frequency}
                                label="Age"
                                variant="outlined"
                                onChange={handleChange}
                            >
                                <MenuItem value={2}>Twice Per Month</MenuItem>
                                <MenuItem value={1}>Once Per Month</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box textAlign="center" mt={5}>
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{ minWidth: 150, textTransform: 'capitalize' }}
                        >
                            {t('enrollmentComponent.button')}
                        </Button>
                    </Box>
                </form>
            </Box>
        </Box>
    );
};

export default EnrollmentComponent;
