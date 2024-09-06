import { Image } from '@nextui-org/react';
import Form from '@/components/form';
import SubmitButton from '@/components/form/button';
import FormEditor from '@/components/form/editor';
import PassportDetails, {
    passportValidationSchema,
    passportInitialValues
} from '@/components/visa/passport';
import { feedbackValidationSchema } from '@/components/visa/data';
import { FormikValues } from 'formik';
import { useMemo } from 'react';

export default function RequestPassport() {
    const initialValues = useMemo(() => {
        const template = {};

        return template;
    }, []);

    const onSubmit = async (values: FormikValues) => {};

    return (
        <div className="flex flex-col gap-5">
            <h1 className="font-semibold text-3xl">Passport Details</h1>

            <Form
                validationSchema={passportValidationSchema}
                initialValues={passportInitialValues}
                onSubmit={onSubmit}
                className="flex flex-col gap-4 w-full">

                <Image
                    alt="Passport Image"
                    className="object-contain px-2 max-w-96 mb-2"
                    shadow="none"
                    src="/images/placeholder.png"
                    width="100%"
                />

                <PassportDetails />

                <SubmitButton className="self-end" theme="dashboard">
                    Approve
                </SubmitButton>
            </Form>

            <Form
                validationSchema={feedbackValidationSchema}
                initialValues={{ feedback: '' }}
                onSubmit={onSubmit}
                className="flex flex-col gap-4 w-full">
                <div className="min-h-44">
                    <FormEditor name="feedback" />
                </div>

                <SubmitButton className="self-end py-5" theme="dashboard">
                    Send to Correct
                </SubmitButton>
            </Form>
        </div>
    );
}
