import TopNavbar from '@/layout/landing/top-navbar';
import { Button, Card, CardBody } from '@nextui-org/react';
import { SetStateAction, useState } from 'react';

import Form from '@/components/form';
import FormEditor from '@/components/form/editor';
import SubmitButton from '@/components/form/button';
import CountryDetails, { countryValidationSchema } from '@/components/visa/country';
import PersonalDetails, { personalValidationSchema } from '@/components/visa/personal';
import { FormikValues } from 'formik';
import * as Yup from 'yup';

import PhotoReviewSection from '@/components/visa/img-compatability-test';
import ImgUploadArea from '@/components/visa/img-upload-area';
import PassportDetails, { passportValidationSchema } from '@/components/visa/passport';
import PersonalImageDetails from '@/components/visa/personal-image';
import { duration } from 'moment';
import useErrorHandler from '@/components/hooks/error-handler';
import visaService from '@/redux/services/visa.service';
import { notifyActions } from '@/redux/reducers/notify.reducer';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '@/redux';

// const validationSchema = Yup.object().shape({
//     fullName: Yup.string().required('First Name is required'),
//     country: Yup.string().required('Country is required'),
//     visaType: Yup.string().required('Visa Type is required'),
//     reason: Yup.string().required('Reason is required'),
//     dob: Yup.string().required('Date of Birth is required'),
//     placeOfBirth: Yup.string().required('Place of Birth is required'),
//     countryOfBirth: Yup.string().required('Country of Birth is required')
// });

// {
//     "id": "string",
//     "userID": "string",
//     "dateOfApplied": "string",
//     "dateOfRequested": "string",
//     "dateOfIssued": "string",
//     "country": "string",
//     "visaType": "string",
//     "reason": "string",
//     "fullName": "string",
//     "dateOfBirth": "2024-09-06",
//     "placeOfBirth": "string",
//     "countryOfBirth": "string",
//     "currentNationality": "string",
//     "gender": "string",
//     "maritalStatus": "string",
//     "photo": "string",
//     "photoValidation": {
//       "aspectRatio": true,
//       "adjustedSize": true,
//       "resolution": true,
//       "recognize": true,
//       "orientation": true
//     },
//     "passportPhoto": "string",
//     "passportNumber": "string",
//     "passportIssueDate": "string",
//     "passportExpiryDate": "string",
//     "passportIssueAuthority": "string",
//     "accommodationProof": "string",
//     "returnPermit": "string",
//     "visaProcessStatus": {
//       "id": "string",
//       "receivedEmbassy": "string",
//       "reviewingApplication": "string",
//       "personalDetailsVerification": "string",
//       "imageVerification": "string",
//       "passportVerification": "string",
//       "accommodationProofVerification": "string",
//       "returnPermitVerification": "string",
//       "visaRequestApproval": "string",
//       "visaProcessing": "string",
//       "visaProcessCompleted":"string"
//    }
//   }

const initialValues = {
    dateOfRequested: '',
    duration: '',
    country: '',
    visaType: '',
    reason: '',
    fullName: '',
    dateOfBirth: '',
    placeOfBirth: '',
    countryOfBirth: '',
    currentNationality: '',
    gender: '',
    maritalStatus: '',
    photo: '',
    // personalPhoto: '',
    passportPhoto: '',
    passportNumber: '',
    passportIssueDate: '',
    passportIssueAuthority: '',
    passportExpiryDate: '',
    accommodationProof: '',
    validPermitToReturn: '',
    travelHistory: ''
};

// validation for travel history mixed
const travelHistoryValidationSchema = Yup.object().shape({
    travelHistory: Yup.mixed().required('Travel History is required')
});

export default function Request() {
    const dispatch = useDispatch();
    const { user } = useSelector((state: IRootState) => state.user);

    const [
        createVisa,
        { isLoading: isCreating, isError: isIsCreatingError, error: isCreatingError }
    ] = visaService.useCreateMutation();
    useErrorHandler(isIsCreatingError, isCreatingError);
    const [currentStep, setCurrentStep] = useState(0);
    const [currentImgSectionStep, setCurrentImgSectionStep] = useState(0);

    const steps = [
        {
            title: 'Step 1',
            description: 'Enter Country Details',
            isComplete: false
        },
        {
            title: 'Step 2',
            description: 'Enter Personal Details',
            isComplete: false
        },
        {
            title: 'Step 3',
            description: 'Images and Documents',
            isComplete: false
        },
        {
            title: 'Step 4',
            description: 'Review and Finish',
            isComplete: false
        }
    ];

    const combinedValidationSchema = Yup.object().shape({
        ...countryValidationSchema.fields,
        ...personalValidationSchema.fields,
        ...passportValidationSchema.fields
    });

    const getValidationSchema = (step: number) => {
        switch (step) {
            case 0:
                return countryValidationSchema;
            case 1:
                return personalValidationSchema;
            case 2:
                if (currentImgSectionStep === 2) return passportValidationSchema;
                if (currentImgSectionStep === 3) return travelHistoryValidationSchema;
                return Yup.object().shape({});
            case 3:
                return combinedValidationSchema;
            default:
                return Yup.object().shape({});
        }
    };

    const onSubmit = async (values: FormikValues) => {
        console.log(values);

        if (currentStep === steps.length - 1) {
            // TODO submit the form

            const result = await createVisa({
                ...values,
                userId: user.id
            });
            console.log('Form submitted');

            if (result?.data?.status === 200) {
                dispatch(
                    notifyActions.open({
                        type: 'success',
                        message: result.data.message
                    })
                );
            }
        } else {
            // if img & doc section and not last ImgSectionStep
            if (currentStep === 2 && currentImgSectionStep < 3) {
                nextImgSectionStep();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                return;
            }

            nextStep();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const imgSectionSteps = 4;
    const nextImgSectionStep = () => {
        if (currentImgSectionStep < imgSectionSteps - 1) {
            setCurrentImgSectionStep(currentImgSectionStep + 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };
    const prevImgSectionStep = () => {
        if (currentImgSectionStep > 0) {
            setCurrentImgSectionStep(currentImgSectionStep - 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const nextStep = () => {
        // TODO formik validation check if the current section is valid

        // if (validateForm(currentStep)) {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        }
        // } else alert('Please complete the form before proceeding.');
    };

    const goToStep = (stepIndex: SetStateAction<number>) => {
        const index = typeof stepIndex === 'function' ? stepIndex(currentStep) : stepIndex;
        setCurrentStep(index);
    };

    const arrowSVG = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="18"
            viewBox="0 0 17 18"
            fill="none">
            <path
                d="M14.8574 8.71456H1.28599M1.28599 8.71456L6.26218 14.0717M1.28599 8.71456L6.26218 3.35742"
                stroke="#182325"
                stroke-width="1.42857"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );

    return (
        <div className="flex flex-col gap-4">
            <TopNavbar />

            <div className="px-10 mb-8">
                <div className="flex justify-center gap-4 text-center">
                    {steps.map((step, index) => (
                        <div
                            className="w-1/4 cursor-pointer"
                            key={index}
                            onClick={() => goToStep(index)}>
                            <div
                                className={`w-full h-1 rounded-[30px] ${
                                    index <= currentStep ? 'bg-cyan-700' : 'bg-white'
                                }`}></div>
                            <div className="text-xs pt-1">{step.title}</div>
                            <div className="text-[9px] text-pretty">{step.description}</div>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col items-center justify-center mt-8">
                    <Card className="w-full bg-inherit text-white border-2 px-1 py-2 border-zinc-500">
                        <CardBody>
                            <div className="">
                                <h2 className="text-xl mb-4">{steps[currentStep].description}</h2>

                                <Form
                                    validationSchema={getValidationSchema(currentStep)}
                                    initialValues={initialValues}
                                    onSubmit={onSubmit}
                                    className="flex flex-col gap-4">
                                    <div
                                        className={`section-1 ${
                                            [0, 3].includes(currentStep) ? '' : 'hidden'
                                        } flex w-full flex-wrap md:flex-nowrap gap-4 mt-4 text-white`}>
                                        <CountryDetails />
                                    </div>

                                    <div
                                        className={`section-2 ${
                                            [1, 3].includes(currentStep) ? '' : 'hidden'
                                        } flex w-full flex-wrap md:flex-nowrap gap-4 mt-4 text-white`}>
                                        <PersonalDetails />
                                    </div>

                                    <div
                                        className={`section-3 ${
                                            [2, 3].includes(currentStep) ? '' : 'hidden'
                                        } flex w-full flex-wrap md:flex-nowrap gap-4 mt-4 text-white`}>
                                        <div
                                            className={`img-section-1 w-full ${
                                                currentImgSectionStep === 0 ? '' : 'hidden'
                                            }`}>
                                            <PersonalImageDetails />
                                        </div>

                                        <div
                                            className={`img-section-2 w-full ${
                                                currentImgSectionStep === 1 || currentStep === 3
                                                    ? ''
                                                    : 'hidden'
                                            }`}>
                                            <PhotoReviewSection
                                                currentStep={currentStep}
                                                photoSrc="/images/placeholder.png"
                                            />
                                        </div>

                                        <div
                                            className={`img-section-3 w-full ${
                                                currentImgSectionStep === 2 || currentStep === 3
                                                    ? ''
                                                    : 'hidden'
                                            }`}>
                                            <h2 className="text-lg font-medium pb-4">
                                                Passport Details
                                            </h2>

                                            <ImgUploadArea name="passportPhoto" />

                                            <div className="flex flex-col gap-3 pt-4">
                                                <PassportDetails />
                                            </div>
                                        </div>

                                        <div
                                            className={`img-section-3 w-full ${
                                                currentImgSectionStep === 3 || currentStep === 3
                                                    ? ''
                                                    : 'hidden'
                                            }`}>
                                            <h2 className="text-lg font-medium pb-4">
                                                Proof of Accommodation
                                            </h2>
                                            <ImgUploadArea name="accommodationProof" />

                                            <h2 className="text-lg font-medium pt-4 pb-4">
                                                Valid permit to return
                                            </h2>
                                            <ImgUploadArea name="returnPermit" />

                                            <h2 className="text-lg font-medium pt-4 pb-4">
                                                Travel History in past 12 Months
                                            </h2>

                                            <div className="flex flex-col gap-3">
                                                {/* <div className="min-h-44"> */}
                                                <div className="min-h-0">
                                                    <FormEditor name="travelHistory" />
                                                </div>
                                            </div>
                                        </div>

                                        <div
                                            className={`${
                                                currentStep === 3 ? 'hidden' : 'flex'
                                            } justify-center items-center gap-4 w-full`}>
                                            <div className="flex justify-center items-center gap-2">
                                                <Button
                                                    onClick={prevImgSectionStep}
                                                    className={`bg-white rounded-full w-full font-medium py-6 aspect-square min-w-0`}>
                                                    {arrowSVG}
                                                </Button>
                                                <Button
                                                    onClick={nextImgSectionStep}
                                                    className={`bg-white rounded-full w-full font-medium py-6 transform rotate-180 aspect-square min-w-0`}>
                                                    {arrowSVG}
                                                </Button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex justify-center w-full mt-4">
                                        <SubmitButton
                                            isLoading={isCreating}
                                            type="submit"
                                            className={`bg-white text-black rounded-[30px] font-medium py-4 px-2 w-full max-w-none`}>
                                            {currentStep === steps.length - 1
                                                ? 'Submit'
                                                : 'Next Step'}
                                        </SubmitButton>
                                    </div>
                                </Form>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
}
