import * as Yup from 'yup';

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
