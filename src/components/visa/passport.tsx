import { Fragment } from 'react/jsx-runtime';
import FormInput from '../form/input';
import * as Yup from 'yup';

export const passportValidationSchema = Yup.object().shape({
    passportNo: Yup.string().required('Passport Number is required'),
    dateOfIssue: Yup.string().required('Date of Issue is required'),
    issuingAuthority: Yup.string().required('Issuing Authority is required'),
    dateOfExpiration: Yup.string().required('Date of Expiration is required')
    // proofOfAccommodation: Yup.string().required('Proof of Accommodation is required')
});

export default function PassportDetails() {
    return (
        <Fragment>
            <FormInput
                label="Passport No"
                placeholder="Passport No"
                name="passportNo"
                type="number"
                isRequired
            />

            <FormInput
                label="Date of Issue"
                placeholder="Date of Issue"
                name="dateOfIssue"
                type="date"
                isRequired
            />

            <FormInput
                label="Issuing Authority"
                placeholder="Issuing Authority"
                name="issuingAuthority"
                isRequired
            />

            <FormInput
                label="Date of Expiration"
                placeholder="Date of Expiration"
                name="dateOfExpiration"
                type="date"
                isRequired
            />
        </Fragment>
    );
}
