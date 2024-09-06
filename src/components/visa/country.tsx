import { Fragment } from 'react/jsx-runtime';
import FormAutoComplete from '../form/autocomplete';
import FormInput from '../form/input';
import { countries } from './data';
import * as Yup from 'yup';

export const countryValidationSchema = Yup.object().shape({
    country: Yup.string().required('Country is required'),
    visaType: Yup.string().required('Visa Type is required'),
    reason: Yup.string().required('Reason is required'),
    dateOfRequested: Yup.string().required('Date of Requested is required'),
    duration: Yup.string().required('Duration is required')
});

export const countryInitialValues = {
    country: '',
    visaType: '',
    reason: '',
    dateOfRequested: '',
    duration: ''
};

export default function CountryDetails() {
    return (
        <Fragment>
            <FormAutoComplete
                label="Country"
                name="country"
                defaultItems={countries.map((country) => ({
                    value: country.label,
                    label: country.label
                }))}
                isRequired
            />

            <FormAutoComplete
                label="Visa Type"
                name="visaType"
                defaultItems={[
                    { value: 'Tourist', label: 'Tourist' },
                    { value: 'Business', label: 'Business' },
                    { value: 'Student', label: 'Student' },
                    { value: 'Work', label: 'Work' }
                ]}
                isRequired
            />

            <FormInput
                label="Reason"
                placeholder="Enter the reason for visit"
                name="reason"
                isRequired
                lightMode
            />

            <FormInput
                label="Date of Requested"
                placeholder="Date of Requested"
                name="dateOfRequested"
                type="text"
                isRequired
            />

            <FormInput
                label="Duration"
                placeholder="Duration"
                name="duration"
                type="text"
                isRequired
            />
        </Fragment>
    );
}
