import { Fragment } from 'react/jsx-runtime';
import FormInput from '../form/input';
import * as Yup from 'yup';

export const passportValidationSchema = Yup.object().shape({
    passportNumber: Yup.string().required('Passport Number is required'),
    passportIssueDate: Yup.string().required('Date of Issue is required'),
    passportIssueAuthority: Yup.string().required('Issuing Authority is required'),
    passportExpiryDate: Yup.string().required('Date of Expiration is required')
    // proofOfAccommodation: Yup.string().required('Proof of Accommodation is required')
});

export const passportInitialValues = {
    passportNumber: '',
    passportIssueDate: '',
    passportIssueAuthority: '',
    passportExpiryDate: ''
    // proofOfAccommodation: ''
};

export default function PassportDetails() {
    return (
        <Fragment>
            <FormInput
                label="Passport No"
                placeholder="Passport No"
                name="passportNumber"
                type="number"
                isRequired
            />

            <FormInput
                label="Date of Issue"
                placeholder="Date of Issue"
                name="passportIssueDate"
                type="date"
                isRequired
            />

            <FormInput
                label="Issuing Authority"
                placeholder="Issuing Authority"
                name="passportIssueAuthority"
                isRequired
            />

            <FormInput
                label="Date of Expiration"
                placeholder="Date of Expiration"
                name="passportExpiryDate"
                type="date"
                isRequired
            />
        </Fragment>
    );
}
