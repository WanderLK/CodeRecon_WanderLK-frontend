import { Fragment } from 'react/jsx-runtime';
import FormInput from '../form/input';
import FormAutoComplete from '../form/autocomplete';
import { countries } from './data';
import * as Yup from 'yup';

export const personalValidationSchema = Yup.object().shape({
    fullName: Yup.string().required('First Name is required'),
    dob: Yup.string().required('Date of Birth is required'),
    placeOfBirth: Yup.string().required('Place of Birth is required'),
    countryOfBirth: Yup.string().required('Country of Birth is required'),
    nationality: Yup.string().required('Current Nationality is required'),
    sex: Yup.string().required('Sex is required'),
    maritalStatus: Yup.string().required('Marital Status is required')
});

export const personalInitialValues = {};

export default function PersonalDetails() {
    return (
        <Fragment>
            <FormInput label="Full name" placeholder="Full name" name="fullName" isRequired />

            <FormInput
                label="Date of Birth"
                placeholder="Date of Birth"
                name="dob"
                type="date"
                isRequired
            />

            <FormInput
                label="Place of Birth"
                placeholder="Place of Birth"
                name="placeOfBirth"
                isRequired
            />

            <FormAutoComplete
                label="Country of Birth"
                name="countryOfBirth"
                defaultItems={countries.map((country) => ({
                    value: country.label,
                    label: country.label
                }))}
            />

            <FormAutoComplete
                label="Current Nationality"
                name="nationality"
                defaultItems={countries.map((country) => ({
                    value: country.label,
                    label: country.label
                }))}
            />

            <FormAutoComplete
                label="Sex"
                name="sex"
                defaultItems={[
                    { value: 'male', label: 'Male' },
                    { value: 'female', label: 'Female' },
                    { value: 'other', label: 'Other' },
                    {
                        value: 'prefer_not_to_say',
                        label: 'Prefer not to say'
                    }
                ]}
            />

            <FormAutoComplete
                label="Marital Status"
                name="maritalStatus"
                defaultItems={[
                    { value: 'single', label: 'Single' },
                    { value: 'married', label: 'Married' },
                    { value: 'divorced', label: 'Divorced' },
                    { value: 'widowed', label: 'Widowed' }
                ]}
            />
        </Fragment>
    );
}
