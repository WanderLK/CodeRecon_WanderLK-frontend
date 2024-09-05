import { Fragment } from 'react/jsx-runtime';
import FormInput from '../form/input';

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
