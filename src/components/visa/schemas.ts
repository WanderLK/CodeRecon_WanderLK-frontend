import * as Yup from 'yup';

export const countryValidationSchema = Yup.object().shape({
    country: Yup.string().required('Country is required'),
    visaType: Yup.string().required('Visa Type is required'),
    reason: Yup.string().required('Reason is required')
});

export const personalValidationSchema = Yup.object().shape({
    fullName: Yup.string().required('First Name is required'),
    dob: Yup.string().required('Date of Birth is required'),
    placeOfBirth: Yup.string().required('Place of Birth is required'),
    countryOfBirth: Yup.string().required('Country of Birth is required'),
    nationality: Yup.string().required('Current Nationality is required'),
    sex: Yup.string().required('Sex is required'),
    maritalStatus: Yup.string().required('Marital Status is required')
});

export const feedbackValidationSchema = Yup.object().shape({
    feedback: Yup.string().required('Feedback is required')
});

export const countries = [
    { key: '1', label: 'United Kingdom' },
    { key: '2', label: 'United States' },
    { key: '3', label: 'Canada' },
    { key: '4', label: 'Australia' },
    { key: '5', label: 'Sri Lanka' }
];

export const countryInitialValues = {
    country: '',
    visaType: '',
    reason: ''
};
