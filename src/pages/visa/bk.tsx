import { SetStateAction, useState } from 'react';
import { Card, CardBody, Button, Select, SelectItem, Input, DatePicker } from '@nextui-org/react';
import TopNavbar from '@/layout/top-navbar';

import Form from '@/components/form';
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

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required('First Name is required'),
        lastName: Yup.string().required('Last Name is required')
    });

    const initialValues = {
        firstName: '',
        lastName: '',
        topic: '',
        subTopic: '',
        question: '',
        answers: [
            { index: 0, value: '' },
            { index: 1, value: '' },
            { index: 2, value: '' },
            { index: 3, value: '' },
            { index: 4, value: '' }
        ]
    };
    

    const [currentStep, setCurrentStep] = useState(0);
    const [formCompleted, setFormCompleted] = useState(Array(steps.length).fill(false));
    const [formData, setFormData] = useState<{
        country: string;
        visaType: string;
        reason: string;
        fullName: string;
        dob: Date;
        placeOfBirth: string;
        countryOfBirth: string;
        nationality: string;
        sex: string;
        maritalStatus: string;
        documents: File[];
    }>({
        country: '',
        visaType: '',
        reason: '',
        fullName: '',
        dob: new Date(),
        placeOfBirth: '',
        countryOfBirth: '',
        nationality: '',
        sex: '',
        maritalStatus: '',
        documents: []
    });

    const validateForm = (stepIndex: number) => {
        const currentData = getCurrentFormData(stepIndex);

        // check if not empty
        return Object.values(currentData).every((value) => value !== '');
    };

    const getCurrentFormData = (stepIndex: number) => {
        switch (stepIndex) {
            case 0:
                return {
                    country: formData.country,
                    visaType: formData.visaType,
                    reason: formData.reason
                };
            case 1:
                return {
                    fullName: formData.fullName,
                    dob: formData.dob,
                    placeOfBirth: formData.placeOfBirth,
                    countryOfBirth: formData.countryOfBirth,
                    nationality: formData.nationality,
                    sex: formData.sex,
                    maritalStatus: formData.maritalStatus
                };
            case 2:
                return { documents: formData.documents };
            default:
                return {};
        }
    };

    const nextStep = () => {
        if (validateForm(currentStep)) {
            const updatedFormCompletion = [...formCompleted];
            updatedFormCompletion[currentStep] = true;
            setFormCompleted(updatedFormCompletion);

            if (currentStep < steps.length - 1) {
                setCurrentStep(currentStep + 1);
            }
        } else alert('Please complete the form before proceeding.');
    };

    const goToStep = (stepIndex: SetStateAction<number>) => {
        const index = typeof stepIndex === 'function' ? stepIndex(currentStep) : stepIndex;
        if (index <= currentStep || formCompleted[currentStep]) setCurrentStep(index);
        else if (!formCompleted[currentStep])
            alert('Please complete the current form step before proceeding.');
    };

    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const countries = [
        { key: '1', label: 'United Kingdom' },
        { key: '2', label: 'United States' },
        { key: '3', label: 'Canada' },
        { key: '4', label: 'Australia' },
        { key: '5', label: 'Sri Lanka' }
    ];

    const renderFormContent = () => {
        switch (currentStep) {
            case 0:
                return (
                    <>
                        <Select
                            name="country"
                            label="Country*"
                            variant="bordered"
                            labelPlacement="outside"
                            placeholder="Select Country"
                            classNames={{ label: '!text-white' }}
                            value={formData.country}
                            onChange={handleChange}
                            required>
                            {countries.map((country) => (
                                <SelectItem key={country.key} value={country.label}>
                                    {country.label}
                                </SelectItem>
                            ))}
                        </Select>

                        <Select
                            name="visaType"
                            label="Visa Type*"
                            variant="bordered"
                            labelPlacement="outside"
                            placeholder="Select Visa Type"
                            classNames={{ label: '!text-white' }}
                            value={formData.visaType}
                            onChange={handleChange}
                            required>
                            <SelectItem key="1" value="Tourist">
                                Tourist
                            </SelectItem>
                            <SelectItem key="2" value="Business">
                                Business
                            </SelectItem>
                            <SelectItem key="3" value="Student">
                                Student
                            </SelectItem>
                            <SelectItem key="4" value="Work">
                                Work
                            </SelectItem>
                        </Select>

                        <Input
                            name="reason"
                            isClearable
                            type="text"
                            label="Reason"
                            variant="bordered"
                            placeholder="Enter the reason for visit"
                            labelPlacement="outside"
                            classNames={{
                                label: ['!text-white', '!border-none'],
                                input: ['!border-none', '!ring-0']
                            }}
                            value={formData.reason}
                            onChange={handleChange}
                        />
                    </>
                );

            case 1:
                return (
                    <>
                        <Input
                            name="fullName"
                            isClearable
                            type="text"
                            label="Full Name*"
                            variant="bordered"
                            placeholder="Enter your full name"
                            labelPlacement="outside"
                            classNames={{
                                label: ['!text-white', '!border-none'],
                                input: ['!border-none', '!ring-0']
                            }}
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                        />

                        <DatePicker
                            label="Date of Birth*"
                            name="dob"
                            className="!text-white"
                            classNames={{
                                label: '!text-white',
                                input: '!text-white'
                            }}
                            variant="bordered"
                            labelPlacement="outside"
                        />

                        <Input
                            name="placeOfBirth"
                            isClearable
                            type="text"
                            label="Place of Birth*"
                            variant="bordered"
                            placeholder="Enter your place of birth"
                            labelPlacement="outside"
                            classNames={{
                                label: ['!text-white', '!border-none'],
                                input: ['!border-none', '!ring-0']
                            }}
                            value={formData.placeOfBirth}
                            onChange={handleChange}
                            required
                        />

                        <Select
                            name="countryOfBirth"
                            label="Country of Birth*"
                            variant="bordered"
                            labelPlacement="outside"
                            placeholder="Select Country"
                            classNames={{ label: '!text-white' }}
                            value={formData.countryOfBirth}
                            onChange={handleChange}
                            required>
                            {countries.map((country) => (
                                <SelectItem key={country.key} value={country.label}>
                                    {country.label}
                                </SelectItem>
                            ))}
                        </Select>

                        <Select
                            name="nationality"
                            label="Current Nationality*"
                            variant="bordered"
                            labelPlacement="outside"
                            placeholder="Select Country"
                            classNames={{ label: '!text-white' }}
                            value={formData.nationality}
                            onChange={handleChange}
                            required>
                            {countries.map((country) => (
                                <SelectItem key={country.key} value={country.label}>
                                    {country.label}
                                </SelectItem>
                            ))}
                        </Select>

                        <Select
                            name="sex"
                            label="Sex*"
                            variant="bordered"
                            labelPlacement="outside"
                            classNames={{ label: '!text-white' }}
                            value={formData.sex}
                            onChange={handleChange}
                            required>
                            <SelectItem key="1" value="male">
                                Male
                            </SelectItem>
                            <SelectItem key="2" value="female">
                                Female
                            </SelectItem>
                            <SelectItem key="3" value="other">
                                Prefer not to say
                            </SelectItem>
                        </Select>

                        <Select
                            name="maritalStatus"
                            label="Marital Status*"
                            variant="bordered"
                            labelPlacement="outside"
                            classNames={{ label: '!text-white' }}
                            value={formData.maritalStatus}
                            onChange={handleChange}
                            required>
                            <SelectItem key="1" value="single">
                                Single
                            </SelectItem>
                            <SelectItem key="2" value="married">
                                Married
                            </SelectItem>
                            <SelectItem key="3" value="divorced">
                                Divorced
                            </SelectItem>
                            <SelectItem key="4" value="widowed">
                                Widowed
                            </SelectItem>
                        </Select>
                    </>
                );

            case 2:
                return (
                    <>
                        <Input
                            name="documents"
                            isClearable
                            type="file"
                            label="Upload Documents*"
                            variant="bordered"
                            labelPlacement="outside"
                            classNames={{
                                label: ['!text-white', '!border-none'],
                                input: ['!border-none', '!ring-0']
                            }}
                            onChange={(e: any) => {
                                setFormData({ ...formData, documents: [...e.target.files] });
                            }}
                            required
                            multiple
                        />
                    </>
                );

            case 3:
                return (
                    <>
                        <div>
                            <h3 className="text-lg">Review your details:</h3>
                        </div>
                    </>
                );

            default:
                return null;
        }
    };

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

                {/* <div className="flex flex-col items-center justify-center mt-8">
                    <Card className="w-full bg-inherit text-white border-2 px-1 py-2 border-zinc-500">
                        <CardBody>
                            <div className="">
                                <h2 className="text-xl">{steps[currentStep].description}</h2>

                                <form className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-4">
                                    {renderFormContent()}

                                    <div className="flex justify-center w-full mt-2">
                                        <Button
                                            className="bg-white rounded-[30px] w-full font-medium py-4 px-2"
                                            onClick={nextStep}>
                                            {currentStep === steps.length - 1
                                                ? 'Submit'
                                                : 'Next Step'}
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </CardBody>
                    </Card>
                </div> */}

                <div className="flex flex-col items-center justify-center mt-8">
                    <Card className="w-full bg-inherit text-white border-2 px-1 py-2 border-zinc-500">
                        <CardBody>
                            <div className="">
                                <h2 className="text-xl">{steps[currentStep].description}</h2>

                                <form className="">
                                    <div className="section-1 flex w-full flex-wrap md:flex-nowrap gap-4 mt-4 text-white">
                                        <Select
                                            name="country"
                                            label="Country*"
                                            variant="bordered"
                                            labelPlacement="outside"
                                            placeholder="Select Country"
                                            classNames={{ label: '!text-white' }}
                                            required>
                                            {countries.map((country) => (
                                                <SelectItem key={country.key} value={country.label}>
                                                    {country.label}
                                                </SelectItem>
                                            ))}
                                        </Select>

                                        <Select
                                            name="visaType"
                                            label="Visa Type*"
                                            variant="bordered"
                                            labelPlacement="outside"
                                            placeholder="Select Visa Type"
                                            classNames={{ label: '!text-white' }}
                                            required>
                                            <SelectItem key="1" value="Tourist">
                                                Tourist
                                            </SelectItem>
                                            <SelectItem key="2" value="Business">
                                                Business
                                            </SelectItem>
                                            <SelectItem key="3" value="Student">
                                                Student
                                            </SelectItem>
                                            <SelectItem key="4" value="Work">
                                                Work
                                            </SelectItem>
                                        </Select>

                                        <Input
                                            name="reason"
                                            isClearable
                                            type="text"
                                            label="Reason"
                                            variant="bordered"
                                            placeholder="Enter the reason for visit"
                                            labelPlacement="outside"
                                            classNames={{
                                                label: ['!text-white', '!border-none'],
                                                input: ['!border-none', '!ring-0']
                                            }}
                                        />
                                    </div>

                                    <div className="section-2 flex w-full flex-wrap md:flex-nowrap gap-4 mt-4 text-white">
                                        <Input
                                            name="fullName"
                                            isClearable
                                            type="text"
                                            label="Full Name*"
                                            variant="bordered"
                                            placeholder="Enter your full name"
                                            labelPlacement="outside"
                                            classNames={{
                                                label: ['!text-white', '!border-none'],
                                                input: ['!border-none', '!ring-0']
                                            }}
                                            required
                                        />

                                        <DatePicker
                                            label="Date of Birth*"
                                            name="dob"
                                            className="!text-white"
                                            classNames={{
                                                label: '!text-white',
                                                input: '!text-white'
                                            }}
                                            variant="bordered"
                                            labelPlacement="outside"
                                        />

                                        <Input
                                            name="placeOfBirth"
                                            isClearable
                                            type="text"
                                            label="Place of Birth*"
                                            variant="bordered"
                                            placeholder="Enter your place of birth"
                                            labelPlacement="outside"
                                            classNames={{
                                                label: ['!text-white', '!border-none'],
                                                input: ['!border-none', '!ring-0']
                                            }}
                                            required
                                        />

                                        <Select
                                            name="countryOfBirth"
                                            label="Country of Birth*"
                                            variant="bordered"
                                            labelPlacement="outside"
                                            placeholder="Select Country"
                                            classNames={{ label: '!text-white' }}
                                            required>
                                            {countries.map((country) => (
                                                <SelectItem key={country.key} value={country.label}>
                                                    {country.label}
                                                </SelectItem>
                                            ))}
                                        </Select>

                                        <Select
                                            name="nationality"
                                            label="Current Nationality*"
                                            variant="bordered"
                                            labelPlacement="outside"
                                            placeholder="Select Country"
                                            classNames={{ label: '!text-white' }}
                                            required>
                                            {countries.map((country) => (
                                                <SelectItem key={country.key} value={country.label}>
                                                    {country.label}
                                                </SelectItem>
                                            ))}
                                        </Select>

                                        <Select
                                            name="sex"
                                            label="Sex*"
                                            variant="bordered"
                                            labelPlacement="outside"
                                            placeholder="Select an option"
                                            classNames={{ label: '!text-white' }}
                                            required>
                                            <SelectItem key="1" value="male">
                                                Male
                                            </SelectItem>
                                            <SelectItem key="2" value="female">
                                                Female
                                            </SelectItem>
                                            <SelectItem key="3" value="other">
                                                Prefer not to say
                                            </SelectItem>
                                        </Select>

                                        <Select
                                            name="maritalStatus"
                                            label="Marital Status*"
                                            variant="bordered"
                                            labelPlacement="outside"
                                            placeholder='Select Marital Status'
                                            classNames={{ label: '!text-white' }}
                                            required>
                                            <SelectItem key="1" value="single">
                                                Single
                                            </SelectItem>
                                            <SelectItem key="2" value="married">
                                                Married
                                            </SelectItem>
                                            <SelectItem key="3" value="divorced">
                                                Divorced
                                            </SelectItem>
                                            <SelectItem key="4" value="widowed">
                                                Widowed
                                            </SelectItem>
                                        </Select>
                                    </div>

                                    <div className="flex justify-center w-full mt-4">
                                        <Button
                                            className="bg-white rounded-[30px] w-full font-medium py-4 px-2"
                                            onClick={nextStep}>
                                            {currentStep === steps.length - 1
                                                ? 'Submit'
                                                : 'Next Step'}
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
}
