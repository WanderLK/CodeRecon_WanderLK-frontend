import { Image } from '@nextui-org/react';
import Form from '@/components/form';
import SubmitButton from '@/components/form/button';
import FormEditor from '@/components/form/editor';
import { feedbackValidationSchema } from '@/components/visa/data';
import { FormikValues } from 'formik';
import { useMemo } from 'react';

const proofValidationSchema = {};
const proofInitialValues = {};

export default function RequestProof() {
    const initialValues = useMemo(() => {
        const template = {};

        return template;
    }, []);

    const onSubmit = async (values: FormikValues) => {};

    return (
        <div className="flex flex-col gap-5">
            <h1 className="font-semibold text-3xl">Proof of Accommodation</h1>

            <Form
                validationSchema={proofValidationSchema}
                initialValues={proofInitialValues}
                onSubmit={onSubmit}
                className="flex flex-col gap-4 w-full">
                <Image
                    alt="Passport Image"
                    className="object-contain px-2 max-w-96 mb-2 mx-auto"
                    shadow="none"
                    src="/images/placeholder.png"
                    width="100%"
                />

                <SubmitButton className="mx-auto" theme="dashboard">
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
