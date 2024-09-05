import { Fragment } from 'react/jsx-runtime';
import FormAutoComplete from '../form/autocomplete';
import FormInput from '../form/input';
import { countries } from './schemas';

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
        </Fragment>
    );
}
