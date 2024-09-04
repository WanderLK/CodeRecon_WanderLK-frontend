import { SetStateAction, useState } from 'react';
import { Card, CardBody, Button, Image } from '@nextui-org/react';
import TopNavbar from '@/layout/top-navbar';

import Form from '@/components/form';
import SubmitButton from '@/components/form/button';
import FormInput from '@/components/form/input';
import FormDropdown from '@/components/form/dropdown';
import { CheckIcon } from '@/components/icons/check-icon';
import { FieldArray, FormikValues } from 'formik';
import * as Yup from 'yup';

export default function App() {
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

    // const validationSchema = Yup.object().shape({
    //     fullName: Yup.string().required('First Name is required'),
    //     country: Yup.string().required('Country is required'),
    //     visaType: Yup.string().required('Visa Type is required'),
    //     reason: Yup.string().required('Reason is required'),
    //     dob: Yup.string().required('Date of Birth is required'),
    //     placeOfBirth: Yup.string().required('Place of Birth is required'),
    //     countryOfBirth: Yup.string().required('Country of Birth is required')
    // });

    const section1ValidationSchema = Yup.object().shape({
        fullName: Yup.string().required('First Name is required'),
        country: Yup.string().required('Country is required'),
        visaType: Yup.string().required('Visa Type is required'),
        reason: Yup.string().required('Reason is required')
    });

    const section2ValidationSchema = Yup.object().shape({
        fullName: Yup.string().required('First Name is required'),
        dob: Yup.string().required('Date of Birth is required'),
        placeOfBirth: Yup.string().required('Place of Birth is required'),
        countryOfBirth: Yup.string().required('Country of Birth is required'),
        nationality: Yup.string().required('Current Nationality is required'),
        sex: Yup.string().required('Sex is required'),
        maritalStatus: Yup.string().required('Marital Status is required')
    });

    const getValidationSchema = (step: number) => {
        switch (step) {
            case 0:
                return section1ValidationSchema;
            case 1:
                return section2ValidationSchema;
            default:
                return Yup.object().shape({});
        }
    };

    const initialValues = {
        fullName: '',
        country: '',
        visaType: '',
        reason: '',
        dob: '',
        placeOfBirth: '',
        countryOfBirth: ''
    };

    const onSubmit = async (values: FormikValues) => {
        console.log(values);
        if (currentStep === steps.length - 1) {
            // TODO submit the form
            console.log('Form submitted');
        } else {
            nextStep();
        }
    };

    const [currentStep, setCurrentStep] = useState(0);
    const [currentImgSectionStep, setCurrentImgSectionStep] = useState(0);

    const imgSectionSteps = 3;
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

    const countries = [
        { key: '1', label: 'United Kingdom' },
        { key: '2', label: 'United States' },
        { key: '3', label: 'Canada' },
        { key: '4', label: 'Australia' },
        { key: '5', label: 'Sri Lanka' }
    ];

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
                                            currentStep === 0 ? '' : 'hidden'
                                        } flex w-full flex-wrap md:flex-nowrap gap-4 mt-4 text-white`}>
                                        <FormInput
                                            label="Full name"
                                            placeholder="Full name"
                                            name="fullName"
                                            classNames={{ mainWrapper: 'w-full' }}
                                            isRequired
                                        />

                                        <FormDropdown
                                            label="Country"
                                            name="country"
                                            classNames={{ mainWrapper: 'w-full' }}
                                            options={countries.map((country) => ({
                                                value: country.label,
                                                label: country.label
                                            }))}
                                        />

                                        <FormDropdown
                                            label="Visa Type"
                                            name="visaType"
                                            classNames={{ mainWrapper: 'w-full' }}
                                            options={[
                                                { value: 'Tourist', label: 'Tourist' },
                                                { value: 'Business', label: 'Business' },
                                                { value: 'Student', label: 'Student' },
                                                { value: 'Work', label: 'Work' }
                                            ]}
                                        />

                                        <FormInput
                                            label="Reason"
                                            placeholder="Enter the reason for visit"
                                            name="reason"
                                            classNames={{ mainWrapper: 'w-full' }}
                                            isRequired
                                        />
                                    </div>

                                    {/* <div className="section-2 flex w-full flex-wrap md:flex-nowrap gap-4 mt-4 text-white"> */}
                                    <div
                                        className={`section-2 ${
                                            currentStep === 1 ? '' : 'hidden'
                                        } flex w-full flex-wrap md:flex-nowrap gap-4 mt-4 text-white`}>
                                        <FormInput
                                            label="Full name"
                                            placeholder="Full name"
                                            name="fullName"
                                            classNames={{ mainWrapper: 'w-full' }}
                                            isRequired
                                        />

                                        <FormInput
                                            label="Date of Birth"
                                            placeholder="Date of Birth"
                                            name="dob"
                                            type="date"
                                            classNames={{ mainWrapper: 'w-full' }}
                                            isRequired
                                        />

                                        <FormInput
                                            label="Place of Birth"
                                            placeholder="Place of Birth"
                                            name="placeOfBirth"
                                            classNames={{ mainWrapper: 'w-full' }}
                                            isRequired
                                        />

                                        <FormDropdown
                                            label="Country of Birth"
                                            name="countryOfBirth"
                                            classNames={{ mainWrapper: 'w-full' }}
                                            options={countries.map((country) => ({
                                                value: country.label,
                                                label: country.label
                                            }))}
                                        />

                                        <FormDropdown
                                            label="Current Nationality"
                                            name="nationality"
                                            classNames={{ mainWrapper: 'w-full' }}
                                            options={countries.map((country) => ({
                                                value: country.label,
                                                label: country.label
                                            }))}
                                        />

                                        <FormDropdown
                                            label="Sex"
                                            name="sex"
                                            classNames={{ mainWrapper: 'w-full' }}
                                            options={[
                                                { value: 'male', label: 'Male' },
                                                { value: 'female', label: 'Female' },
                                                { value: 'other', label: 'Other' },
                                                {
                                                    value: 'prefer_not_to_say',
                                                    label: 'Prefer not to say'
                                                }
                                            ]}
                                        />

                                        <FormDropdown
                                            label="Marital Status"
                                            name="maritalStatus"
                                            classNames={{ mainWrapper: 'w-full' }}
                                            options={[
                                                { value: 'single', label: 'Single' },
                                                { value: 'married', label: 'Married' },
                                                { value: 'divorced', label: 'Divorced' },
                                                { value: 'widowed', label: 'Widowed' }
                                            ]}
                                        />
                                    </div>

                                    <div
                                        className={`section-3 ${
                                            currentStep === 2 ? '' : 'hidden'
                                        } flex w-full flex-wrap md:flex-nowrap gap-4 mt-4 text-white`}>
                                        <div
                                            className={`img-section-1 w-full ${
                                                currentImgSectionStep === 0 ? '' : 'hidden'
                                            }`}>
                                            <div className="flex flex-col gap-4 w-full pb-4">
                                                <label
                                                    htmlFor="image"
                                                    className="text-sm border-dashed border-2 border-white rounded-[30px] py-8 px-2 w-full flex flex-col justify-center items-center">
                                                    <Image
                                                        alt="Upload Image Icon"
                                                        className="object-cover px-2 w-5/6 mx-auto mb-1"
                                                        shadow="none"
                                                        src="/images/upload-img-ico.png"
                                                        width="100%"
                                                    />
                                                    <div className="text-xs">
                                                        Drop your image here, or{' '}
                                                        <span className="text-cyan-700">
                                                            browse
                                                        </span>
                                                    </div>
                                                    <div className="text-[9px] opacity-70 mt-1">
                                                        Supports: PNG, JPG, JPEG{' '}
                                                    </div>
                                                </label>
                                                <input type="file" id="image" className="hidden" />
                                            </div>
                                            <Button
                                                className={`bg-white rounded-[30px] w-full font-medium py-4 px-2`}>
                                                Upload Image
                                            </Button>

                                            <h2 className="text-lg font-medium pt-6 pb-4">
                                                How to take good photos
                                            </h2>

                                            <div className="w-full pb-2">
                                                <Image
                                                    alt="Img Upload Guide"
                                                    className="object-contain w-full mx-auto mb-1 aspect-square"
                                                    shadow="none"
                                                    src="/images/upload-guide.png"
                                                    width="100%"
                                                />
                                            </div>

                                            <h3 className="text-lg font-medium pb-2">Quality</h3>
                                            <p>
                                                Our team of experts will review your photo and make
                                                sure it meets all the necessary criteria for your
                                                passport, so you can have peace of mind knowing your
                                                photo will be accepted.
                                            </p>
                                        </div>

                                        <div
                                            className={`img-section-2 w-full ${
                                                currentImgSectionStep === 1 ? '' : 'hidden'
                                            }`}>
                                            <div className="w-full pb-2">
                                                <Image
                                                    alt="Img Upload Guide"
                                                    className="object-contain w-full mx-auto mb-1"
                                                    shadow="none"
                                                    src="/images/placeholder.png"
                                                    width="100%"
                                                />
                                            </div>

                                            <h2 className="text-xl font-medium pb-4">
                                                Compatibility test passsed
                                            </h2>

                                            <div className="flex flex-col gap-2">
                                                <div className="flex gap-2">
                                                    <CheckIcon />
                                                    <p>Corrected the aspect ratio</p>
                                                </div>
                                                <div className="flex gap-2">
                                                    <CheckIcon />
                                                    <p>Adjusted size of the face in the photo</p>
                                                </div>
                                                <div className="flex gap-2">
                                                    <CheckIcon />
                                                    <p>Detected correct photo resolution</p>
                                                </div>
                                            </div>

                                            <h2 className="text-lg font-medium pt-6 pb-4">
                                                How to take good photos
                                            </h2>

                                            <div className="w-full pb-2">
                                                <Image
                                                    alt="Img Upload Guide"
                                                    className="object-contain w-full mx-auto mb-1 aspect-square"
                                                    shadow="none"
                                                    src="/images/upload-guide.png"
                                                    width="100%"
                                                />
                                            </div>

                                            <h3 className="text-lg font-medium pb-2">Quality</h3>
                                            <p>
                                                Our team of experts will review your photo and make
                                                sure it meets all the necessary criteria for your
                                                passport, so you can have peace of mind knowing your
                                                photo will be accepted.
                                            </p>
                                        </div>

                                        <div
                                            className={`img-section-3 w-full ${
                                                currentImgSectionStep === 2 ? '' : 'hidden'
                                            }`}>
                                            <h2 className="text-lg font-medium pb-4">
                                                Passport Details
                                            </h2>

                                            <div className="flex flex-col gap-4 w-full pb-4">
                                                <label
                                                    htmlFor="image"
                                                    className="text-sm border-dashed border-2 border-white rounded-[30px] py-8 px-2 w-full flex flex-col justify-center items-center">
                                                    <Image
                                                        alt="Upload Image Icon"
                                                        className="object-cover px-2 w-5/6 mx-auto mb-1"
                                                        shadow="none"
                                                        src="/images/upload-img-ico.png"
                                                        width="100%"
                                                    />
                                                    <div className="text-xs px-4 text-center text-pretty">
                                                        Drop your passport photo here, or{' '}
                                                        <span className="text-cyan-700">
                                                            browse
                                                        </span>
                                                    </div>
                                                    <div className="text-[9px] opacity-70 mt-1">
                                                        Supports: PNG, JPG, JPEG{' '}
                                                    </div>
                                                </label>
                                                <input type="file" id="image" className="hidden" />
                                            </div>
                                            <Button
                                                className={`bg-white rounded-[30px] w-full font-medium py-4 px-2`}>
                                                Save
                                            </Button>

                                            <div className="flex flex-col gap-3 pt-4">
                                                <FormInput
                                                    label="Passport No"
                                                    placeholder="Passport No"
                                                    name="passportNo"
                                                    classNames={{ mainWrapper: 'w-full' }}
                                                    type="number"
                                                    isRequired
                                                />

                                                <FormInput
                                                    label="Date of Issue"
                                                    placeholder="Date of Issue"
                                                    name="dateOfIssue"
                                                    type="date"
                                                    classNames={{ mainWrapper: 'w-full' }}
                                                    isRequired
                                                />

                                                <FormInput
                                                    label="Issuing Authority"
                                                    placeholder="Issuing Authority"
                                                    name="issuingAuthority"
                                                    classNames={{ mainWrapper: 'w-full' }}
                                                    isRequired
                                                />

                                                <FormInput
                                                    label="Date of Expiration"
                                                    placeholder="Date of Expiration"
                                                    name="dateOfExpiration"
                                                    type="date"
                                                    classNames={{ mainWrapper: 'w-full' }}
                                                    isRequired
                                                />
                                            </div>
                                        </div>

                                        <div className="flex justify-center items-center gap-4 w-full">
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
                                            type="submit"
                                            className={`${
                                                currentStep === 3 ? 'hidden' : ''
                                            } bg-white text-black rounded-[30px] font-medium py-4 px-2 w-full max-w-none`}>
                                            {currentStep === steps.length - 1
                                                ? 'Submit'
                                                : 'Next Step'}
                                        </SubmitButton>
                                        <Button
                                            className={`${
                                                currentStep === 3 ? '' : 'hidden'
                                            } bg-white rounded-[30px] w-full font-medium py-4 px-2`}
                                            onClick={nextStep}>
                                            Next Step
                                        </Button>
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
