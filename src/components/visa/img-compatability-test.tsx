import { Fragment } from 'react/jsx-runtime';
import { Image } from '@nextui-org/react';
import { CheckIcon } from '@/components/icons/check-icon';

interface PhotoReviewSectionProps {
    currentStep: number;
    photoSrc: string;
}

export default function PhotoReviewSection({ currentStep, photoSrc }: PhotoReviewSectionProps) {
    return (
        <Fragment>
            <div className="photo-review-section">
                <h2 className="text-lg font-medium pb-4">Your Photo</h2>
                <div className="w-full pb-2">
                    <Image
                        alt="Uploaded Photo"
                        className="object-contain w-full mx-auto mb-1"
                        shadow="none"
                        src={photoSrc || '/images/placeholder.png'}
                        width="100%"
                    />
                </div>

                <div className={`${currentStep === 3 ? 'hidden' : ''}`}>
                    <h2 className="text-xl font-medium pb-4">Compatibility test passed</h2>

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

                    <h2 className="text-lg font-medium pt-6 pb-4">How to take good photos</h2>

                    <div className="w-full pb-2">
                        <Image
                            alt="Upload Guide"
                            className="object-contain w-full mx-auto mb-1 aspect-square"
                            shadow="none"
                            src="/images/upload-guide.png"
                            width="100%"
                        />
                    </div>

                    <h3 className="text-lg font-medium pb-2">Quality</h3>
                    <p>
                        Our team of experts will review your photo and make sure it meets all the
                        necessary criteria for your passport, so you can have peace of mind knowing
                        your photo will be accepted.
                    </p>
                </div>
            </div>
        </Fragment>
    );
}
